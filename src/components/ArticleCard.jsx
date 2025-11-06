import { Calendar, Clock } from 'lucide-react';

export default function ArticleCard({ title, excerpt, category, date, readTime, author, image }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-shadow">
      {image && (
        <div className="h-44 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide font-semibold text-blue-600">
          <span className="px-2 py-0.5 rounded bg-blue-600/10 border border-blue-600/20">{category}</span>
        </div>
        <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300 line-clamp-3">
          {excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{readTime}</span>
          </div>
        </div>
        <div className="mt-4 text-xs text-zinc-500">By {author}</div>
      </div>
    </article>
  );
}
