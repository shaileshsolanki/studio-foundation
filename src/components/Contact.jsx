import { useState } from "react";
import { studio } from "../content.js";
import { Reveal } from "./Reveal.jsx";
import { Button, Input, Eyebrow, Heading, Lead } from "../ui/index.js";

export function Contact() {
  const [sent, setSent] = useState(false);

  // No backend yet: fall back to a mailto so the CTA is functional on launch.
  // Swap for a real endpoint (Formspree / serverless) when one is wired.
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("name") || "").toString().trim();
    const message = (data.get("message") || "").toString().trim();
    const body = encodeURIComponent(`${message}\n\n— ${name}`);
    const subject = encodeURIComponent(`New project enquiry from ${name || "the site"}`);
    window.location.href = `mailto:${studio.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]">
        <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <Reveal as="div">
              <Eyebrow className="mb-3">Contact</Eyebrow>
            </Reveal>
            <Reveal as="div" delay={60}>
              <Heading as="h2">Let's build something worth shipping.</Heading>
            </Reveal>
            <Reveal as="div" delay={120}>
              <Lead className="mt-4">
                Tell us what you're working on. We reply to every serious enquiry
                within two business days.
              </Lead>
            </Reveal>
            <Reveal delay={180} className="mt-8">
              <a
                href={`mailto:${studio.email}`}
                className="inline-flex items-center gap-2 text-base font-semibold text-neutral-100 transition-colors hover:text-emerald-400"
              >
                {studio.email}
              </a>
            </Reveal>
          </div>

          <Reveal as="div" delay={120}>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              <Input
                label="Name"
                name="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Jane Doe"
              />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="jane@company.com"
              />
              <Input
                as="textarea"
                label="What can we help with?"
                name="message"
                rows={4}
                required
                placeholder="A few lines about your project, timeline, and budget."
              />
              <Button type="submit" className="mt-2">
                Send enquiry
              </Button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm text-emerald-400 ${sent ? "" : "sr-only"}`}
              >
                {sent ? "Opening your email client — thanks for reaching out!" : ""}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
