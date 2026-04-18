/**
 * Single Blog Page
 */

import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import blogService from '../services/blogService';
import Loading from '../components/Loading';
import { formatDate } from '../utils/formatters';

export default function SingleBlog() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await blogService.getBlogById(id);
        setBlog(response.data.blog);
      } catch (error) {
        setError('Failed to load blog');
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {error}
        </div>
        <Link to="/blogs" className="text-secondary hover:underline mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );

  if (!blog)
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-gray-600">Blog not found</div>
        <Link to="/blogs" className="text-secondary hover:underline mt-4 inline-block">
          ← Back to Blogs
        </Link>
      </div>
    );

  return (
    <div>
      {/* Featured Image */}
      <div className="w-full h-96 overflow-hidden bg-gray-200">
        <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      {/* Blog Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link to="/blogs" className="text-secondary hover:underline text-sm mb-4 inline-block">
            ← Back to Blogs
          </Link>

          <h1 className="text-5xl font-bold text-primary mb-4">{blog.title}</h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6 pb-6 border-b border-gray-200">
            <div>
              <span className="font-semibold">By</span> {blog.author || 'Admin'}
            </div>
            <div>{formatDate(blog.createdAt)}</div>
            <div className="text-secondary font-semibold">{blog.category}</div>
            <div>{blog.views} views</div>
          </div>

          {/* Tags */}
          {blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="bg-secondary text-white px-3 py-1 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Description */}
        <div className="mb-8 text-lg text-gray-600 leading-relaxed">
          <p>{blog.description}</p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <div
            className="text-gray-700 leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>

        {/* Related Posts CTA */}
        <div className="bg-blue-50 border border-secondary text-primary p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Want more insights?</h3>
          <p className="mb-6 text-gray-600">
            Explore our other articles and stay updated with the latest digital marketing trends.
          </p>
          <Link
            to="/blogs"
            className="px-6 py-3 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors inline-block font-semibold"
          >
            Read More Articles
          </Link>
        </div>
      </article>
    </div>
  );
}
