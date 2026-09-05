import { motion } from 'motion/react';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl uppercase">A</div>
            <span className="font-extrabold text-xl tracking-tight uppercase">Alem Group</span>
          </div>
          <nav className="hidden md:flex space-x-8 text-sm font-bold tracking-wide">
            <a href="#courses" className="text-black hover:opacity-60 transition-opacity">Курстар</a>
            <a href="#teachers" className="text-black hover:opacity-60 transition-opacity">Мұғалімдер</a>
            <a href="#results" className="text-black hover:opacity-60 transition-opacity">Нәтижелер</a>
            <a href="#branches" className="text-black hover:opacity-60 transition-opacity">Филиалдар</a>
          </nav>
          <div className="flex items-center gap-6">
            <span className="hidden lg:block text-xs font-bold text-gray-400 uppercase tracking-widest">Алматы • 8 филиал</span>
            <a href="#lead-magnet" className="bg-black hover:scale-105 text-white px-6 py-2.5 rounded-xl text-sm font-bold transition-transform shadow-sm">
              Тегін сабақ
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
