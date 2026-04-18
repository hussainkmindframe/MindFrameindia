# Mindframe Digital Marketing Agency - MERN Application

A full-stack **MERN (MongoDB, Express.js, React.js, Node.js)** web application for a Digital Marketing Agency with a modern, professional UI and secure admin-only backend.

---

## 🚀 Features

### Public Features
- **Home Page**: Landing page with services showcase and latest blogs
- **Blog Listing**: View all published blogs with pagination and search
- **Single Blog**: Read full blog posts with detailed content
- **About Page**: Agency information and company values
- **Contact Page**: Contact form for inquiries
- **Responsive Design**: Fully responsive on all devices
- **Modern UI**: Built with Tailwind CSS with smooth animations

### Admin Features (Single Admin Only)
- **Secure Login**: JWT-based authentication
- **Dashboard**: Overview of blog statistics and quick actions
- **Blog Management**: 
  - Create blogs with title, description, content, image, tags, category
  - View all blogs with filtering and search
  - Edit blog details
  - Delete blogs
  - Mark blogs as featured or draft
- **Admin Panel**: Dedicated sidebar navigation and admin interface

---

## 🏗️ Architecture

### Backend (MVC Pattern)
```
/server
 ├── config/          # Database and JWT configuration
 ├── models/          # Mongoose schemas (Admin, Blog)
 ├── controllers/     # Business logic (Auth, Blog)
 ├── routes/          # API endpoints
 ├── middleware/      # Auth, error handling
 ├── utils/           # Helper functions
 ├── scripts/         # Database seeding
 ├── app.js           # Express app setup
 ├── server.js        # Entry point
 └── package.json
```

### Frontend (React)
```
/client
 ├── src/
 │   ├── components/  # Reusable UI components
 │   ├── pages/       # Page components
 │   ├── services/    # API calls
 │   ├── utils/       # Helper utilities and state management
 │   ├── hooks/       # Custom React hooks
 │   ├── App.jsx      # Main app component with routing
 │   ├── main.jsx     # Entry point
 │   └── index.css    # Global styles
 ├── vite.config.js
 ├── tailwind.config.js
 └── package.json
```

---

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- **MongoDB** (Atlas or local)
- **Git**

---

## 🔧 Installation

### 1. Clone or Extract Project

```bash
cd Mindframeindia
```

### 2. Backend Setup

```bash
cd server

# Install dependencies
npm install

# Create .env file (or copy from .env.example)
# Edit .env with your MongoDB URI and JWT secret
cp .env.example .env

# Edit .env file with your actual values:
# - MONGODB_URI: Your MongoDB connection string
# - JWT_SECRET: A secure random string
# - ADMIN_EMAIL: Admin login email
# - ADMIN_PASSWORD: Admin login password

# Run database seed to create admin user
npm run seed

# Start development server
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd ../client

# Install dependencies
npm install

# Create .env file (or copy from .env.example)
cp .env.example .env

# Start development server
npm run dev
```

Frontend will run on `http://localhost:5173`

---

## 🗄️ MongoDB Setup

### Option 1: MongoDB Atlas (Cloud)

1. Go to [mongodb.com](https://www.mongodb.com)
2. Create a free account and cluster
3. Get connection string
4. Add IP to whitelist
5. Update `MONGODB_URI` in `.env`

### Option 2: Local MongoDB

```bash
# Install MongoDB locally and start the service
# Connection string: mongodb://localhost:27017/mindframe_agency
```

---

## 👨‍💼 Admin User Setup

### Option 1: Automatic Seeding (Recommended)

```bash
cd server
npm run seed
```

This will create an admin user with credentials from your `.env` file:
- **Email**: admin@mindframe.com
- **Password**: SecurePassword123!

### Option 2: Manual Database Entry

Use MongoDB Compass or Atlas UI to insert:

```json
{
  "email": "admin@mindframe.com",
  "password": "SecurePassword123!",
  "role": "admin",
  "name": "Admin User",
  "isActive": true
}
```

**Note**: Passwords should NOT be stored in plain text in manual entry. Use the seed script instead.

---

## 🚀 Running the Application

### Terminal 1 - Backend
```bash
cd server
npm run dev
```

### Terminal 2 - Frontend
```bash
cd client
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 📝 API Documentation

### Authentication Endpoints

#### Login
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@mindframe.com",
  "password": "SecurePassword123!"
}

Response:
{
  "success": true,
  "token": "jwt_token_here",
  "admin": {
    "id": "...",
    "email": "admin@mindframe.com",
    "name": "Admin User",
    "role": "admin"
  }
}
```

#### Get Current Admin
```
GET /api/auth/me
Authorization: Bearer {token}
```

### Blog Endpoints

#### Get All Blogs (Public)
```
GET /api/blogs?page=1&limit=10&search=&category=
```

#### Get Single Blog (Public)
```
GET /api/blogs/:id
```

#### Create Blog (Admin Only)
```
POST /api/blogs
Authorization: Bearer {token}
Content-Type: application/json

{
  "title": "Blog Title",
  "description": "Short description",
  "content": "Full blog content",
  "image": "https://example.com/image.jpg",
  "tags": "tag1, tag2",
  "category": "SEO",
  "featured": false,
  "published": true
}
```

#### Update Blog (Admin Only)
```
PUT /api/blogs/:id
Authorization: Bearer {token}
Content-Type: application/json

{ ...updated fields }
```

#### Delete Blog (Admin Only)
```
DELETE /api/blogs/:id
Authorization: Bearer {token}
```

#### Get Admin Blogs (Admin Only)
```
GET /api/blogs/admin/all?page=1&limit=10&search=
Authorization: Bearer {token}
```

---

## 🎨 Customization

### Environment Variables

**Backend (.env)**
```env
# Database
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# JWT
JWT_SECRET=your_secret_key
JWT_EXPIRY=7d

# Admin
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=SecurePassword123!

# Server
PORT=5000
NODE_ENV=development

# CORS
CORS_ORIGIN=http://localhost:5173
```

**Frontend (.env)**
```env
VITE_API_URL=http://localhost:5000/api
```

### Tailwind CSS Colors

Edit `client/tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#1F2937',    // Dark gray
      secondary: '#3B82F6',  // Blue
      accent: '#F59E0B',     // Amber
    },
  },
}
```

---

## 📦 Dependencies

### Backend
- **express**: Web framework
- **mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **cors**: Cross-origin requests
- **express-validator**: Input validation
- **multer**: File uploads
- **dotenv**: Environment variables

### Frontend
- **react**: UI library
- **react-router-dom**: Routing
- **axios**: HTTP client
- **zustand**: State management
- **tailwindcss**: CSS framework
- **react-hot-toast**: Notifications
- **framer-motion**: Animations

---

## 🔐 Security Features

✅ **Password Hashing**: bcryptjs with salt rounds
✅ **JWT Authentication**: Secure token-based auth
✅ **Protected Routes**: Admin-only endpoints
✅ **CORS**: Configured for specific origins
✅ **Environment Variables**: Sensitive data not in code
✅ **Input Validation**: Express-validator for API inputs
✅ **Error Handling**: Centralized error middleware
✅ **Single Admin**: No public registration

---

## 🚨 Error Handling

The application includes comprehensive error handling:

- **401 Unauthorized**: Missing or invalid token
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource doesn't exist
- **422 Unprocessable Entity**: Validation errors
- **500 Server Error**: Internal server error

---

## 📱 Deployment

### Backend (Heroku, Railway, Render)

1. Create account and connect GitHub repo
2. Set environment variables
3. Deploy

### Frontend (Vercel, Netlify)

1. Build: `npm run build`
2. Deploy the `dist` folder
3. Set API URL in environment variables

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Find and kill process on port
# Linux/Mac:
lsof -i :5000
kill -9 <PID>

# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### CORS Errors
- Ensure backend CORS_ORIGIN matches frontend URL
- Check browser console for exact error

### MongoDB Connection Error
- Verify connection string
- Check IP whitelist in MongoDB Atlas
- Ensure network connectivity

### Token Expired
- Token expires after 7 days by default
- User needs to login again

---

## 📚 Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/)
- [Vite Guide](https://vitejs.dev/)

---

## 📄 License

This project is licensed under the ISC License.

---

## 👨‍💻 Support

For issues, questions, or suggestions, please refer to the code comments or check the API documentation above.

---

## ✨ Features Roadmap

- [ ] Image upload to Cloudinary
- [ ] Rich text editor for blog content
- [ ] Dark mode theme
- [ ] Email notifications
- [ ] User comments on blogs
- [ ] Social media sharing
- [ ] Analytics dashboard
- [ ] Multiple admin support (future)

---

**Built with ❤️ using MERN Stack**
