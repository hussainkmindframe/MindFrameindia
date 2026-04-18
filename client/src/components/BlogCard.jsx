/**
 * Blog Card Component
 * Displays a single blog post summary
 */

import { Link } from 'react-router-dom';
import { formatDate, truncateText } from '../utils/formatters';

export default function BlogCard({ blog }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        {blog.featured && (
          <span className="absolute top-4 right-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {blog.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="text-xs bg-secondary text-white px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2 hover:text-secondary transition-colors">
          {blog.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">
          {truncateText(blog.description, 100)}
        </p>

        {/* Meta */}
        <div className="flex justify-between items-center text-sm text-gray-500 mb-4 border-t pt-4">
          <span>{blog.category}</span>
          <span>{blog.views} views</span>
        </div>

        {/* Date & Link */}
        <div className="flex justify-between items-center pt-4 border-t">
          <span className="text-sm text-gray-500">{formatDate(blog.createdAt)}</span>
          <Link
            to={`/blog/${blog._id}`}
            className="text-secondary font-semibold hover:text-blue-700 transition-colors"
          >
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
}
