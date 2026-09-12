import ContactForm from "@/components/ContactForm";
import PageShell from "@/components/PageShell";

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title="Start a Conversation"
      intro="Send a message about books, events, media, publishing, rights, screen adaptation, collaboration, or Wonder Works Creative projects."
    >
      <div className="contact-layout">
        <aside className="contact-guidance">
          <article className="content-card">
            <h2>Reader and general inquiries</h2>
            <p>Questions about <em>When the Lights Knock</em>, Wonder Works Publishing, launch-team participation, or future projects are welcome.</p>
          </article>
          <article className="content-card">
            <h2>Events, media, and collaboration</h2>
            <p>For a signing, interview, speaking request, or collaboration, include the organization, proposed date, location or online format, audience, and requested role.</p>
          </article>
          <article className="content-card">
            <h2>Rights and adaptations</h2>
            <p>Use the inquiry menu to identify rights, licensing, screen adaptation, or partnership requests so they can be routed appropriately.</p>
          </article>
        </aside>
        <section className="content-card contact-form-card" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Send a message</h2>
          <p>Your information will be used only to review and respond to this inquiry.</p>
          <ContactForm />
        </section>
      </div>
    </PageShell>
  );
}
