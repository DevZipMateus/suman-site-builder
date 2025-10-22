import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5514998017067"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
      aria-label="Falar no WhatsApp"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
