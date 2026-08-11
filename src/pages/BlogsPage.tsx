import React, { useState, useMemo } from 'react';
import { Blog } from '../types';
import { 
  Award, 
  ArrowRight, 
  User, 
  Calendar, 
  Tag, 
  ChevronRight, 
  X, 
  Search, 
  MessageSquare, 
  BookOpen, 
  Sparkles,
  Share2
} from 'lucide-react';

interface BlogsPageProps {
  blogs: Blog[];
}

export const BlogsPage: React.FC<BlogsPageProps> = ({ blogs }) => {
  const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(blogs.map(b => b.category)));
    return ['ALL', ...cats];
  }, [blogs]);

  // Filtered blogs
  const filteredBlogs = useMemo(() => {
    return blogs.filter(blog => {
      const matchesCategory = selectedCategory === 'ALL' || blog.category === selectedCategory;
      const matchesSearch = 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
      
      {/* 1. HEADER BANNER */}
      <div className="bg-gradient-to-r from-animex-blue-950 via-slate-900 to-animex-blue-900 p-8 sm:p-12 rounded-3xl text-white shadow-2xl space-y-4 relative overflow-hidden border border-slate-800">
        <div className="inline-flex items-center gap-2 bg-animex-orange-500/20 text-animex-orange-400 px-3.5 py-1.5 rounded-full text-xs font-black border border-animex-orange-500/30 uppercase tracking-wider">
          <Award className="w-4 h-4" />
          <span>Scientific Livestock Nutrition & Veterinary Insights</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-sans tracking-tight">
          Veterinary Knowledge & Advisory
        </h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed font-medium">
          Expert articles on transition cow management, chelated mineral bio-availability, rumen acidosis buffering, heat stress mitigation, and udder immunity.
        </p>
      </div>

      {/* 2. SEARCH & CATEGORY FILTERS STRIP */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search Bar */}
          <div className="relative w-full sm:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search knowledge articles by topic, animal, disease..."
              className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-animex-orange-500 shadow-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-slate-400 hover:text-slate-600 dark:hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="text-xs font-extrabold text-slate-500 dark:text-slate-400">
            Showing <span className="text-animex-orange-500 font-black">{filteredBlogs.length}</span> Published Articles
          </div>

        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-xs font-black px-4 py-2 rounded-xl transition-all border ${
                selectedCategory === cat
                  ? 'bg-animex-orange-500 text-white border-animex-orange-500 shadow-md scale-105'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-animex-blue-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. BLOGS GRID */}
      {filteredBlogs.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-base font-black text-slate-700 dark:text-slate-300">No Knowledge Articles Found</h3>
          <p className="text-xs text-slate-400">Try adjusting your search query or select another category.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.id}
              onClick={() => setSelectedBlog(blog)}
              className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden cursor-pointer border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 bg-animex-orange-500 text-white text-[10px] font-black uppercase px-3.5 py-1 rounded-full shadow-md z-10">
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
                      <span>ANIMEX Veterinary Experts</span>
                    </span>
                  </div>

                  <h2 className="text-base font-black text-slate-900 dark:text-white group-hover:text-animex-blue-600 dark:group-hover:text-sky-400 transition-colors line-clamp-2 leading-snug">
                    {blog.title}
                  </h2>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3 font-medium">
                    {blog.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0">
                <span className="text-xs font-black text-animex-orange-500 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                  <span>Read Full Article & Recommendations</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 4. BLOG DETAIL MODAL */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
          <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative my-8 max-h-[90vh] flex flex-col">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 z-20 p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors shadow-md"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="overflow-y-auto p-6 md:p-8 space-y-6">
              
              <div className="h-64 sm:h-72 rounded-2xl overflow-hidden relative shadow-inner">
                <img src={selectedBlog.coverImage} alt={selectedBlog.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 bg-animex-orange-500 text-white text-xs font-black uppercase px-4 py-1.5 rounded-full shadow-lg">
                  {selectedBlog.category}
                </span>
              </div>

              <div className="space-y-3">
                <h1 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-sans leading-tight">
                  {selectedBlog.title}
                </h1>
                <div className="text-xs text-slate-400 font-extrabold flex flex-wrap items-center gap-3">
                  <span>📅 Published: {selectedBlog.date}</span>
                  <span>•</span>
                  <span>👨‍⚕️ Author: ANIMEX Veterinary R&D Division</span>
                  <span>•</span>
                  <span className="text-animex-green-500 font-black">Verified Clinical Advisory</span>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed space-y-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="bg-animex-blue-50 dark:bg-slate-800/80 p-4 rounded-2xl border border-animex-blue-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white text-xs sm:text-sm leading-relaxed">
                  💡 <strong>Summary:</strong> {selectedBlog.excerpt}
                </div>

                <div className="space-y-3 font-medium">
                  <h3 className="text-sm font-black uppercase text-slate-900 dark:text-white tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-animex-orange-500" />
                    <span>Scientific Insights & Veterinary Guidelines</span>
                  </h3>
                  <p>{selectedBlog.content}</p>
                  <p>
                    Ensuring adequate ionic minerals, probiotics, and bio-buffers is vital for maintaining peak lactation curves without triggering metabolic disorders. Regular herd screening and balanced feed rationing guarantee long-term health and maximum profits for dairy farmers.
                  </p>
                </div>

                {/* Direct Action Banner inside Modal */}
                <div className="bg-gradient-to-r from-animex-blue-900 via-slate-900 to-animex-blue-950 p-6 rounded-2xl text-white space-y-4 mt-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="text-sm font-black font-sans">Have Specific Veterinary Queries?</h4>
                      <p className="text-xs text-slate-300">Consult directly with ANIMEX Veterinary Specialists on WhatsApp.</p>
                    </div>

                    <a
                      href={`https://wa.me/918999323908?text=Hello%20ANIMEX%20Veterinary%20Team,%20I%20read%20the%20article:%20"${encodeURIComponent(selectedBlog.title)}"%20and%20need%20advisory.`}
                      target="_blank"
                      rel="noreferrer"
                      className="bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-black px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-lg shrink-0 transition-all hover:scale-105"
                    >
                      <MessageSquare className="w-4 h-4 fill-current" />
                      <span>Ask Doctor on WhatsApp</span>
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      )}

    </div>
  );
};
