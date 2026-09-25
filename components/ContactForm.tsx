"use client";

import { FormEvent, useState } from "react";

type ContactFormProps = {
  defaultInquiryType?: string;
};

export default function ContactForm({ defaultInquiryType = "General inquiry" }: ContactFormProps) {
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setBusy(true);
    setMessage("");

    const form = new FormData(event.currentTarget);
    const payload = {
      firstName: String(form.get("firstName") || ""),
      lastName: String(form.get("lastName") || ""),
      email: String(form.get("email") || ""),
      organization: String(form.get("organization") || ""),
      inquiryType: String(form.get("inquiryType") || defaultInquiryType),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      setMessage(data.message);
      if (response.ok) event.currentTarget.reset();
    } catch {
      setMessage("Your message could not be sent right now. Please try again shortly.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid two-fields">
        <div className="field-group">
          <label htmlFor="contact-first-name">First name</label>
          <input id="contact-first-name" name="firstName" required autoComplete="given-name" />
        </div>
        <div className="field-group">
          <label htmlFor="contact-last-name">Last name</label>
          <input id="contact-last-name" name="lastName" autoComplete="family-name" />
        </div>
      </div>

      <div className="form-grid two-fields">
        <div className="field-group">
          <label htmlFor="contact-email">Email address</label>
          <input id="contact-email" name="email" type="email" required autoComplete="email" />
        </div>
        <div className="field-group">
          <label htmlFor="contact-organization">Organization <span>(optional)</span></label>
          <input id="contact-organization" name="organization" autoComplete="organization" />
        </div>
      </div>

      <div className="field-group">
        <label htmlFor="contact-type">What can we help with?</label>
        <select id="contact-type" name="inquiryType" defaultValue={defaultInquiryType}>
          <option>General inquiry</option>
          <option>Reader question</option>
          <option>Book signing or event</option>
          <option>Media or interview request</option>
          <option>Rights and licensing</option>
          <option>Screen adaptation</option>
          <option>Creative collaboration</option>
          <option>Website or technology</option>
        </select>
      </div>

      <div className="field-group">
        <label htmlFor="contact-subject">Subject</label>
        <input id="contact-subject" name="subject" required maxLength={160} />
      </div>

      <div className="field-group">
        <label htmlFor="contact-message">Message <span>(at least 10 characters)</span></label>
        <textarea id="contact-message" name="message" required minLength={10} rows={8} maxLength={5000} />
      </div>

      <div className="form-consent">
        <input id="contact-consent" name="consent" type="checkbox" required />
        <label htmlFor="contact-consent">I consent to Wonder Works Creative, LLC using this information to respond to my inquiry.</label>
      </div>

      <button className="button" type="submit" disabled={busy}>{busy ? "Sending…" : "Send Message ✦"}</button>
      {message && <p className="form-message" role="status">{message}</p>}
    </form>
  );
}
