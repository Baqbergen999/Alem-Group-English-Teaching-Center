import { motion } from 'motion/react';
import { Gamepad2, BrainCircuit, Users, ShieldCheck } from 'lucide-react';

const usps = [
  {
    title: "Интерактивті оқыту",
    desc: "Зеріктіретін кітаптар емес, қызықты ойындар мен практика арқылы тіл үйрену.",
    icon: Gamepad2,
  },
  {
    title: "Кембридж методикасы",
    desc: "Халықаралық стандарттарға сай, 80% сөйлеуге бағытталған заманауи бағдарлама.",
    icon: BrainCircuit,
  },
  {
    title: "Шағын топтар",
    desc: "Әр оқушыға жеке назар аудару үшін топта ең көбі 6-8 адам болады.",
    icon: Users,
  },
  {
    title: "Нәтижеге кепілдік",
    desc: "Егер 3 айда нәтиже болмаса, ақшаңызды қайтарамыз немесе тегін оқытамыз.",
    icon: ShieldCheck,
  }
];

export function USP() {
  return (
    <section className="py-10 md:py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-center text-center max-w-3xl mx-auto">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Уникальное Торговое Предложение</p>
          <h2 className="text-xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">
            Неліктен <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Alem Group?</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-500 leading-relaxed">
            Мектептердегі немесе стандартты курстардағы сияқты зеріктіретін грамматика емес, қызықты әрі тез нәтиже беретін оқыту әдісі.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:border-black hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{usp.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{usp.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
