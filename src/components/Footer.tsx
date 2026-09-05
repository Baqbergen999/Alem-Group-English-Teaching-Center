import { Instagram, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-4 py-8 md:px-10 bg-gray-50 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between text-xs text-gray-400 font-medium gap-6 text-center md:text-left">
      <div>© {new Date().getFullYear()} Alem Group Language Center. Барлық құқықтар қорғалған.</div>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <span className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Алматы қ., 8 филиал (Метро/Парковка бар)</span>
        <span className="flex items-center gap-2"><Phone className="w-4 h-4" /> +7 (700) 000 00 00</span>
        <span className="text-black font-bold uppercase tracking-widest flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity">
          Instagram • TikTok • YouTube
        </span>
      </div>
    </footer>
  );
}
