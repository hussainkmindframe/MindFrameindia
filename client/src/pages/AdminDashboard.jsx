/**
 * Admin Dashboard Page
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import blogService from '../services/blogService';
import AdminSidebar from '../components/AdminSidebar';
import BlogTable from '../components/BlogTable';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { MdMenu, MdEdit, MdAdd, MdDelete, MdPublish, MdUnpublished, MdCloudUpload, MdStar, MdCheckCircle } from 'react-icons/md';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { admin, logout, checkAuth } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ totalBlogs: 0, totalViews: 0 });

  useEffect(() => {
    checkAuth();
  }, []);

  useEffect(() => {
    if (!admin) {
      navigate('/admin/login');
    }
  }, [admin, navigate]);

  useEffect(() => {
    if (activeTab === 'dashboard' || activeTab === 'blogs') {
      fetchBlogs();
    }
  }, [activeTab]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogService.getAdminBlogs(1, 100);
      setBlogs(response.data.blogs);
      const totalViews = response.data.blogs.reduce((sum, blog) => sum + blog.views, 0);
      setStats({
        totalBlogs: response.data.total,
        totalViews,
      });
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast.error('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteBlog = async (blogId) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogService.deleteBlog(blogId);
        toast.success('Blog deleted successfully');
        fetchBlogs();
      } catch (error) {
        toast.error('Failed to delete blog');
      }
    }
  };

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  if (!admin) return null;

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <AdminSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isOpen={sidebarOpen}
        onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md border-b border-gray-200 px-4 md:px-6 py-4 md:py-6">
          <div className="flex justify-between items-center gap-4">
            {/* Left Side - Title */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 md:gap-0">
                {/* Hamburger Menu (Mobile) */}
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Toggle sidebar"
                >
                  <MdMenu className="w-6 h-6 text-primary" />
                </button>

                {/* Title Section */}
                <div className="min-w-0 flex-1">
                  <h1 className="text-2xl md:text-3xl font-bold text-primary truncate">
                    {activeTab === 'dashboard'
                      ? 'Dashboard'
                      : activeTab === 'blogs'
                        ? 'Manage Blogs'
                        : 'Add New Blog'}
                  </h1>
                  <p className="text-gray-600 text-sm md:text-base mt-1 truncate">Welcome back, {admin?.name}!</p>
                </div>
              </div>
            </div>

            {/* Right Side - Quick Actions */}
            <div className="flex items-center gap-2 md:gap-4">
              {/* Status Badge */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                Online
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-auto p-3 md:p-6">
          {activeTab === 'dashboard' && (
            <div className="space-y-4 md:space-y-6">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 md:p-6 rounded-lg shadow-md border-l-4 border-secondary hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Total Blogs</h3>
                      <p className="text-3xl md:text-4xl font-bold text-primary mt-2">{stats.totalBlogs}</p>
                      <p className="text-xs text-gray-500 mt-2">Blog posts created</p>
                    </div>
                    <div className="text-4xl text-secondary opacity-20">
                      <MdEdit />
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-4 md:p-6 rounded-lg shadow-md border-l-4 border-accent hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-gray-600 text-sm font-medium uppercase tracking-wider">Total Views</h3>
                      <p className="text-3xl md:text-4xl font-bold text-primary mt-2">{stats.totalViews.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 mt-2">Total page views</p>
                    </div>
                    <div className="text-4xl text-accent opacity-20">
                      <MdPublish />
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Quick Actions</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setActiveTab('add')}
                    className="flex-1 px-4 md:px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-sm md:text-base active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MdAdd className="text-lg" />
                    Add New Blog
                  </button>
                  <button
                    onClick={() => setActiveTab('blogs')}
                    className="flex-1 px-4 md:px-6 py-3 bg-gray-200 text-primary rounded-lg hover:bg-gray-300 transition-colors font-bold text-sm md:text-base active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MdEdit className="text-lg" />
                    View All Blogs
                  </button>
                </div>
              </div>

              {/* Recent Blogs */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4">Recent Blogs</h3>
                {loading ? (
                  <div className="flex justify-center py-8">
                    <Loader size="md" text="Loading blogs..." />
                  </div>
                ) : blogs.length > 0 ? (
                  <div className="overflow-x-auto -mx-4 md:mx-0">
                    <table className="w-full text-xs md:text-sm">
                      <thead className="border-b bg-gray-50">
                        <tr>
                          <th className="text-left py-2 px-3 md:px-4 font-semibold text-gray-700">Image</th>
                          <th className="text-left py-2 px-3 md:px-4 font-semibold text-gray-700">Title</th>
                          <th className="text-left py-2 px-3 md:px-4 font-semibold text-gray-700">Views</th>
                          <th className="text-left py-2 px-3 md:px-4 font-semibold text-gray-700">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {blogs.slice(0, 5).map((blog) => (
                          <tr key={blog._id} className="border-b hover:bg-gray-50">
                            <td className="py-3 px-3 md:px-4">
                              <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-10 h-10 md:w-12 md:h-12 object-cover rounded"
                              />
                            </td>
                            <td className="py-3 px-3 md:px-4 font-medium text-gray-900 truncate max-w-xs">{blog.title}</td>
                            <td className="py-3 px-3 md:px-4 text-gray-600">{blog.views}</td>
                            <td className="py-3 px-3 md:px-4">
                              <span className={`inline-flex items-center gap-1 px-2 md:px-3 py-1 rounded-full text-xs font-semibold ${
                                  blog.published
                                    ? 'bg-green-100 text-green-800'
                                    : 'bg-yellow-100 text-yellow-800'
                                }`}
                              >
                                {blog.published ? (
                                  <>
                                    <MdPublish className="text-sm" />
                                    Published
                                  </>
                                ) : (
                                  <>
                                    <MdUnpublished className="text-sm" />
                                    Draft
                                  </>
                                )}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-600 mb-4">No blogs yet. Create your first blog!</p>
                    <button
                      onClick={() => setActiveTab('add')}
                      className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mx-auto"
                    >
                      <MdAdd /> Create Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'blogs' && (
            <div className="max-w-full">
              <BlogTable blogs={blogs} loading={loading} onDelete={handleDeleteBlog} />
            </div>
          )}

          {activeTab === 'add' && (
            <div className="max-w-4xl mx-auto">
              <AddBlogForm onSuccess={() => {
                setActiveTab('blogs');
                fetchBlogs();
              }} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/**
 * Add Blog Form Component
 */
function AddBlogForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    content: '',
    image: '',
    tags: '',
    category: 'Other',
    featured: false,
    published: true,
  });
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingImage(true);
    try {
      const formDataForUpload = new FormData();
      formDataForUpload.append('image', file);

      const response = await fetch('/api/blogs/upload-image', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: formDataForUpload,
      });

      if (!response.ok) {
        throw new Error('Image upload failed');
      }

      const data = await response.json();
      setFormData({
        ...formData,
        image: data.image,
      });
      toast.success('Image uploaded successfully!');
    } catch (error) {
      toast.error('Failed to upload image');
      console.error(error);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description || !formData.content || !formData.image) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    try {
      const payload = {
        ...formData,
        tags: formData.tags.split(',').map((tag) => tag.trim()),
      };

      await blogService.createBlog(payload);
      toast.success('Blog created successfully!');
      onSuccess();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2 flex items-center gap-2">
          <MdEdit className="text-3xl" />
          Add New Blog
        </h2>
        <p className="text-gray-600 text-sm">Create engaging content for your audience</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
            placeholder="Enter blog title"
            required
            disabled={loading || uploadingImage}
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="3"
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all"
            placeholder="Brief description of your blog post"
            required
            disabled={loading || uploadingImage}
          ></textarea>
        </div>

        {/* Content */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Content <span className="text-red-500">*</span>
          </label>
          <textarea
            name="content"
            value={formData.content}
            onChange={handleChange}
            rows="6"
            className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all"
            placeholder="Write your blog content here..."
            required
            disabled={loading || uploadingImage}
          ></textarea>
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Upload Image <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col gap-3">
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary cursor-pointer"
                disabled={loading || uploadingImage}
              />
            </div>
            {uploadingImage && (
              <div className="flex items-center gap-2 text-blue-600">
                <div className="animate-spin">
                  <MdCloudUpload className="text-lg" />
                </div>
                <span className="text-sm font-medium">Uploading image...</span>
              </div>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Supported: JPEG, PNG, GIF, WebP (Max 20MB)
          </p>
          {formData.image && (
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-600 mb-2">Preview:</p>
              <img
                src={formData.image}
                alt="Preview"
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg border-2 border-secondary"
              />
            </div>
          )}
        </div>

        {/* Category & Tags Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* Category */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              disabled={loading || uploadingImage}
            >
              <option>Marketing</option>
              <option>Social Media</option>
              <option>SEO</option>
              <option>Content</option>
              <option>Design</option>
              <option>Other</option>
            </select>
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Tags <span className="text-gray-400">(comma separated)</span>
            </label>
            <input
              type="text"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
              placeholder="digital marketing, seo"
              disabled={loading || uploadingImage}
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-gray-50 p-4 rounded-lg">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 cursor-pointer"
              disabled={loading || uploadingImage}
            />
            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <MdStar className="text-yellow-500" />
              Featured Blog
            </span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              name="published"
              checked={formData.published}
              onChange={handleChange}
              className="w-5 h-5 rounded border-gray-300 cursor-pointer"
              disabled={loading || uploadingImage}
            />
            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <MdCheckCircle className="text-green-500" />
              Publish Now
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading || uploadingImage}
          className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-bold text-base md:text-lg disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader size="sm" text="" />
              <span>Creating Blog...</span>
            </>
          ) : (
            <>
              <MdAdd className="text-lg" />
              Create Blog Post
            </>
          )}
        </button>
      </form>
    </div>
  );
}
