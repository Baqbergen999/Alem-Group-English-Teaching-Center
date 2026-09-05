import { motion } from 'motion/react';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 rounded-full text-xs font-bold uppercase tracking-widest mb-8 text-black">
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
            Орындар шектеулі — Тек 7 орын қалды
          </div>
          
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-black mb-6 md:mb-8">
            Болашаққа нық қадам — <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Alem Group</span>
          </h1>
          
          <p className="text-sm md:text-lg text-gray-500 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
            Зеріктіретін грамматикасыз, интерактивті әдіспен оқытамыз. Балаларға, жасөспірімдерге және НИШ/БИЛ-ге дайындық. Нәтижеге 100% кепілдік береміз.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 mb-12 md:mb-16 w-full">
            <a href="#lead-magnet" className="w-full sm:w-auto bg-black text-white px-6 py-4 md:px-8 md:py-5 rounded-xl text-sm md:text-lg font-bold transition-transform hover:scale-105 flex items-center justify-center gap-2">
              ТЕГІН СЫНАҚ САБАҒЫ
            </a>
            <div className="flex flex-col text-left">
              <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Рейтинг 2GIS</span>
              <span className="text-xl font-bold">5.0 ⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-24 max-w-3xl mx-auto pt-10 md:pt-12 border-t border-gray-100"
        >
          <div className="text-center">
            <span className="block text-2xl md:text-4xl font-extrabold text-black mb-1">1000+</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Түлектер</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-4xl font-extrabold text-black mb-1">8</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Филиалдар</span>
          </div>
          <div className="text-center">
            <span className="block text-2xl md:text-4xl font-extrabold text-black mb-1">98%</span>
            <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-widest">Грант иегерлері</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
