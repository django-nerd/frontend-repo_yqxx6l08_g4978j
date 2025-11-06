import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-0">
        <Spline scene="https://prod.spline.design/0z8m48W0fG1BZI8o/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-2.5 py-1.5 rounded-full bg-blue-600/10 text-blue-700 dark:text-blue-300 border border-blue-600/20">
            New • Weekly tech drops
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Wawasan teknologi modern untuk kreator dan developer
          </h1>
          <p className="mt-5 text-lg text-zinc-600 dark:text-zinc-300">
            Ulasan gadget, tutorial coding, AI, dan tren industri dalam satu tempat. Dibangun dengan estetika futuristik dan performa cepat.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#articles" className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium shadow hover:opacity-90 transition">
              Mulai Membaca
              <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#subscribe" className="inline-flex items-center justify-center px-5 py-3 rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
              Langganan Newsletter
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white dark:from-zinc-950/80 dark:via-zinc-950/40 dark:to-zinc-950" />
    </section>
  );
}
