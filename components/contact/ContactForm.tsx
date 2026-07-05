"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { submitContactMessage } from "@/services/contact.service";
import type { ContactFormData } from "@/types";

const initialData: ContactFormData = { name: "", email: "", phone: "", message: "" };

export default function ContactForm() {
  const [data, setData] = useState<ContactFormData>(initialData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function updateField<K extends keyof ContactFormData>(field: K, value: ContactFormData[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitContactMessage(data);
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-black/10 bg-white p-8 text-center dark:border-white/10 dark:bg-zinc-900"
      >
        <h2 className="text-xl font-semibold">Message envoyé</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Merci {data.name}, nous vous répondrons dès que possible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === "error" && (
        <p role="alert" aria-live="polite" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-500/10 dark:text-red-400">
          L&apos;envoi a échoué. Merci de réessayer ou de nous contacter directement via WhatsApp.
        </p>
      )}

      <div>
        <label htmlFor="contact-name" className="text-sm font-medium">
          Nom
        </label>
        <input
          id="contact-name"
          required
          maxLength={100}
          value={data.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="contact-email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          maxLength={150}
          value={data.email}
          onChange={(event) => updateField("email", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="contact-phone" className="text-sm font-medium">
          Téléphone (optionnel)
        </label>
        <input
          id="contact-phone"
          type="tel"
          maxLength={20}
          value={data.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          maxLength={1000}
          value={data.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <Button type="submit" size="lg" className="mt-2">
        {status === "submitting" ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </form>
  );
}
