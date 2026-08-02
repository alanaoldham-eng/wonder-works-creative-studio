import { NextRequest, NextResponse } from 'next/server';
import { Pool } from 'pg';
import { z } from 'zod';
const schema=z.object({email:z.string().email().max(320),firstName:z.string().trim().max(80).optional(),source:z.string().trim().max(80).default('homepage')});
const pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.NODE_ENV==='production'?{rejectUnauthorized:false}:undefined});
export async function POST(req:NextRequest){
  try{
    const data=schema.parse(await req.json());
    await pool.query(`INSERT INTO newsletter_subscribers(email,first_name,source,user_agent)
      VALUES($1,$2,$3,$4)
      ON CONFLICT(email) DO UPDATE SET first_name=COALESCE(EXCLUDED.first_name,newsletter_subscribers.first_name), status=CASE WHEN newsletter_subscribers.status='unsubscribed' THEN 'pending' ELSE newsletter_subscribers.status END, updated_at=NOW()`,
      [data.email,data.firstName||null,data.source,req.headers.get('user-agent')]);
    return NextResponse.json({ok:true,message:'You are on the launch list.'},{status:201});
  }catch(error){
    if(error instanceof z.ZodError) return NextResponse.json({ok:false,message:'Please enter a valid email address.'},{status:400});
    console.error(error); return NextResponse.json({ok:false,message:'Subscription could not be saved.'},{status:500});
  }
}
