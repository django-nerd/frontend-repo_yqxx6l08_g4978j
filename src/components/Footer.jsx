import { Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200 dark:border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">TechBlogger</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Blog teknologi modern yang membahas gadget, software, AI, dan pengembangan web.</p>
        </div>
        <div>
          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Kategori</h4>
          <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Ulasan</a></li>
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Tutorial</a></li>
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">AI & Data</a></li>
            <li><a href="#" className="hover:text-zinc-900 dark:hover:text-zinc-200">Opini</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-medium text-zinc-900 dark:text-zinc-50">Ikuti kami</h4>
          <div className="mt-3 flex items-center gap-3">
            <a href="#" aria-label="GitHub" className="h-10 w-10 grid place-items-center rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"><Github className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="h-10 w-10 grid place-items-center rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="Email" className="h-10 w-10 grid place-items-center rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-800"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} TechBlogger. All rights reserved.</div>
    </footer>
  );
}
