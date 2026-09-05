import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const courses = [
  {
    title: "Балаларға арналған ағылшын",
    target: "4-8 жас",
    desc: "Ерте дамыту және ойын арқылы әлемді тану.",
    features: ["Интерактивті ойындар", "Әндер мен мультфильмдер", "Ағылшынша ойлауды қалыптастыру"],
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Жасөспірімдер мен оқушылар",
    target: "9-15 жас",
    desc: "Мектеп бағдарламасын көтеру және еркін сөйлеу.",
    features: ["Грамматиканы оңай түсіну", "Speaking club", "Мектептегі бағаны жақсарту"],
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "НИШ / БИЛ / ҰБТ",
    target: "Түлектер",
    desc: "Грантқа түсуге арнайы қарқынды дайындық.",
    features: ["Нақты тест тапсырмалары", "Стратегиялық дайындық", "Психологиялық қолдау"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Ересектерге арналған",
    target: "16+ жас",
    desc: "Жұмысқа, саяхатқа қажетті разговорный ағылшын.",
    features: ["90% сөйлеу практикасы", "Бизнес терминология", "Кедергілерді жою (языковой барьер)"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  }
];

export function Courses() {
  return (
    <section id="courses" className="py-10 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Бағдарламалар</p>
          <h2 className="text-xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">
            Кімге арналған?
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            Әр жас ерекшелігіне және мақсатына сай арнайы жасалған бағдарламалар.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-black transition-colors flex flex-col sm:flex-row shadow-sm"
            >
              <div className="sm:w-2/5 h-48 sm:h-auto overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 sm:p-8 sm:w-3/5 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-4 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                    {course.target}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-black mb-2">{course.title}</h3>
                  <p className="text-xs md:text-sm text-gray-500 mb-6">{course.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {course.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-black shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="#lead-magnet" className="inline-flex items-center text-black font-bold uppercase tracking-widest text-xs group/btn">
                  Кестені білу
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-2 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
