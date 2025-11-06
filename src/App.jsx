import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ArticleCard from './components/ArticleCard';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const mockArticles = [
  {
    title: 'Review MacBook Pro M3: Kecil, kencang, efisien',
    excerpt:
      'Pengujian lengkap performa CPU/GPU, daya tahan baterai, dan kecocokan untuk developer serta kreator konten.',
    category: 'Ulasan',
    date: 'Okt 24, 2025',
    readTime: '8 min read',
    author: 'Dimas Pratama',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Membangun API FastAPI + MongoDB untuk pemula',
    excerpt:
      'Langkah demi langkah membuat REST API yang rapi, aman, dan siap produksi. Sertakan validasi dan auth.',
    category: 'Tutorial',
    date: 'Okt 10, 2025',
    readTime: '12 min read',
    author: 'Siti Anindya',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop',
  },
  {
    title: 'Tren AI 2025: Agentic workflow dan multimodal',
    excerpt:
      'Dari LLM sampai VLM: bagaimana perusahaan memanfaatkan agen AI untuk otomasi proses dan analitik.',
    category: 'AI & Data',
    date: 'Sep 28, 2025',
    readTime: '7 min read',
    author: 'Rahmat Hidayat',
    image:
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1470&auto=format&fit=crop',
  },
];

function Articles() {
  return (
    <section id="articles" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50">Artikel Terbaru</h2>
            <p className="mt-2 text-zinc-600 dark:text-zinc-300">Kumpulan tulisan teranyar seputar teknologi.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-sm font-medium text-blue-700 hover:text-blue-800 dark:text-blue-300">Lihat semua</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockArticles.map((a, i) => (
            <ArticleCard key={i} {...a} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Articles />
      <Subscribe />
      <Footer />
    </div>
  );
}
