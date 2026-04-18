# Mindframe Digital Marketing Agency - Complete Setup Guide

## Quick Start (5 Minutes)

### Prerequisites
- Node.js v14+ installed
- MongoDB Atlas account (or local MongoDB)
- Text editor

### Step 1: Backend Setup

```bash
cd server
npm install
cp .env.example .env
# Edit .env file with your MongoDB URI
npm run seed
npm run dev
```

### Step 2: Frontend Setup (New Terminal)

```bash
cd client
npm install
cp .env.example .env
npm run dev
```

### Step 3: Access Application

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5000
- **Admin Panel**: http://localhost:5173/admin/login
- **Demo Credentials**: admin@mindframe.com / SecurePassword123!

---

## 📁 Project Structure

```
Mindframeindia/
├── server/                          # Backend (Node.js + Express)
│   ├── config/
│   │   ├── database.js             # MongoDB connection
│   │   └── jwt.js                  # JWT configuration
│   ├── models/
│   │   ├── Admin.js                # Admin schema
│   │   └── Blog.js                 # Blog schema
│   ├── controllers/
│   │   ├── authController.js       # Auth logic
│   │   └── blogController.js       # Blog logic
│   ├── routes/
│   │   ├── authRoutes.js           # Auth endpoints
│   │   └── blogRoutes.js           # Blog endpoints
│   ├── middleware/
│   │   ├── auth.js                 # JWT verification
│   │   └── errorHandler.js         # Error handling
│   ├── utils/
│   │   ├── asyncHandler.js         # Async wrapper
│   │   └── errorResponse.js        # Error class
│   ├── scripts/
│   │   └── seed.js                 # Database seeding
│   ├── app.js                      # Express app
│   ├── server.js                   # Entry point
│   ├── package.json
│   └── .env
│
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Navigation
│   │   │   ├── Footer.jsx          # Footer
│   │   │   ├── BlogCard.jsx        # Blog preview
│   │   │   ├── Loading.jsx         # Loader
│   │   │   ├── ProtectedRoute.jsx  # Route guard
│   │   │   ├── AdminSidebar.jsx    # Admin nav
│   │   │   └── BlogTable.jsx       # Blog table
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing
│   │   │   ├── Blogs.jsx           # Blog list
│   │   │   ├── SingleBlog.jsx      # Blog detail
│   │   │   ├── About.jsx           # About page
│   │   │   ├── Contact.jsx         # Contact page
│   │   │   ├── AdminLogin.jsx      # Admin login
│   │   │   └── AdminDashboard.jsx  # Admin panel
│   │   ├── services/
│   │   │   ├── apiClient.js        # Axios setup
│   │   │   ├── authService.js      # Auth API
│   │   │   └── blogService.js      # Blog API
│   │   ├── utils/
│   │   │   ├── authStore.js        # State management
│   │   │   └── formatters.js       # Helpers
│   │   ├── App.jsx                 # Routing
│   │   ├── main.jsx                # Entry
│   │   └── index.css               # Styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── .env
│
└── README.md                        # Documentation
```

---

## 🔐 Admin System (Single Admin Only)

### Key Features:
- ✅ Only ONE admin user allowed
- ✅ No public registration
- ✅ Password hashing with bcrypt
- ✅ JWT-based session management
- ✅ Secure token verification
- ✅ Admin data isolated in database

### Admin Roles:
- Create, read, update, delete blogs
- View dashboard statistics
- Manage blog publication status
- Access admin panel only (protected routes)

### Database Enforcement:
```javascript
// Admin model validates single user
adminSchema.statics.countDocuments = async function () {
  const count = await this.countDocuments();
  if (count > 1) {
    throw new Error('Only ONE admin user is allowed');
  }
};
```

---

## 🗄️ Database Schema

### Admin Collection
```javascript
{
  email: String (unique),
  password: String (hashed),
  role: "admin",
  name: String,
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date,
  updatedAt: Date
}
```

### Blog Collection
```javascript
{
  title: String,
  description: String,
  content: String,
  image: String (URL),
  tags: [String],
  author: String,
  category: String (enum),
  featured: Boolean,
  views: Number,
  published: Boolean,
  createdBy: ObjectId (Admin reference),
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔑 API Routes

### Public APIs (No Auth Required)

#### Blogs
- `GET /api/blogs` - Get all blogs with pagination
- `GET /api/blogs/:id` - Get single blog

#### Auth
- `POST /api/auth/login` - Admin login (no signup)

### Protected APIs (Admin Only)

#### Blogs (Admin)
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `GET /api/blogs/admin/all` - Get admin's all blogs

#### Auth
- `GET /api/auth/me` - Get current admin
- `POST /api/auth/logout` - Logout

---

## 🌐 Environment Variables

### Backend (.env)
```env
# Database Connection
MONGODB_URI=mongodb+srv://user:password@cluster.mongodb.net/mindframe_agency

# JWT Token
JWT_SECRET=your_secret_key_here_min_32_chars
JWT_EXPIRY=7d

# Admin Credentials (For Seeding)
ADMIN_EMAIL=admin@mindframe.com
ADMIN_PASSWORD=SecurePassword123!

# Server Configuration
PORT=5000
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🛠️ Common Commands

### Backend

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Seed database with admin user
npm run seed

# Start production server
npm start
```

### Frontend

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🎯 Key Features Implementation

### 1. JWT Authentication
```javascript
// Login creates JWT token
const token = jwt.sign({ id: admin._id }, JWT_SECRET, { expiresIn: '7d' });

// Token stored in localStorage on frontend
localStorage.setItem('authToken', token);

// Token sent in request headers
headers.Authorization = `Bearer ${token}`;
```

### 2. Protected Routes
```javascript
// Middleware verifies token
export const protect = asyncHandler(async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  const decoded = jwt.verify(token, JWT_CONFIG.SECRET);
  req.admin = decoded;
  next();
});

// Route protection
router.post('/blogs', protect, verifyAdmin, createBlog);
```

### 3. Password Security
```javascript
// Hash password on save
adminSchema.pre('save', async function (next) {
  const salt = await bcryptjs.genSalt(10);
  this.password = await bcryptjs.hash(this.password, salt);
  next();
});

// Verify on login
const isMatch = await admin.matchPassword(password);
```

### 4. State Management (Zustand)
```javascript
// Global auth store
const useAuthStore = create((set) => ({
  admin: null,
  isAuthenticated: false,
  login: async (email, password) => { ... },
  logout: async () => { ... },
}));

// Usage in components
const { admin, login, logout } = useAuthStore();
```

---

## 🚀 Production Deployment

### Backend (Railway/Render)

1. **Create Account**: Go to railway.com or render.com
2. **Connect GitHub**: Link your repository
3. **Set Environment Variables**:
   - `MONGODB_URI`: Your production MongoDB URI
   - `JWT_SECRET`: Generate a secure random key
   - `NODE_ENV`: Set to "production"
   - Other vars from .env
4. **Deploy**: Platform auto-deploys on push

### Frontend (Vercel/Netlify)

1. **Create Account**: Go to vercel.com or netlify.com
2. **Connect GitHub**: Link your repository
3. **Build Settings**:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. **Environment Variables**:
   - `VITE_API_URL`: Your deployed backend URL
5. **Deploy**: Auto-deploy on push

---

## 📊 Performance Optimizations

- ✅ Lazy loading for blog images
- ✅ Pagination (10 items per page)
- ✅ Database indexes on frequently searched fields
- ✅ Async operations with proper error handling
- ✅ Middleware stack optimization
- ✅ Component code splitting

---

## 🧪 Testing the Application

### Test Admin Login
1. Navigate to http://localhost:5173/admin/login
2. Enter: admin@mindframe.com / SecurePassword123!
3. Click Login
4. Should redirect to dashboard

### Test Blog Creation
1. Login as admin
2. Go to "Add Blog" tab
3. Fill in blog details:
   - Title, Description, Content
   - Image URL (use Unsplash)
   - Select category and tags
4. Click "Create Blog"
5. Blog appears in blog list

### Test Public Blog View
1. Logout or go to http://localhost:5173
2. Click "Explore Blogs"
3. See all published blogs
4. Click blog to read full content

---

## 📖 Code Examples

### Adding a New Blog (Admin)
```javascript
// Frontend component
async function addBlog(formData) {
  const response = await blogService.createBlog({
    title: formData.title,
    description: formData.description,
    content: formData.content,
    image: formData.image,
    tags: formData.tags.split(','),
    category: formData.category,
    featured: formData.featured,
    published: formData.published,
  });
  return response.data;
}
```

### Getting All Blogs (Public)
```javascript
// Frontend component
useEffect(() => {
  const fetchBlogs = async () => {
    const response = await blogService.getAllBlogs(page, limit, search);
    setBlogs(response.data.blogs);
    setTotal(response.data.total);
  };
  fetchBlogs();
}, [page, search]);
```

---

## ❓ FAQ

**Q: Can I create multiple admin accounts?**
A: No, the system enforces single admin only.

**Q: Where are passwords stored?**
A: Hashed in MongoDB using bcryptjs with 10 salt rounds.

**Q: How long does JWT token last?**
A: 7 days by default (configurable via JWT_EXPIRY).

**Q: Can public users create accounts?**
A: No, there's no registration system. Only admin via seed script.

**Q: What happens if I lose admin password?**
A: Re-run `npm run seed` or manually update database.

**Q: Can I change admin email after creation?**
A: Yes, edit directly in MongoDB or via manual update query.

---

## 🎓 Learning Resources

- **MERN Stack**: [MERN Tutorial](https://www.mongodb.com/languages/mern-stack-developers)
- **Express.js**: [Official Docs](https://expressjs.com/)
- **React**: [React.dev](https://react.dev/)
- **MongoDB**: [MongoDB Docs](https://docs.mongodb.com/)
- **Tailwind CSS**: [Tailwind Docs](https://tailwindcss.com/)

---

## 📞 Support

For questions or issues:
1. Check the README.md
2. Review code comments
3. Check API documentation above
4. Review error messages in console

---

**Last Updated**: 2024
**Version**: 1.0.0
**Status**: Production Ready ✅
