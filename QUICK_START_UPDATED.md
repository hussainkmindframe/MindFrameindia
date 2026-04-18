# 🚀 Quick Start Guide - Mindframe Agency

Welcome to your complete MERN digital marketing agency application! Follow these steps to get everything running.

---

## ⚠️ IMPORTANT: Setup MongoDB First

Before running the application, you **MUST** set up MongoDB. See [MONGODB_SETUP.md](./MONGODB_SETUP.md) for detailed instructions.

Quick summary:
- Use MongoDB Atlas (Cloud, Recommended) - Free tier available
- OR use MongoDB Community (Local installation)
- Update `server/.env` with your MongoDB connection string

---

## 📋 Prerequisites

- **Node.js v16+** ([Download](https://nodejs.org/))
- **npm v8+** (comes with Node.js)
- **MongoDB** (Local or Atlas Cloud - See [MONGODB_SETUP.md](./MONGODB_SETUP.md))

---

## 🔧 Step 1: Install Dependencies

### Backend:
```bash
cd server
npm install
```

### Frontend:
```bash
cd client
npm install
```

---

## 🌱 Step 2: Seed Database with Demo Data

After MongoDB is configured and running:

```bash
cd server
npm run seed
```

Expected output:
```
🌱 Starting database seed...

✓ Admin user created successfully!
  Email: admin@mindframe.com

📝 Creating demo blogs...

✓ 6 demo blogs created successfully!

  📄 10 Essential Social Media Marketing Strategies for 2024
  📄 Complete SEO Guide: Ranking Higher in Search Results
  [... 4 more blogs ...]

✓ Database seeding completed!
```

---

## 🎯 Step 3: Start the Backend Server

### Terminal 1 - Backend:
```bash
cd server
npm run dev
```

Expected output:
```
Server running on port 5000
✓ Connected to MongoDB
```

The backend is now running at: **http://localhost:5000**

---

## 🎨 Step 4: Start the Frontend Server

### Terminal 2 - Frontend:
```bash
cd client
npm run dev
```

Expected output:
```
Local: http://localhost:5173
```

The frontend is now running at: **http://localhost:5173**

---

## 🌐 Step 5: Open Your Application

Open your browser and navigate to:
```
http://localhost:5173
```

You should see:
- 🏠 Home page with featured blogs and demo content
- 📚 6 demo blogs with Unsplash images
- Responsive navigation and styling

---

## 🔐 Step 6: Test Admin Login

1. Navigate to: **http://localhost:5173/admin/login**

2. Login with demo credentials:
   - **Email:** `admin@mindframe.com`
   - **Password:** `SecurePassword123!`

3. After successful login, you'll be redirected to:
   - **Dashboard:** http://localhost:5173/admin/dashboard

---

## 📊 Admin Dashboard Features

Once logged in, you can:

### 📈 Dashboard Tab
- View total blogs count
- View total views across all blogs
- See recent blogs summary
- Quick actions: Add New Blog, View All Blogs

### 📖 Manage Blogs Tab
- View all your blogs (published and draft)
- Edit blog content, images, and metadata
- Delete blogs with confirmation
- See views and publication status

### ✏️ Add Blog Tab
- Create new blog posts
- Upload featured images (URL)
- Set category and tags
- Mark as featured or draft
- Set publish status

---

## 🎨 Pages & Features

### Public Pages
- **Home** (`/`) - Landing page with featured services and latest blogs
- **Blogs** (`/blogs`) - Blog listing with search, filtering, and pagination
- **Single Blog** (`/blog/:id`) - Full blog post with images and content
- **About** (`/about`) - Company information, team, and values
- **Contact** (`/contact`) - Contact form and location

### Admin Pages
- **Login** (`/admin/login`) - Admin authentication
- **Dashboard** (`/admin/dashboard`) - Admin control panel

---

## 📱 Demo Data Included

The seed script creates:

### Admin User
- Email: `admin@mindframe.com`
- Password: `SecurePassword123!`
- Role: Admin (single-user system)

### 6 Demo Blogs
1. **10 Essential Social Media Marketing Strategies** (Featured, 250 views)
2. **Complete SEO Guide** (Featured, 180 views)
3. **Content Marketing: Creating Content That Converts** (150 views)
4. **Paid Advertising: Maximize Your PPC ROI** (200 views)
5. **Brand Strategy: Building Memorable Identity** (120 views)
6. **Analytics and Data-Driven Decision Making** (95 views)

All blogs include:
- ✅ High-quality Unsplash images
- ✅ Professional descriptions
- ✅ HTML-formatted content
- ✅ Relevant tags
- ✅ Category assignments
- ✅ Pre-populated view counts

---

## 🧪 Testing Checklist

- [ ] Home page loads with featured blogs
- [ ] Blog images from Unsplash display correctly
- [ ] Blog search functionality works
- [ ] Category filtering works
- [ ] Pagination works (more than 9 blogs)
- [ ] Single blog page displays full content
- [ ] Admin login works with provided credentials
- [ ] Can create new blog posts
- [ ] Can edit existing blogs
- [ ] Can delete blogs
- [ ] View counts increase when blog is visited
- [ ] Contact form displays properly
- [ ] About page shows company info
- [ ] Responsive design works on mobile

---

## 🐛 Troubleshooting

### MongoDB Connection Error
**Error:** `Error: querySrv ENOTFOUND _mongodb._tcp.cluster.mongodb.net`

**Solution:** 
- MongoDB is not configured or running
- Follow [MONGODB_SETUP.md](./MONGODB_SETUP.md)
- If using local MongoDB, ensure the service is running

### Port Already in Use
**Error:** `EADDRINUSE: address already in use :::5000` or `:::5173`

**Solution:**
```bash
# Kill process on port 5000 (Backend)
npx kill-port 5000

# Kill process on port 5173 (Frontend)
npx kill-port 5173
```

Then restart the servers.

### Module Not Found
**Error:** `Cannot find module 'dotenv'`

**Solution:**
```bash
cd server
npm install
```

### Seed Script Error
**Error:** `ERR_MODULE_NOT_FOUND`

**Solution:**
1. Make sure you're in the `server` directory
2. Run `npm install`
3. Run `npm run seed`

---

## 📚 Project Structure

```
mindframe-agency/
├── server/
│   ├── config/              # Configuration files
│   ├── models/              # Database models (Admin, Blog)
│   ├── controllers/         # Business logic
│   ├── routes/              # API endpoints
│   ├── middleware/          # Authentication, error handling
│   ├── utils/               # Helper functions
│   ├── scripts/
│   │   └── seed.js          # Database seeding script
│   ├── .env                 # Environment variables
│   ├── app.js               # Express app setup
│   └── server.js            # Entry point
│
├── client/
│   ├── src/
│   │   ├── pages/           # Page components
│   │   ├── components/      # Reusable components
│   │   ├── services/        # API service layer
│   │   ├── utils/           # Utilities (state, formatters)
│   │   ├── App.jsx          # Main app component
│   │   └── main.jsx         # Entry point
│   ├── .env                 # Frontend environment
│   └── vite.config.js       # Vite configuration
│
├── MONGODB_SETUP.md         # MongoDB setup guide
└── QUICK_START.md          # This file
```

---

## 🚀 Production Deployment

When ready to deploy:

1. **Update Environment Variables:**
   ```
   # server/.env
   MONGODB_URI=your_production_mongodb_uri
   JWT_SECRET=your_production_secret_key
   NODE_ENV=production
   
   # client/.env
   VITE_API_URL=https://your-api-domain.com/api
   ```

2. **Deploy Backend** (Heroku, Railway, Render, etc.)
3. **Deploy Frontend** (Vercel, Netlify, etc.)

See [README.md](./README.md) for detailed deployment instructions.

---

## 📖 API Documentation

See [README.md](./README.md) for comprehensive API documentation including:
- All endpoints
- Request/response formats
- Authentication requirements
- Error handling

---

## 💡 Tips & Tricks

- **Change Admin Password:** Edit `ADMIN_PASSWORD` in `server/.env` and run `npm run seed` again
- **Add More Demo Blogs:** Edit `server/scripts/seed.js` and add to the `demoBlogs` array
- **Customize Branding:** Update colors in `client/tailwind.config.js`
- **Change Site Title:** Update `client/index.html` and brand text in components

---

## 🤝 Support & Feedback

If you encounter any issues:
1. Check [MONGODB_SETUP.md](./MONGODB_SETUP.md)
2. Review [README.md](./README.md) for detailed documentation
3. Check the [Troubleshooting](#-troubleshooting) section above

---

## ✅ What's Included

This complete MERN application includes:

✅ **Backend (Node.js + Express)**
- MongoDB database with Mongoose
- JWT authentication
- RESTful API with 8 endpoints
- Global error handling
- Single admin user system

✅ **Frontend (React + Vite)**
- Responsive design with Tailwind CSS
- 7 page components
- 7 reusable components
- State management with Zustand
- API service layer with interceptors

✅ **Database**
- Admin model with password hashing
- Blog model with search indexes
- 6 demo blogs with Unsplash images

✅ **Features**
- Admin authentication and login
- Blog CRUD operations
- Search and filtering
- Pagination
- Responsive mobile design
- Production-ready code

✅ **Documentation**
- Comprehensive README
- Setup guide
- This quick start guide
- MongoDB setup guide

---

## 🎓 Next Steps

After getting the app running:

1. **Explore the Code:** Review the structure and understand the architecture
2. **Customize:** Update colors, content, and branding
3. **Add Features:** Extend the application with new functionality
4. **Deploy:** Move to production following the deployment guide
5. **Optimize:** Improve performance and SEO

---

**Happy coding! 🎉**

For more information, see [README.md](./README.md)
