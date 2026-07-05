import type { ContactFormData } from "@/types";

/**
 * Simulation d'envoi côté frontend. À remplacer par un appel API réel
 * lors de l'intégration d'un backend, sans changer la signature ni les
 * composants qui l'utilisent.
 */
export async function submitContactMessage(data: ContactFormData): Promise<{ success: boolean }> {
  await new Promise((resolve) => setTimeout(resolve, 600));
  return { success: Boolean(data.name && data.email && data.message) };
}
