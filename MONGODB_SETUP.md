# MongoDB Setup Guide for Mindframe Agency

The application requires MongoDB to store data. Follow one of these options:

## Option 1: MongoDB Atlas (Cloud - Recommended for Easy Setup)

MongoDB Atlas is a free cloud-hosted MongoDB service. This is the easiest option to get started.

### Steps:

1. **Create MongoDB Atlas Account:**
   - Visit [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
   - Click "Try Free"
   - Sign up with your email or Google/GitHub account

2. **Create a Cluster:**
   - After signing in, click "Create a Deployment"
   - Choose "Free" tier (M0)
   - Select your region (choose one closest to you)
   - Click "Create"
   - Wait for cluster to be created (usually 2-5 minutes)

3. **Create Database User:**
   - Go to "Security" → "Quick Start" or "Database Access"
   - Click "Add New Database User"
   - Username: `admin`
   - Password: Create a strong password (e.g., `SecurePassword123!`)
   - Click "Add User"

4. **Configure IP Address:**
   - Go to "Network Access"
   - Click "Add IP Address"
   - Select "Allow Access from Anywhere" or add your current IP
   - Click "Confirm"

5. **Get Connection String:**
   - Go to "Database" → "Clusters"
   - Click "Connect" on your cluster
   - Select "Drivers" → "Node.js" → Version "4.x or later"
   - Copy the connection string
   - Replace `<username>` with `admin` and `<password>` with your password
   - Replace `myFirstDatabase` with `mindframe_agency`

   Example connection string:
   ```
   mongodb+srv://admin:SecurePassword123@cluster0.xxxxx.mongodb.net/mindframe_agency?retryWrites=true&w=majority
   ```

6. **Update .env File:**
   - Open `server/.env`
   - Replace the MONGODB_URI with your connection string:
   ```
   MONGODB_URI=mongodb+srv://admin:SecurePassword123@cluster0.xxxxx.mongodb.net/mindframe_agency?retryWrites=true&w=majority
   ```

---

## Option 2: Local MongoDB Community (Requires Installation)

If you prefer to run MongoDB locally on your machine:

### Steps:

1. **Download and Install:**
   - Visit [MongoDB Community Download](https://www.mongodb.com/try/download/community)
   - Download for Windows
   - Run the installer
   - Follow the installation wizard (use default settings)
   - Choose "Install MongoDB as a Service"

2. **Verify Installation:**
   ```bash
   mongod --version
   ```

3. **Start MongoDB Service:**
   - MongoDB typically starts automatically on Windows
   - If not, open PowerShell as Administrator and run:
   ```bash
   net start MongoDB
   ```

4. **Update .env File:**
   - Open `server/.env`
   - Set MONGODB_URI to:
   ```
   MONGODB_URI=mongodb://localhost:27017/mindframe_agency
   ```

---

## Running the Seed Script

Once MongoDB is configured:

### 1. Install Dependencies (if not done yet):
```bash
cd server
npm install
```

### 2. Run Seed Script:
```bash
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
  📄 Content Marketing: Creating Content That Converts
  📄 Paid Advertising: Maximize Your PPC ROI
  📄 Brand Strategy: Building a Memorable Identity
  📄 Analytics and Data-Driven Decision Making

✓ Database seeding completed!
```

---

## Troubleshooting

### "Cannot connect to MongoDB"
- **MongoDB Atlas:** Check your connection string, username, password, and IP whitelist
- **Local MongoDB:** Ensure MongoDB service is running: `net start MongoDB`

### "Database already exists"
- The seed script won't duplicate data if it already exists. You can safely run it again.

### "Authentication failed"
- Double-check your username and password in the connection string
- Make sure the database user has proper permissions

---

## Next Steps

After successful seeding:

### Start the Backend Server:
```bash
npm run dev
```
Expected: "Server running on port 5000"

### Start the Frontend Server (new terminal):
```bash
cd client
npm install  # if not done yet
npm run dev
```
Expected: "Local: http://localhost:5173"

### Open the Application:
- Visit http://localhost:5173 in your browser
- You should see the Home page with demo blogs and Unsplash images

### Test Admin Login:
- Navigate to http://localhost:5173/admin/login
- Email: `admin@mindframe.com`
- Password: `SecurePassword123!`
- You should be redirected to the admin dashboard

---

## Demo Blogs Included

The seed script creates 6 demo blogs with:
- ✅ High-quality Unsplash images
- ✅ Realistic titles and descriptions
- ✅ HTML-formatted content
- ✅ Relevant tags and categories
- ✅ Featured badges for 2 blogs
- ✅ Pre-populated view counts

All blogs are linked to the admin user and ready to display on the site!

---

## Admin Credentials

**Email:** admin@mindframe.com  
**Password:** SecurePassword123!

These credentials are configured in your `.env` file and can be changed by editing:
```
ADMIN_EMAIL=admin@mindframe.com
ADMIN_PASSWORD=SecurePassword123!
```

---

For more information, see:
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [MongoDB Community Documentation](https://docs.mongodb.com/manual/)
