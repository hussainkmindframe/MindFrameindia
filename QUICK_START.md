# 🚀 Quick Start - Mindframe Digital Marketing Agency

## ⚡ Get Running in 5 Minutes

### Prerequisites
- Node.js v14+
- MongoDB (free at mongodb.com)

### Step 1: Backend Setup
```bash
cd server
npm install
npm run seed
npm run dev
```
✅ Backend running at http://localhost:5000

### Step 2: Frontend Setup (New Terminal)
```bash
cd client
npm install
npm run dev
```
✅ Frontend running at http://localhost:5173

### Step 3: Login
- URL: http://localhost:5173/admin/login
- Email: admin@mindframe.com
- Password: SecurePassword123!

---

## 📁 What's Included

### Backend Files Created (16 files)
- ✅ MVC Architecture with Models, Controllers, Routes
- ✅ JWT Authentication & Admin-Only System
- ✅ MongoDB Mongoose Schemas
- ✅ Global Error Handling
- ✅ Database Seeding Script
- ✅ CORS & Security Middleware

### Frontend Files Created (25+ files)
- ✅ React Pages (Home, Blogs, Single Blog, About, Contact)
- ✅ Admin Panel (Login, Dashboard, Blog Management)
- ✅ Reusable Components
- ✅ API Services & State Management
- ✅ Tailwind CSS Styling
- ✅ Fully Responsive Design

### Configuration Files
- ✅ Vite Configuration
- ✅ Tailwind CSS Config
- ✅ Environment Variables (.env)
- ✅ PostCSS Configuration
- ✅ .gitignore

### Documentation
- ✅ README.md (Complete documentation)
- ✅ SETUP_GUIDE.md (Detailed setup)
- ✅ This Quick Start Guide

---

## 🎯 Key Features Implemented

✅ **Single Admin System** - Only one admin user allowed
✅ **JWT Authentication** - Secure token-based login
✅ **Blog CRUD** - Create, read, update, delete blogs
✅ **Pagination & Search** - Browse blogs efficiently
✅ **Responsive Design** - Works on all devices
✅ **Modern UI** - Tailwind CSS with animations
✅ **Error Handling** - Comprehensive error middleware
✅ **Protected Routes** - Admin-only endpoints
✅ **Password Hashing** - bcrypt security
✅ **MVC Architecture** - Clean code structure

---

## 📊 Database Schema

### Admin Collection
```javascript
{
  email: "admin@mindframe.com",
  password: "hashed_password",
  role: "admin",
  name: "Admin User",
  isActive: true,
  lastLogin: Date,
  createdAt: Date
}
```

### Blog Collection
```javascript
{
  title: "Blog Title",
  description: "Short description",
  content: "Full blog content",
  image: "https://example.com/image.jpg",
  tags: ["tag1", "tag2"],
  category: "SEO",
  featured: false,
  published: true,
  views: 0,
  createdBy: ObjectId,
  createdAt: Date
}
```

---

## 🔌 API Endpoints

### Public APIs
- `GET /api/blogs` - Get all blogs
- `GET /api/blogs/:id` - Get single blog
- `POST /api/auth/login` - Admin login

### Protected APIs (Admin Only)
- `POST /api/blogs` - Create blog
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog
- `GET /api/auth/me` - Get current admin

---

## 🎨 Frontend Pages

| Page | Route | Public | Features |
|------|-------|--------|----------|
| Home | / | ✅ | Hero, services, latest blogs |
| Blogs | /blogs | ✅ | List, search, pagination |
| Single Blog | /blog/:id | ✅ | Full content, tags, meta |
| About | /about | ✅ | Company info, values |
| Contact | /contact | ✅ | Contact form, map |
| Admin Login | /admin/login | ✅ | Secure login form |
| Dashboard | /admin/dashboard | 🔒 | Stats, quick actions |
| Manage Blogs | /admin/blogs | 🔒 | Table, edit, delete |
| Add Blog | /admin/add | 🔒 | Blog creation form |

---

## 🛠️ Tech Stack

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Cors** - Cross-origin
- **Dotenv** - Environment vars

### Frontend
- **React 18** - UI library
- **Vite** - Build tool
- **React Router** - Routing
- **Axios** - HTTP client
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **React Hot Toast** - Notifications

---

## 📝 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/db
JWT_SECRET=your_secret_key
JWT_EXPIRY=7d
ADMIN_EMAIL=admin@mindframe.com
ADMIN_PASSWORD=SecurePassword123!
PORT=5000
NODE_ENV=development
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000/api
```

---

## 🔐 Security Features

- ✅ Password hashing with bcryptjs
- ✅ JWT token verification
- ✅ Protected routes
- ✅ CORS configuration
- ✅ Environment variable protection
- ✅ Single admin enforcement
- ✅ Error handling
- ✅ Input validation

---

## 📂 File Structure Overview

```
Mindframeindia/
├── server/
│   ├── config/              (3 files)
│   ├── models/              (2 files)
│   ├── controllers/         (2 files)
│   ├── routes/              (2 files)
│   ├── middleware/          (2 files)
│   ├── utils/               (2 files)
│   ├── scripts/             (1 file)
│   ├── app.js
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── client/
│   ├── src/
│   │   ├── components/      (7 files)
│   │   ├── pages/           (7 files)
│   │   ├── services/        (3 files)
│   │   ├── utils/           (2 files)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── package.json
│   ├── .env
│   └── .env.example
│
├── README.md
├── SETUP_GUIDE.md
├── QUICK_START.md
└── .gitignore
```

**Total Files**: 50+
**Total Lines of Code**: 3000+

---

## ✨ Next Steps

1. **Install Dependencies**
   ```bash
   cd server && npm install
   cd ../client && npm install
   ```

2. **Set Up MongoDB**
   - Create free cluster at mongodb.com
   - Get connection string
   - Add to server/.env

3. **Seed Database**
   ```bash
   cd server
   npm run seed
   ```

4. **Start Development**
   ```bash
   # Terminal 1
   cd server && npm run dev
   
   # Terminal 2
   cd client && npm run dev
   ```

5. **Access Application**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000
   - Admin: http://localhost:5173/admin/login

---

## 🎓 Learning Path

1. Explore `server/app.js` - Express setup
2. Review `server/models/` - Database schemas
3. Check `server/controllers/` - Business logic
4. Look at `client/App.jsx` - React routing
5. Review `client/services/` - API calls
6. Check `client/pages/` - Page components

---

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 5000 in use | Kill process: `lsof -i :5000` |
| MongoDB connection error | Check URI and IP whitelist |
| CORS error | Ensure CORS_ORIGIN matches frontend URL |
| Admin login fails | Run `npm run seed` again |
| 404 on route | Check routing in `App.jsx` |

---

## 📚 Documentation

- **README.md** - Full feature documentation
- **SETUP_GUIDE.md** - Detailed setup instructions
- **Code Comments** - Inline documentation

---

## 🚀 Production Ready

This application is production-ready with:
- ✅ Clean code structure
- ✅ Error handling
- ✅ Security best practices
- ✅ Scalable architecture
- ✅ Environment configuration
- ✅ Comprehensive documentation

---

## 💡 Tips

- Use Unsplash for free blog images: https://unsplash.com
- MongoDB Atlas has 512MB free storage
- Vite dev server supports hot reload
- Tailwind CSS works out of the box
- Zustand is lightweight state management

---

**Happy Coding! 🎉**

Questions? Check the detailed documentation files or review the code comments.
