/**
 * Admin Blog Management Page
 * Manage all blogs - view, edit, delete
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../../utils/authStore';
import blogService from '../../services/blogService';
import AdminLayout from '../../components/AdminLayout';
import BlogTable from '../../components/BlogTable';
import Loader from '../../components/Loader';
import toast from 'react-hot-toast';

export default function BlogManagement() {
  const navigate = useNavigate();
  const { admin, checkAuth } = useAuthStore();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({ page: 1, limit: 20, total: 0 });

  useEffect(() => { checkAuth(); }, []);
  useEffect(() => { if (!admin) navigate('/admin/login'); }, [admin, navigate]);
  useEffect(() => { fetchBlogs(); }, [pagination.page]);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const response = await blogService.getAdminBlogs(pagination.page, pagination.limit);
      setBlogs(response.data.blogs);
      setPagination(prev => ({ ...prev, total: response.data.total }));
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

  if (!admin) return null;

  return (
    <AdminLayout pageTitle="Manage Blogs" pageSubtitle="Edit & manage all your blog posts">
      <div style={{ maxWidth: '100%' }}>
        {loading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '3rem' }}>
            <Loader size="md" text="Loading blogs..." />
          </div>
        ) : (
          <BlogTable 
            blogs={blogs} 
            loading={loading} 
            onDelete={handleDeleteBlog}
            onRefresh={fetchBlogs}
            pagination={pagination}
            onPaginationChange={(page) => setPagination(prev => ({ ...prev, page }))}
          />
        )}
      </div>
    </AdminLayout>
  );
}
