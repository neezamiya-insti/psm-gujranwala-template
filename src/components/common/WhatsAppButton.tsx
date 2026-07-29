import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/9255123456"
      target="_blank"
      aria-label="Contact principal on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 animate-bounce items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
    >
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30"></span>
      <FaWhatsapp className="relative h-8 w-8" />
    </Link>
  );
}