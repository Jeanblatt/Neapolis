"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { getWhatsAppLink, whatsappMessages } from "@/lib/whatsapp";
import { submitQuoteRequest } from "@/services/quote.service";
import type { QuoteRequest } from "@/types";

const initialData: QuoteRequest = { name: "", phone: "", need: "", message: "" };

export default function QuoteForm() {
  const [data, setData] = useState<QuoteRequest>(initialData);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function updateField<K extends keyof QuoteRequest>(field: K, value: QuoteRequest[K]) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    try {
      const result = await submitQuoteRequest(data);
      setStatus(result.success ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    const whatsappMessage = whatsappMessages.quoteFollowUp(data.need, data.message);

    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl border border-black/10 bg-white p-8 text-center dark:border-white/10 dark:bg-zinc-900"
      >
        <h2 className="text-xl font-semibold">Demande envoyée</h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Merci {data.name}, nous revenons vers vous rapidement au {data.phone}.
        </p>
        <div className="mt-6">
          <Button href={getWhatsAppLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" variant="secondary">
            Envoyer aussi via WhatsApp
          </Button>
        </div>
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
        <label htmlFor="name" className="text-sm font-medium">
          Nom
        </label>
        <input
          id="name"
          required
          maxLength={100}
          value={data.name}
          onChange={(event) => updateField("name", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-sm font-medium">
          Téléphone
        </label>
        <input
          id="phone"
          type="tel"
          required
          maxLength={20}
          value={data.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="need" className="text-sm font-medium">
          Produit ou besoin
        </label>
        <input
          id="need"
          required
          maxLength={150}
          value={data.need}
          onChange={(event) => updateField("need", event.target.value)}
          placeholder="Ex. Ordinateur portable, réparation, réseau..."
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          maxLength={1000}
          value={data.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="mt-1.5 w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 text-sm outline-none focus-visible:ring-2 focus-visible:ring-primary dark:border-white/10 dark:bg-zinc-900"
        />
      </div>

      <Button type="submit" size="lg" className="mt-2" disabled={status === "submitting"}>
        {status === "submitting" ? "Envoi en cours..." : "Envoyer la demande"}
      </Button>
    </form>
  );
}
