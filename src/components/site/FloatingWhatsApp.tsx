import { WhatsAppIcon, waLink } from "./WhatsAppCTA";

export function FloatingWhatsApp() {
  return (
    <a
      href={waLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 bg-whatsapp text-white pl-3 pr-4 py-3 rounded-full shadow-lg shadow-black/20 hover:opacity-95 active:scale-95 transition-all"
    >
      <WhatsAppIcon className="size-5" />
      <span className="text-sm font-medium hidden sm:inline">Chat WhatsApp</span>
    </a>
  );
}
