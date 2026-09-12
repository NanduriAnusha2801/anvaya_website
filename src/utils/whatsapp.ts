export const WHATSAPP_NUMBER = "919177300297";

export const WHATSAPP_MESSAGES = {
  getInTouch:
    "Hi Anvaya Groups, I would like to get in touch and learn more about your services.",
  startProject:
    "Hi Anvaya Groups, I would like to start a project with you. I would like to discuss my requirements and get more information about your technology solutions.",
  bookConsultation:
    "Hi Anvaya Groups, I would like to book a consultation. Please let me know the available time slots.",
  getGuidance:
    "Hi Anvaya Groups, I would like to get guidance regarding education and college admissions. Please share more details.",
  startVisaProcess:
    "Hi Anvaya Groups, I would like assistance with the visa process. Please guide me through the requirements and next steps.",
  contactAnvaya:
    "Hi Anvaya Groups, I would like to connect and discuss my requirements. Please let me know how you can help.",
  exploreTechServices:
    "Hi Anvaya Groups, I am interested in your technology services. I would like to discuss my project requirements.",
} as const;

export type WhatsAppMessageKey = keyof typeof WHATSAPP_MESSAGES;

/**
 * Opens WhatsApp in a new tab with a pre-filled message.
 * Accepts either a known message key or a raw custom string.
 */
export function openWhatsApp(message: WhatsAppMessageKey | string) {
  const text =
    message in WHATSAPP_MESSAGES
      ? WHATSAPP_MESSAGES[message as WhatsAppMessageKey]
      : message;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  window.open(url, "_blank", "noopener,noreferrer");
}
