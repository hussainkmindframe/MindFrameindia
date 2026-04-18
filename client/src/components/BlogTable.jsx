/**
 * Blog Table Component
 * Displays blogs in responsive table format
 */

import { formatDate } from '../utils/formatters';
import { MdDelete, MdPublish, MdUnpublished, MdVisibility, MdArticle } from 'react-icons/md';
import Loader from './Loader';

export default function BlogTable({ blogs, loading, onDelete }) {
  if (loading) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <Loader size="md" text="Loading blogs..." />
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-md text-center">
        <div className="text-5xl mb-3 text-gray-300">
          <MdArticle />
        </div>
        <p className="text-gray-600 mb-4">No blogs found.</p>
        <p className="text-sm text-gray-500">Create your first blog to get started!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Desktop View */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Image</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Title</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Category</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Status</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Views</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Date</th>
              <th className="text-left py-4 px-6 font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id} className="border-b hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="py-4 px-6 font-medium text-gray-900 max-w-xs truncate">
                  {blog.title}
                </td>
                <td className="py-4 px-6 text-gray-600">{blog.category}</td>
                <td className="py-4 px-6">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium inline-flex items-center gap-1 ${
                      blog.published
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {blog.published ? (
                      <>
                        <MdPublish className="text-lg" />
                        Published
                      </>
                    ) : (
                      <>
                        <MdUnpublished className="text-lg" />
                        Draft
                      </>
                    )}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-600 flex items-center gap-1">
                  <MdVisibility className="text-lg" />
                  {blog.views}
                </td>
                <td className="py-4 px-6 text-gray-600 text-sm">
                  {formatDate(blog.createdAt)}
                </td>
                <td className="py-4 px-6">
                  <div className="flex gap-2">
                    <button
                      onClick={() => onDelete(blog._id)}
                      className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm font-medium flex items-center gap-1 active:scale-95"
                    >
                      <MdDelete className="text-lg" />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="divide-y">
          {blogs.map((blog) => (
            <div key={blog._id} className="p-4 hover:bg-gray-50 transition-colors">
              {/* Blog Card */}
              <div className="flex gap-4 mb-3">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-16 h-16 object-cover rounded flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 truncate text-sm">{blog.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">{blog.category}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold inline-flex items-center gap-1 ${
                        blog.published
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {blog.published ? (
                        <>
                          <MdPublish />
                          Published
                        </>
                      ) : (
                        <>
                          <MdUnpublished />
                          Draft
                        </>
                      )}
                    </span>
                    <span className="text-xs text-gray-600 flex items-center gap-1">
                      <MdVisibility />
                      {blog.views}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info Row */}
              <div className="text-xs text-gray-500 mb-3 pb-3 border-b">
                <p>📅 {formatDate(blog.createdAt)}</p>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onDelete(blog._id)}
                className="w-full px-3 py-2 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors text-sm font-medium flex items-center justify-center gap-1 active:scale-95"
              >
                <MdDelete className="text-lg" />
                Delete Blog
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
