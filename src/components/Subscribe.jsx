import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section id="subscribe" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-zinc-50 to-white dark:from-zinc-900 dark:to-zinc-950 p-8 md:p-12">
          <div className="md:flex items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Dapatkan update teknologi setiap minggu</h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-300">Artikel pilihan, ringkasan tren, dan tips praktis langsung ke inbox Anda.</p>
            </div>
            <form onSubmit={onSubmit} className="mt-6 md:mt-0 md:flex-1 grid sm:grid-cols-[1fr_auto] gap-3">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Alamat email"
                  className="w-full pl-10 pr-3 py-3 rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Memproses…' : status === 'success' ? 'Berhasil! 🎉' : 'Langganan'}
              </button>
              {status === 'error' && (
                <p className="sm:col-span-2 text-sm text-red-600">Masukkan email yang valid.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
