import { type FormEvent, useState } from "react";
import { contact } from "../data/profile";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // No backend needed: this opens the visitor's email client with everything
  // pre-filled, addressed to you. Swap this for EmailJS or another service
  // later if you want messages to send without opening an email app.
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const body = `From: ${name} (${email})\n\n${message}`;
    const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject || "Portfolio contact",
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24">
      <div className="rounded-3xl glass p-8 sm:p-12 grid md:grid-cols-2 gap-10">
        <div>
          <div className="text-sm text-accent font-medium">Contact</div>
          <h2 className="mt-2 font-display text-3xl font-semibold">
            Let's build something meaningful.
          </h2>
          <p className="mt-3 text-muted max-w-sm">
            Have a dataset that needs a story, or a product that needs shipping? Say hello.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div>
              <div className="text-muted">Email</div>
              <a href={`mailto:${contact.email}`} className="hover:text-accent">
                {contact.email}
              </a>
            </div>
            <div>
              <div className="text-muted">Phone</div>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-accent">
                {contact.phone}
              </a>
            </div>
            <div>
              <div className="text-muted">Location</div>
              <div>{contact.location}</div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="grid sm:grid-cols-2 gap-3">
            <input
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-lg bg-white/5 border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg bg-white/5 border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
            />
          </div>
          <input
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent"
          />
          <textarea
            required
            placeholder="Message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-lg bg-white/5 border border-line px-4 py-3 text-sm placeholder:text-muted focus:outline-none focus:border-accent resize-none"
          />
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-accent to-accent2 text-ink font-medium py-3 text-sm hover:opacity-90 transition-opacity"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
