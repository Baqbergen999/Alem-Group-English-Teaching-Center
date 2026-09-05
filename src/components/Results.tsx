import { motion } from 'motion/react';

const results = [
  {
    name: "Айжан, 11 сынып",
    result: "IELTS 7.0",
    text: "«3 айда Elementary-ден Intermediate-ке өттім. Ағылшын тілінде сөйлеуге деген қорқынышым жоғалды. Мұғалімдерге үлкен рахмет!»"
  },
  {
    name: "Арман, 6 сынып оқушысы",
    result: "НИШ гранты",
    text: "«НИШ-ке грантқа түстім! Сабақтар өте қызық өтті, тест тапсырмаларын қалай тез шешу керектігін үйрендім.»"
  },
  {
    name: "Меруерт, анасы",
    result: "Мектептегі бағасы - 5",
    text: "«Баламның мектептегі бағасы жақсарды. Ең бастысы, ол ағылшын тіліне қуанып барады. Alem Group-қа сенімдіміз!»"
  }
];

export function Results() {
  return (
    <section id="results" className="py-10 md:py-24 bg-white border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Нәтижелер</p>
          <h2 className="text-xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">
            Біздің түлектердің нақты нәтижелері
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            Сөзге емес, нәтижеге сеніңіз. Оқушыларымыздың жетістіктері — біздің басты мақтанышымыз.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50/50 rounded-2xl p-8 border border-gray-100 flex flex-col hover:border-black transition-colors"
            >
              <div className="text-2xl font-bold mb-4 tracking-tight">5.0 ⭐⭐⭐⭐⭐</div>
              <p className="text-gray-700 text-sm md:text-lg mb-8 leading-relaxed font-medium">
                {review.text}
              </p>
              <div className="mt-auto pt-6 border-t border-gray-200">
                <p className="font-bold text-black">{review.name}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">
                  Нәтиже: <span className="text-black">{review.result}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
