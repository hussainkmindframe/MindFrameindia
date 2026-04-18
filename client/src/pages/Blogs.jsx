/**
 * Blogs Page
 * Display all published blogs with pagination and search
 */

import { useState, useEffect } from 'react';
import blogService from '../services/blogService';
import BlogCard from '../components/BlogCard';
import Loading from '../components/Loading';
import { useSearchParams } from 'react-router-dom';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [searchParams] = useSearchParams();

  const categories = ['Marketing', 'Social Media', 'SEO', 'Content', 'Design'];

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await blogService.getAllBlogs(page, 9, search, '', category);
        setBlogs(response.data.blogs);
        setTotalPages(response.data.pages);
        setTotalBlogs(response.data.total || response.data.blogs.length);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [page, search, category]);

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl font-bold mb-4 leading-tight">Our Digital Marketing Blog</h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Insights, strategies, and tips to help your business succeed in the digital landscape. Stay updated with the latest trends in digital marketing.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          {/* Search */}
          <form onSubmit={handleSearch} className="mb-8">
            <div className="flex gap-3">
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="🔍 Search blogs by title or content..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-5 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-secondary transition-colors text-lg"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-bold transform hover:scale-105"
              >
                Search
              </button>
            </div>
          </form>

          {/* Category Filter */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">Filter by Category</h3>
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={() => {
                  setCategory('');
                  setPage(1);
                }}
                className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                  category === ''
                    ? 'bg-secondary text-white shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                📋 All Categories
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setCategory(cat);
                    setPage(1);
                  }}
                  className={`px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105 ${
                    category === cat
                      ? 'bg-secondary text-white shadow-lg'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {cat === 'Social Media' && '📱'}
                  {cat === 'SEO' && '🔍'}
                  {cat === 'Marketing' && '📊'}
                  {cat === 'Content' && '✍️'}
                  {cat === 'Design' && '🎨'}
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Info */}
        {blogs.length > 0 && (
          <div className="mb-6">
            <p className="text-gray-600">
              Showing <span className="font-bold text-primary">{blogs.length}</span> of{' '}
              <span className="font-bold text-primary">{totalBlogs}</span> blogs
            </p>
          </div>
        )}

        {/* Blogs Grid */}
        {loading ? (
          <Loading />
        ) : blogs.length > 0 ? (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {blogs.map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 flex-wrap">
                <span className="text-gray-600 mr-4">
                  Page <span className="font-bold text-primary">{page}</span> of{' '}
                  <span className="font-bold text-primary">{totalPages}</span>
                </span>
                
                {/* Previous Button */}
                <button
                  onClick={() => setPage(Math.max(1, page - 1))}
                  disabled={page === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  ← Previous
                </button>

                {/* Page Numbers */}
                <div className="flex gap-1">
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => {
                    // Show first 3 pages, last 3 pages, and current page with neighbors
                    if (
                      pageNum <= 3 ||
                      pageNum > totalPages - 3 ||
                      (pageNum >= page - 1 && pageNum <= page + 1)
                    ) {
                      return (
                        <button
                          key={pageNum}
                          onClick={() => setPage(pageNum)}
                          className={`px-3 py-2 rounded-lg transition-all ${
                            page === pageNum
                              ? 'bg-secondary text-white font-bold shadow-lg'
                              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                          }`}
                        >
                          {pageNum}
                        </button>
                      );
                    } else if (
                      pageNum === 4 && page > 5 ||
                      pageNum === totalPages - 3 && page < totalPages - 4
                    ) {
                      return (
                        <span key={pageNum} className="px-2 py-2 text-gray-400">
                          ...
                        </span>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Next Button */}
                <button
                  onClick={() => setPage(Math.min(totalPages, page + 1))}
                  disabled={page === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-600 text-xl mb-4">No blogs found matching your criteria</p>
            <p className="text-gray-500 mb-8">Try adjusting your search or category filters</p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('');
                setPage(1);
              }}
              className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors font-bold"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        {!loading && blogs.length > 0 && (
          <div className="mt-16 bg-gradient-to-r from-secondary to-accent text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Interested in Our Services?</h3>
            <p className="text-lg mb-8 opacity-90">
              Explore our digital marketing services and let's grow your business together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-secondary rounded-lg hover:bg-gray-100 transition-colors font-bold transform hover:scale-105"
            >
              Contact Us Today
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
