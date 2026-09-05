import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export function WhatsAppWidget() {
  return (
    <motion.a
      href="https://wa.me/77000000000"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebd5a] hover:scale-110 text-white p-4 rounded-full shadow-lg shadow-green-500/20 transition-all flex items-center justify-center group"
    >
      <MessageCircle className="w-6 h-6 relative z-10" />
      
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold uppercase tracking-widest py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap hidden md:block">
        Әкімшіге жазу
        <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-black"></div>
      </div>
    </motion.a>
  );
}
