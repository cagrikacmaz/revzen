export const WHATSAPP_NUMBER = '905422176687';
export const DECK_FILE = 'Dinamik_Yapay_Pencere_Yatirimci_Sunumu.pdf';

export const whatsappUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
