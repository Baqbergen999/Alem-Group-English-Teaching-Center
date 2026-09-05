import { motion } from 'motion/react';
import { MapPin, Clock, Car } from 'lucide-react';

const branches = [
  { name: "Абай филиалы", address: "Абай даңғылы, 150", metro: "Алатау метро бекеті" },
  { name: "MEGA филиалы", address: "Розыбакиев көшесі, 247", metro: "Тегін парковка" },
  { name: "Орталық филиал", address: "Төле би көшесі, 71", metro: "Жібек Жолы метросы" },
  { name: "Қаскелең филиалы", address: "Абылай хан көшесі, 12", metro: "Тегін парковка" },
];

export function Branches() {
  return (
    <section id="branches" className="py-10 md:py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Локациялар</p>
          <h2 className="text-xl md:text-5xl font-extrabold text-black mb-4 md:mb-6 tracking-tight">
            Сізге жақын Alem Group филиалын таңдаңыз
          </h2>
          <p className="text-sm md:text-lg text-gray-500">
            Алматы қаласы бойынша 8 заманауи жабдықталған орталық.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-4 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:border-black transition-colors cursor-pointer group">
                <h3 className="font-bold text-black text-lg mb-4">{branch.name}</h3>
                <div className="space-y-3 text-sm text-gray-500 font-medium">
                  <p className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-black" /> {branch.address}
                  </p>
                  <p className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-black" /> 09:00 - 20:00 (Дүй-Сен)
                  </p>
                  <p className="flex items-center gap-3">
                    <Car className="w-4 h-4 text-black" /> {branch.metro}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="lg:col-span-2 bg-gray-200 rounded-[2rem] overflow-hidden h-[500px] relative border border-gray-100 shadow-sm">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1600')] bg-cover bg-center grayscale opacity-80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/95 backdrop-blur-md p-8 rounded-2xl text-center shadow-xl border border-white/20">
                <MapPin className="w-8 h-8 text-black mx-auto mb-4" />
                <h3 className="font-extrabold text-black text-xl mb-2">Интерактивті Карта</h3>
                <p className="text-gray-500 text-sm">2GIS немесе Google Maps картасы осында орналасады</p>
                <button className="mt-6 bg-black text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-800 transition-colors">
                  Маршрут құру
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
