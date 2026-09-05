import { motion } from 'motion/react';
import { ArrowRight, Gift, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function LeadMagnet() {
  const [formData, setFormData] = useState({ name: '', date: '', time: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="lead-magnet" className="py-10 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border border-gray-100 rounded-[2rem] overflow-hidden shadow-sm">
          
          <div className="md:col-span-7 p-6 md:p-16 flex flex-col justify-center bg-gray-50/50">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-gray-200 rounded-full text-xs font-bold uppercase tracking-widest mb-6 md:mb-8 w-fit text-black">
              🎁 Арнайы ұсыныс
            </div>
            <h2 className="text-xl md:text-5xl font-extrabold mb-4 md:mb-6 leading-[1.1] tracking-tight text-black">
              Ағылшын тіліңіз қай деңгейде екенін білмейсіз бе?
            </h2>
            <p className="text-gray-500 text-sm md:text-lg mb-8 md:mb-10 max-w-lg leading-relaxed">
              2 минуттық экспресс-тест тапсырып, 100% ТЕГІН сынақ сабағы мен алғашқы айға 10% жеңілдік купонын алыңыз!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center font-bold text-sm text-black">1</div>
                <span className="font-bold text-black">Өтінім қалдырыңыз</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center font-bold text-sm text-black">2</div>
                <span className="font-bold text-black">Тегін деңгей анықтау тестінен өтіңіз</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-gray-300 bg-white flex items-center justify-center font-bold text-sm text-black">3</div>
                <span className="font-bold text-black">Жеңілдікпен сабақты бастаңыз</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 bg-black text-white p-6 md:p-16 flex flex-col justify-center">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/10 text-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Өтінім қабылданды!</h3>
                <p className="text-gray-400 text-sm">Менеджеріміз сізбен жақын арада хабарласады.</p>
              </motion.div>
            ) : (
              <>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-8">Сынақ сабағына жазылу</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input 
                    type="text" 
                    id="name"
                    required
                    placeholder="Есіміңіз"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/50 transition-colors placeholder:text-gray-400"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  
                  <input 
                    type="date" 
                    id="date"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/50 transition-colors text-white"
                    value={formData.date}
                    onChange={e => setFormData({...formData, date: e.target.value})}
                  />

                  <select 
                    id="time"
                    required
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-white/50 appearance-none transition-colors text-white"
                    value={formData.time}
                    onChange={e => setFormData({...formData, time: e.target.value})}
                  >
                    <option value="" disabled className="text-black">Ыңғайлы уақытты таңдаңыз</option>
                    <option value="morning" className="text-black">Таңертең</option>
                    <option value="afternoon" className="text-black">Түстен кейін</option>
                    <option value="evening" className="text-black">Кешке</option>
                    <option value="weekend" className="text-black">Демалыс күндері</option>
                  </select>

                  <button 
                    type="submit"
                    className="w-full bg-white text-black font-bold py-4 mt-4 rounded-xl hover:bg-gray-200 transition-transform hover:scale-105"
                  >
                    Сынақ сабағына жазылу
                  </button>
                  <p className="text-[10px] text-gray-400 text-center mt-4">
                    * Тіркелген соң 10% жеңілдік купонын аласыз
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
