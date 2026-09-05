import { motion } from 'motion/react';
import { Award, GraduationCap } from 'lucide-react';

const teachers = [
  {
    name: "Аяулым Серікова",
    role: "Senior Teacher",
    score: "IELTS 8.0",
    exp: "5 жыл тәжірибе",
    desc: "«Менің мақсатым — оқушыларға ағылшын тілін жаттатқызу емес, оны түсініп, жақсы көруге үйрету. Сабақтарымда қателік жасауға рұқсат!»",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Диас Маратов",
    role: "НИШ/БИЛ эксперті",
    score: "IELTS 7.5",
    exp: "4 жыл тәжірибе",
    desc: "«Оқушыны қорқытпай, досындай бағыттайтын тәсілді қолданамын. Грантқа түсу — дұрыс стратегия мен психологиялық дайындықтың жемісі.»",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Мәдина Асқарқызы",
    role: "Kids & Teens Teacher",
    score: "CELTA certified",
    exp: "6 жыл тәжірибе",
    desc: "«Балалар үшін ең бастысы — процесс. Біздің сабақтар қызықты ойын сияқты өтеді, сондықтан балалар келесі сабақты асыға күтеді.»",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&q=80&w=800"
  }
];

export function Teachers() {
  return (
    <section id="teachers" className="py-10 md:py-24 bg-gray-50/50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Мұғалімдер құрамы</p>
          <h2 className="text-xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">
            Оқушыны қорқытпай, досындай бағыттайтын мамандар
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            Біздің мұғалімдер — жай ғана ұстаз емес, балаңыздың шабыттандырушы менторлары. Олар қатаң баға қоймайды және тілді сүюге үйретеді.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col hover:border-black transition-colors group"
            >
              <div className="relative w-full h-64 mb-6 rounded-xl overflow-hidden">
                <img 
                  src={teacher.image} 
                  alt={teacher.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-black flex items-center gap-1 shadow-sm">
                    <Award className="w-3.5 h-3.5 text-black" />
                    {teacher.score}
                  </div>
                  <div className="bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold text-black flex items-center gap-1 shadow-sm">
                    <GraduationCap className="w-3.5 h-3.5 text-black" />
                    {teacher.exp}
                  </div>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-lg md:text-xl font-bold text-black">{teacher.name}</h3>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-400 mt-1">{teacher.role}</p>
              </div>
              
              <p className="text-gray-500 text-sm leading-relaxed italic flex-grow">
                {teacher.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
