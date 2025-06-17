import { Header } from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import { Features } from '../components/sections/Features';
import { Trust } from '../components/sections/Trust';
import { Roadmap } from '../components/sections/Roadmap';
import { Waitlist } from '../components/sections/Waitlist';
import { Footer } from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <Header />
      <main>
        <Hero />
        <Features />
        <Trust />
        <Roadmap />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
