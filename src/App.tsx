/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { USP } from './components/USP';
import { Courses } from './components/Courses';
import { Teachers } from './components/Teachers';
import { Results } from './components/Results';
import { LeadMagnet } from './components/LeadMagnet';
import { Branches } from './components/Branches';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-black selection:text-white scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <USP />
        <Courses />
        <Teachers />
        <Results />
        <LeadMagnet />
        <Branches />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
