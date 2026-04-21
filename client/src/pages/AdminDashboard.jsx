/**
 * Admin Dashboard Page — Gold & White Theme (Consistent with Login)
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import blogService from '../services/blogService';
import AdminSidebar from '../components/AdminSidebar';
import BlogTable from '../components/BlogTable';
import Loader from '../components/Loader';
import toast from 'react-hot-toast';
import { MdMenu, MdEdit, MdAdd, MdDelete, MdPublish, MdUnpublished, MdCloudUpload, MdStar, MdCheckCircle, MdTrendingUp, MdArticle, MdLogout, MdDashboard, MdList, MdPostAdd, MdClose } from 'react-icons/md';

const gold = '#c9a84c';
const goldLight = 'rgba(201,168,76,0.1)';
const goldBorder = 'rgba(201,168,76,0.2)';

const THEME = {
  bg: '#f8f9fa',
  bgCard: '#ffffff',
  bgCard2: '#fefefe',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  gold: gold,
  goldLight: goldLight,
  teal: '#0d9488',
  blue: '#3b82f6',
  green: '#10b981',
  yellow: '#f59e0b',
  red: '#ef4444',
  font: "'Inter', 'Segoe UI', 'Georgia', serif",
};

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { admin, logout, checkAuth } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [stats, setStats] = useState({ totalBlogs: 0, totalViews: 0 });

  useEffect(() => { checkAuth(); }, []);
  useEffect(() => { if (!admin) navigate('/admin/login'); }, [admin, navigate]);
  useEffect(() => {
    if (activeTab === 'dashboard' || activeTab === 'blogs') fetchBlogs();
  }, [activeTab]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogService.getAdminBlogs(1, 100);
      setBlogs(response.data.blogs);
      const totalViews = response.data.blogs.reduce((sum, blog) => sum + blog.views, 0);
      setStats({ totalBlogs: response.data.total, totalViews });
    } catch (error) {
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

  const tabTitle = activeTab === 'dashboard' ? 'Dashboard' : activeTab === 'blogs' ? 'Manage Blogs' : 'Add New Blog';

  return (
    <div style={{
      display: 'flex', height: '100vh',
      background: THEME.bg,
      fontFamily: THEME.font, overflow: 'hidden',
    }}>
      {/* Custom Sidebar Component with Gold Theme */}
      <div style={{
        width: sidebarOpen ? '260px' : '0px',
        transition: 'width 0.2s ease',
        background: '#ffffff',
        borderRight: '1px solid #eef2f6',
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden', flexShrink: 0,
        position: 'relative',
      }}>
        <div style={{ padding: '1.5rem 1.25rem', borderBottom: '1px solid #f0f0f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px', height: '40px',
              borderRadius: '12px',
              background: `linear-gradient(135deg, ${gold}, ${gold}cc)`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 'bold', fontSize: '18px',
            }}>MF</div>
            <div>
              <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '700', color: '#1a1a1a' }}>Mindframe</h3>
              <p style={{ margin: 0, fontSize: '10px', color: THEME.textMuted }}>Admin Portal</p>
            </div>
          </div>
        </div>

        <nav style={{ flex: 1, padding: '1rem 0.75rem' }}>
          {[
            { id: 'dashboard', label: 'Dashboard', icon: <MdDashboard /> },
            { id: 'blogs', label: 'All Blogs', icon: <MdList /> },
            { id: 'add', label: 'Add New Blog', icon: <MdPostAdd /> },
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              style={{
                width: '100%', padding: '10px 14px',
                display: 'flex', alignItems: 'center', gap: '12px',
                background: activeTab === item.id ? goldLight : 'transparent',
                border: 'none', borderRadius: '10px',
                color: activeTab === item.id ? gold : THEME.textDim,
                fontSize: '14px', fontWeight: activeTab === item.id ? '600' : '500',
                cursor: 'pointer', marginBottom: '4px',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => { if (activeTab !== item.id) e.currentTarget.style.background = '#f8f9fa'; }}
              onMouseLeave={e => { if (activeTab !== item.id) e.currentTarget.style.background = 'transparent'; }}
            >
              <span style={{ fontSize: '18px' }}>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div style={{ padding: '1rem 0.75rem 1.5rem', borderTop: '1px solid #f0f0f0' }}>
          <button
            onClick={handleLogout}
            style={{
              width: '100%', padding: '10px 14px',
              display: 'flex', alignItems: 'center', gap: '12px',
              background: 'transparent', border: 'none', borderRadius: '10px',
              color: '#dc2626', fontSize: '14px', fontWeight: '500',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#fef2f2'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <MdLogout style={{ fontSize: '18px' }} /> Logout
          </button>
        </div>
      </div>

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        {/* Header */}
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #eef2f6',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0, gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden"
              style={{
                background: '#f8f9fa', border: '1px solid #eef2f6',
                borderRadius: '8px', padding: '7px', cursor: 'pointer',
                color: '#6c757d', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {sidebarOpen ? <MdClose style={{ fontSize: '18px' }} /> : <MdMenu style={{ fontSize: '18px' }} />}
            </button>
            <div>
              <h1 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>{tabTitle}</h1>
              <p style={{ color: THEME.textMuted, fontSize: '12px', margin: 0 }}>Welcome back, {admin?.name}!</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px',
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)',
              borderRadius: '20px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: THEME.green, display: 'inline-block' }} />
              <span style={{ color: '#0a7c4e', fontSize: '12px', fontWeight: '500' }}>Online</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {activeTab === 'dashboard' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                <StatCard
                  label="Total Blogs" value={stats.totalBlogs}
                  icon={<MdArticle />} color={THEME.gold}
                  sub="Blog posts created"
                />
                <StatCard
                  label="Total Views" value={stats.totalViews.toLocaleString()}
                  icon={<MdTrendingUp />} color={THEME.blue}
                  sub="Total page views"
                />
              </div>

              {/* Quick Actions */}
              <div style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '16px', padding: '1.25rem', boxShadow: '0 1px 2px rgba(0,0,0,0.03)' }}>
                <p style={{ color: THEME.textDim, fontSize: '14px', fontWeight: '600', marginBottom: '1rem' }}>Quick Actions</p>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => setActiveTab('add')}
                    style={{
                      flex: 1, minWidth: '160px', padding: '11px 16px',
                      background: gold,
                      border: 'none', borderRadius: '10px',
                      color: '#fff', fontSize: '14px', fontWeight: '600',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => e.currentTarget.style.opacity = '0.9'}
                    onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                  >
                    <MdAdd style={{ fontSize: '18px' }} /> Add New Blog
                  </button>
                  <button
                    onClick={() => setActiveTab('blogs')}
                    style={{
                      flex: 1, minWidth: '160px', padding: '11px 16px',
                      background: '#f8f9fa', border: '1px solid #e9ecef',
                      borderRadius: '10px', color: THEME.textDim,
                      fontSize: '14px', fontWeight: '500',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#f1f3f5'; e.currentTarget.style.borderColor = '#dee2e6'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = '#f8f9fa'; e.currentTarget.style.borderColor = '#e9ecef'; }}
                  >
                    <MdEdit style={{ fontSize: '16px' }} /> View All Blogs
                  </button>
                </div>
              </div>

              {/* Recent Blogs */}
              <div style={{ background: THEME.bgCard, border: THEME.border, borderRadius: '16px', padding: '1.25rem', overflow: 'hidden' }}>
                <p style={{ color: THEME.textDim, fontSize: '14px', fontWeight: '600', marginBottom: '1rem' }}>Recent Blogs</p>
                {loading ? (
                  <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem' }}>
                    <Loader size="md" text="Loading blogs..." />
                  </div>
                ) : blogs.length > 0 ? (
                  <div style={{ overflowX: 'auto' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '13px' }}>
                      <thead>
                        <tr style={{ borderBottom: '1px solid #f0f0f0' }}>
                          {['Image', 'Title', 'Views', 'Status'].map(h => (
                            <th key={h} style={{ textAlign: 'left', padding: '8px 12px', color: THEME.textMuted, fontWeight: '500', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.8px' }}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {blogs.slice(0, 5).map((blog) => (
                          <tr key={blog._id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                            <td style={{ padding: '10px 12px' }}>
                              <img src={blog.image} alt={blog.title} style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eef2f6' }} />
                            </td>
                            <td style={{ padding: '10px 12px', color: THEME.text, maxWidth: '260px' }}>
                              <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{blog.title}</span>
                            </td>
                            <td style={{ padding: '10px 12px', color: THEME.textMuted }}>{blog.views}</td>
                            <td style={{ padding: '10px 12px' }}>
                              <span style={{
                                display: 'inline-flex', alignItems: 'center', gap: '5px',
                                padding: '3px 10px', borderRadius: '20px', fontSize: '11px', fontWeight: '600',
                                background: blog.published ? 'rgba(16,185,129,0.08)' : 'rgba(245,158,11,0.08)',
                                color: blog.published ? '#0a7c4e' : '#b45309',
                                border: `1px solid ${blog.published ? 'rgba(16,185,129,0.15)' : 'rgba(245,158,11,0.15)'}`,
                              }}>
                                {blog.published ? <MdPublish style={{ fontSize: '12px' }} /> : <MdUnpublished style={{ fontSize: '12px' }} />}
                                {blog.published ? 'Published' : 'Draft'}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div style={{ textAlign: 'center', padding: '2.5rem 0' }}>
                    <p style={{ color: THEME.textMuted, marginBottom: '1rem', fontSize: '14px' }}>No blogs yet. Create your first blog!</p>
                    <button
                      onClick={() => setActiveTab('add')}
                      style={{
                        padding: '9px 20px',
                        background: gold,
                        border: 'none', borderRadius: '8px',
                        color: '#fff', fontSize: '13px', fontWeight: '600', cursor: 'pointer',
                        display: 'inline-flex', alignItems: 'center', gap: '6px',
                      }}
                    >
                      <MdAdd /> Create Now
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'blogs' && (
            <div style={{ maxWidth: '100%' }}>
              <BlogTable blogs={blogs} loading={loading} onDelete={handleDeleteBlog} />
            </div>
          )}

          {activeTab === 'add' && (
            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              <AddBlogForm onSuccess={() => { setActiveTab('blogs'); fetchBlogs(); }} />
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

/** Stat Card */
function StatCard({ label, value, icon, color, sub }) {
  return (
    <div style={{
      background: '#ffffff',
      border: '1px solid #eef2f6',
      borderRadius: '16px', padding: '1.25rem',
      position: 'relative', overflow: 'hidden',
      boxShadow: '0 1px 2px rgba(0,0,0,0.02)',
    }}>
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '3px',
        background: color,
      }} />
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <p style={{ color: '#6c757d', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '8px' }}>{label}</p>
          <p style={{ color: '#1a1a1a', fontSize: '32px', fontWeight: '700', letterSpacing: '-1px', margin: '0 0 4px' }}>{value}</p>
          <p style={{ color: '#adb5bd', fontSize: '11px', margin: 0 }}>{sub}</p>
        </div>
        <div style={{
          width: '40px', height: '40px', borderRadius: '10px', flexShrink: 0,
          background: `${color}10`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '20px', color,
        }}>
          {icon}
        </div>
      </div>
    </div>
  );
}

/** Add Blog Form */
function AddBlogForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    title: '', description: '', content: '', image: '',
    tags: '', category: 'Other', featured: false, published: true,
  });
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
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
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: formDataForUpload,
      });
      if (!response.ok) throw new Error('Image upload failed');
      const data = await response.json();
      setFormData({ ...formData, image: data.image });
      toast.success('Image uploaded successfully!');
    } catch (error) {
      toast.error('Failed to upload image');
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
      const payload = { ...formData, tags: formData.tags.split(',').map(t => t.trim()) };
      await blogService.createBlog(payload);
      toast.success('Blog created successfully!');
      onSuccess();
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to create blog');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: '100%', boxSizing: 'border-box',
    padding: '11px 14px',
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '10px',
    color: '#1a1a1a', fontSize: '14px', outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
  };

  const labelStyle = { display: 'block', color: '#4a5568', fontSize: '12px', fontWeight: '600', marginBottom: '7px', letterSpacing: '0.3px' };

  return (
    <div style={{
      background: '#ffffff', border: '1px solid #eef2f6',
      borderRadius: '20px', padding: '1.75rem',
      boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
      fontFamily: "'Inter', 'Segoe UI', 'Georgia', serif",
    }}>
      <div style={{ marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid #f0f0f0' }}>
        <h2 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: '700', margin: '0 0 4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <MdEdit style={{ color: gold }} /> Add New Blog
        </h2>
        <p style={{ color: '#6c757d', fontSize: '13px', margin: 0 }}>Create engaging content for your audience</p>
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
        {/* Title */}
        <div>
          <label style={labelStyle}>Title <span style={{ color: '#e53e3e' }}>*</span></label>
          <input type="text" name="title" value={formData.title} onChange={handleChange}
            style={inputStyle} placeholder="Enter blog title" required disabled={loading || uploadingImage}
            onFocus={e => e.target.style.borderColor = gold}
            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        {/* Description */}
        <div>
          <label style={labelStyle}>Description <span style={{ color: '#e53e3e' }}>*</span></label>
          <textarea name="description" value={formData.description} onChange={handleChange}
            rows="3" style={{ ...inputStyle, resize: 'none' }}
            placeholder="Brief description of your blog post" required disabled={loading || uploadingImage}
            onFocus={e => e.target.style.borderColor = gold}
            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        {/* Content */}
        <div>
          <label style={labelStyle}>Content <span style={{ color: '#e53e3e' }}>*</span></label>
          <textarea name="content" value={formData.content} onChange={handleChange}
            rows="6" style={{ ...inputStyle, resize: 'none' }}
            placeholder="Write your blog content here..." required disabled={loading || uploadingImage}
            onFocus={e => e.target.style.borderColor = gold}
            onBlur={e => e.target.style.borderColor = '#e2e8f0'}
          />
        </div>

        {/* Image Upload */}
        <div>
          <label style={labelStyle}>Upload Image <span style={{ color: '#e53e3e' }}>*</span></label>
          <input type="file" accept="image/*" onChange={handleImageUpload}
            style={{ ...inputStyle, cursor: 'pointer', color: '#6c757d' }}
            disabled={loading || uploadingImage}
          />
          <p style={{ color: '#adb5bd', fontSize: '11px', marginTop: '5px' }}>
            Supported: JPEG, PNG, GIF, WebP (Max 20MB)
          </p>
          {uploadingImage && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: gold, fontSize: '13px', marginTop: '8px' }}>
              <MdCloudUpload style={{ fontSize: '16px' }} /> Uploading image...
            </div>
          )}
          {formData.image && (
            <div style={{ marginTop: '10px' }}>
              <p style={{ color: '#6c757d', fontSize: '12px', marginBottom: '6px' }}>Preview:</p>
              <img src={formData.image} alt="Preview" style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '10px', border: `2px solid ${gold}40` }} />
            </div>
          )}
        </div>

        {/* Category & Tags */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
          <div>
            <label style={labelStyle}>Category</label>
            <select name="category" value={formData.category} onChange={handleChange}
              style={{ ...inputStyle }}
              disabled={loading || uploadingImage}
            >
              {['Marketing', 'Social Media', 'SEO', 'Content', 'Design', 'Other'].map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <div>
            <label style={labelStyle}>Tags <span style={{ color: '#adb5bd' }}>(comma separated)</span></label>
            <input type="text" name="tags" value={formData.tags} onChange={handleChange}
              style={inputStyle} placeholder="digital marketing, seo"
              disabled={loading || uploadingImage}
              onFocus={e => e.target.style.borderColor = gold}
              onBlur={e => e.target.style.borderColor = '#e2e8f0'}
            />
          </div>
        </div>

        {/* Checkboxes */}
        <div style={{
          display: 'flex', gap: '1.5rem', flexWrap: 'wrap',
          background: '#fafbfc', border: '1px solid #eef2f6',
          borderRadius: '12px', padding: '12px 16px',
        }}>
          {[
            { name: 'featured', checked: formData.featured, icon: <MdStar style={{ color: '#f59e0b', fontSize: '14px' }} />, label: 'Featured Blog' },
            { name: 'published', checked: formData.published, icon: <MdCheckCircle style={{ color: '#10b981', fontSize: '14px' }} />, label: 'Publish Now' },
          ].map(({ name, checked, icon, label }) => (
            <label key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              <input type="checkbox" name={name} checked={checked} onChange={handleChange}
                style={{ width: '16px', height: '16px', accentColor: gold, cursor: 'pointer' }}
                disabled={loading || uploadingImage}
              />
              <span style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#4a5568', fontSize: '13px', fontWeight: '500' }}>
                {icon} {label}
              </span>
            </label>
          ))}
        </div>

        {/* Submit */}
        <button
          type="submit" disabled={loading || uploadingImage}
          style={{
            padding: '13px',
            background: (loading || uploadingImage) ? `${gold}80` : gold,
            border: 'none', borderRadius: '12px',
            color: '#fff', fontSize: '15px', fontWeight: '600',
            cursor: (loading || uploadingImage) ? 'not-allowed' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            transition: 'all 0.2s',
            marginTop: '0.25rem',
          }}
          onMouseEnter={e => { if (!loading && !uploadingImage) e.currentTarget.style.opacity = '0.9'; }}
          onMouseLeave={e => { if (!loading && !uploadingImage) e.currentTarget.style.opacity = '1'; }}
        >
          {loading ? (
            <><Loader size="sm" text="" /><span>Creating Blog...</span></>
          ) : (
            <><MdAdd style={{ fontSize: '18px' }} /> Create Blog Post</>
          )}
        </button>
      </form>
    </div>
  );
}