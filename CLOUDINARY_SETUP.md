# Cloudinary Setup Guide

## What Changed
Your upload system has been migrated from **local file storage** to **Cloudinary** cloud storage. This means:
- ✅ Files are stored securely in the cloud
- ✅ No more local `/uploads` folder management
- ✅ Better scalability and reliability
- ✅ Automatic image optimization

## Setup Steps

### 1. Get Cloudinary Credentials

**Free Account:**
1. Go to [cloudinary.com](https://cloudinary.com)
2. Click "Sign Up" and create a free account
3. After login, go to your Dashboard
4. Copy these values:
   - **Cloud Name** (visible on dashboard)
   - **API Key** (visible on dashboard)
   - **API Secret** (visible on dashboard)

### 2. Update .env File

Open `server/.env` and update the Cloudinary section:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Replace the values with your actual Cloudinary credentials from Step 1.

### 3. Install Dependencies

Run this command in the `server` folder:

```bash
npm install
```

This will install `multer-storage-cloudinary` package.

### 4. Restart Server

```bash
npm run dev
```

## Files Updated

### New Files Created:
- `server/config/cloudinary.js` - Cloudinary configuration
- `server/.env` - Environment variables (needs credentials)

### Modified Files:
- `server/middleware/upload.js` - Now uses Cloudinary instead of local storage
- `server/controllers/blogController.js` - Uses Cloudinary URLs
- `server/controllers/careerController.js` - Uses Cloudinary for resumes
- `server/package.json` - Added `multer-storage-cloudinary` dependency

## How It Works Now

### Blog Image Upload:
- Endpoint: `POST /api/blogs/upload-image`
- Files stored in: `mindframe/blog-images` folder on Cloudinary
- Supported formats: JPEG, PNG, GIF, WebP
- Max size: 5MB

### Resume Upload (Careers):
- Endpoint: `POST /api/career` (with resume file)
- Files stored in: `mindframe/resumes` folder on Cloudinary
- Supported formats: PDF, DOC, DOCX
- Max size: 5MB

## Frontend Changes (if needed)

No changes needed in your frontend! The image URLs returned will be full Cloudinary URLs like:
```
https://res.cloudinary.com/your_cloud_name/image/upload/...
```

These URLs work directly in `<img>` tags.

## Testing

### Test Blog Image Upload:
```bash
curl -X POST http://localhost:5000/api/blogs/upload-image \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "image=@/path/to/image.jpg"
```

Response will include the Cloudinary URL:
```json
{
  "success": true,
  "message": "Image uploaded successfully",
  "image": "https://res.cloudinary.com/..."
}
```

### Test Career Resume Upload:
```bash
curl -X POST http://localhost:5000/api/career \
  -F "name=John Doe" \
  -F "email=john@example.com" \
  -F "resume=@/path/to/resume.pdf" \
  ...other fields...
```

## Folder Structure on Cloudinary

```
mindframe/
├── blog-images/
│   ├── image1.jpg
│   ├── image2.png
│   └── ...
└── resumes/
    ├── resume1.pdf
    ├── resume2.docx
    └── ...
```

## Troubleshooting

### Error: "Invalid API key"
- Check your `.env` file has correct `CLOUDINARY_API_KEY`

### Error: "No file uploaded"
- Make sure you're sending the file with correct field name:
  - Blog images: field name should be `image`
  - Resume: field name should be `resume`

### Error: "CLOUDINARY_CLOUD_NAME is undefined"
- Make sure you've added all three Cloudinary variables to `.env`
- Restart the server after editing `.env`

### Slow uploads
- This is normal for first upload, Cloudinary optimizes images on the fly
- Subsequent requests will be faster due to CDN caching

## Benefits of Cloudinary

1. **Automatic Optimization**: Images are automatically optimized for web
2. **CDN Delivery**: Lightning-fast delivery from global CDN
3. **Security**: Your files are secure in the cloud
4. **Scalability**: No server storage limits
5. **Analytics**: Built-in image analytics
6. **Transformations**: Free image manipulation and resizing

## Next Steps

1. ✅ Get Cloudinary credentials
2. ✅ Update `.env` file
3. ✅ Run `npm install`
4. ✅ Restart server
5. ✅ Test uploads

You're all set! 🎉
