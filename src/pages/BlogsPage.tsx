import React, { useState } from 'react';
import { Blog } from '../types';
import { Award, ArrowRight, User, Calendar, Tag, ChevronRight, X } from 'lucide-react';

interface BlogsPageProps {
  blogs: Blog[];
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-animex-blue-900 via-slate-900 to-animex-blue-950 p-8 sm:p-12 rounded-3xl text-white shadow-xl space-y-3">
        <div className="inline-flex items-center gap-2 bg-animex-orange-500/20 text-animex-orange-400 px-3 py-1 rounded-full text-xs font-bold border border-animex-orange-500/30">
          <Award className="w-4 h-4" />
          <span>Scientific Livestock Nutrition</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black font-sans">
          Veterinary Knowledge & Insights
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Expert articles on transition cow management, chelated mineral absorption, rumen acid buffering, and summer heat stress management.
        </p>
      </div>

      {/* Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => setSelectedBlog(blog)}
            className="glass-card rounded-3xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="h-48 overflow-hidden relative">
                <img
                  src={blog.coverImage}
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-animex-orange-500 text-white text-[10px] font-black uppercase px-3 py-1 rounded-full shadow-md">
                  {blog.category}
                </span>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3 text-[11px] text-slate-400 font-semibold">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-animex-blue-500" />
                    <span>{blog.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-animex-green-500" />
                    <span>Animex Health Experts</span>
                  </span>
                </div>

                <h2 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2">
                  {blog.title}
                </h2>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {blog.excerpt}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <span className="text-xs font-extrabold text-animex-orange-500 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Full Article</span>
                <ChevronRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* BLOG DETAIL MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] flex flex-col">
            
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              <div className="h-64 rounded-2xl overflow-hidden">
                <img src={selectedBlog.coverImage} alt={selectedBlog.title} className="w-full h-full object-cover" />
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-black uppercase bg-animex-orange-500 text-white px-3 py-1 rounded-full">
                  {selectedBlog.category}
                </span>
                <h1 className="text-2xl font-black text-slate-900 dark:text-white font-sans mt-2">
                  {selectedBlog.title}
                </h1>
                <div className="text-xs text-slate-400 font-semibold flex items-center gap-3">
                  <span>Published: {selectedBlog.date}</span>
                  <span>•</span>
                  <span>Author: Animex Health Research Division</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                <p className="font-bold text-slate-900 dark:text-white text-base">
                  {selectedBlog.excerpt}
                </p>
                <p>{selectedBlog.content}</p>
                <p>
                  For personalized feed advice or veterinary product queries, feel free to contact our customer helpline at 1800-123-4567 or visit your nearest ANIMEX dealer store.
                </p>
              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
