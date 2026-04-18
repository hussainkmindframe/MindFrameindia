/**
 * Advanced Database Seeding Script
 * Creates admin user and demo blogs with Unsplash images
 * Usage: npm run seed
 */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import Blog from '../models/Blog.js';
import connectDB from '../config/database.js';

// Load environment variables
dotenv.config();

// Demo blogs with Unsplash images
const demoBlogs = [
  {
    title: '10 Essential Social Media Marketing Strategies for 2024',
    description: 'Learn the most effective social media tactics to grow your business and engage your audience.',
    content: '<h2>Introduction</h2><p>Social media marketing has become essential for businesses. This comprehensive guide covers the top 10 strategies that will help you succeed in 2024.</p><h3>1. Know Your Audience</h3><p>Understanding your target audience is the foundation of any successful social media strategy. Create detailed buyer personas and tailor your content accordingly.</p><h3>2. Create Quality Content</h3><p>Focus on creating valuable, engaging content that resonates with your followers. Mix educational, entertaining, and promotional content.</p><h3>3. Consistency is Key</h3><p>Post regularly and maintain a consistent brand voice across all platforms.</p><h3>4. Engage with Your Community</h3><p>Respond to comments, messages, and mentions promptly. Build relationships with your followers.</p><h3>5. Use Analytics</h3><p>Track your performance metrics and adjust your strategy based on data.</p>',
    image: 'https://images.unsplash.com/photo-1611532736579-6b16e2b50449?w=800&q=80',
    tags: ['social media', 'marketing', 'strategy', '2024'],
    category: 'Social Media',
    featured: true,
    published: true,
    views: 250,
  },
  {
    title: 'Complete SEO Guide: Ranking Higher in Search Results',
    description: 'Master the fundamentals of SEO and learn how to improve your search engine rankings.',
    content: '<h2>SEO Fundamentals</h2><p>Search Engine Optimization is crucial for online visibility. This guide covers on-page and off-page SEO techniques.</p><h3>On-Page SEO</h3><p>Optimize your title tags, meta descriptions, and content. Use relevant keywords naturally.</p><h3>Off-Page SEO</h3><p>Build quality backlinks and improve your domain authority.</p><h3>Technical SEO</h3><p>Ensure your website is fast, mobile-friendly, and crawlable by search engines.</p>',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80',
    tags: ['seo', 'search engine', 'ranking', 'optimization'],
    category: 'SEO',
    featured: true,
    published: true,
    views: 180,
  },
  {
    title: 'Content Marketing: Creating Content That Converts',
    description: 'Discover how to create compelling content that engages and converts your audience.',
    content: '<h2>Content is King</h2><p>Content marketing is about providing value to your audience. Here\'s how to create content that converts.</p><h3>Know Your Goals</h3><p>Define clear objectives for your content. Are you looking to educate, entertain, or convert?</p><h3>Understand Your Audience</h3><p>Create content that addresses your audience\'s pain points and interests.</p><h3>Optimize for Search</h3><p>Use SEO best practices to ensure your content is discoverable.</p><h3>Track Results</h3><p>Measure engagement and conversion rates to optimize your strategy.</p>',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    tags: ['content', 'marketing', 'engagement', 'conversion'],
    category: 'Content',
    featured: false,
    published: true,
    views: 150,
  },
  {
    title: 'Paid Advertising: Maximize Your PPC ROI',
    description: 'Learn advanced PPC strategies to get more conversions with less spending.',
    content: '<h2>PPC Advertising Basics</h2><p>Pay-per-click advertising can deliver quick results when done right. Here are the best practices.</p><h3>Set Clear Goals</h3><p>Define what success looks like for your campaigns.</p><h3>Keyword Research</h3><p>Choose keywords that have high intent and reasonable competition.</p><h3>Ad Copy Optimization</h3><p>Create compelling ad copy that encourages clicks.</p><h3>Landing Page Quality</h3><p>Ensure your landing pages match the ad copy and provide value.</p>',
    image: 'https://images.unsplash.com/photo-1460925895917-aeb19be489c7?w=800&q=80',
    tags: ['ppc', 'advertising', 'google ads', 'roi'],
    category: 'Marketing',
    featured: false,
    published: true,
    views: 200,
  },
  {
    title: 'Brand Strategy: Building a Memorable Identity',
    description: 'Create a strong brand identity that resonates with your target market.',
    content: '<h2>What is Brand Strategy?</h2><p>Brand strategy is the process of creating a unique identity for your business. It\'s much more than just a logo.</p><h3>Define Your Mission</h3><p>What does your company stand for? What problem do you solve?</p><h3>Know Your Competition</h3><p>Understand the competitive landscape and find your unique positioning.</p><h3>Visual Identity</h3><p>Create consistent visual elements that represent your brand.</p><h3>Brand Voice</h3><p>Develop a consistent tone and messaging across all channels.</p>',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    tags: ['branding', 'strategy', 'identity', 'design'],
    category: 'Design',
    featured: false,
    published: true,
    views: 120,
  },
  {
    title: 'Analytics and Data-Driven Decision Making',
    description: 'Use analytics to make smarter marketing decisions and improve your ROI.',
    content: '<h2>The Power of Data</h2><p>Analytics give you insights into what\'s working and what\'s not. Learn how to use data to optimize your marketing.</p><h3>Key Metrics to Track</h3><p>Focus on metrics that matter: conversion rate, customer acquisition cost, and lifetime value.</p><h3>Tools and Platforms</h3><p>Learn about Google Analytics, Hotjar, and other analytics tools.</p><h3>Creating Reports</h3><p>Present your data in a way that tells a story and drives action.</p>',
    image: 'https://images.unsplash.com/photo-1543269865-cbdf26cecb46?w=800&q=80',
    tags: ['analytics', 'data', 'reporting', 'metrics'],
    category: 'Marketing',
    featured: false,
    published: true,
    views: 95,
  },
];

const seedDatabase = async () => {
  try {
    // Connect to database
    await connectDB();

    console.log('\n🌱 Starting database seed...\n');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: process.env.ADMIN_EMAIL });

    if (existingAdmin) {
      console.log('✓ Admin user already exists!');
      console.log(`  Email: ${existingAdmin.email}`);
    } else {
      // Create admin user
      const admin = await Admin.create({
        email: process.env.ADMIN_EMAIL || 'admin@mindframe.com',
        password: process.env.ADMIN_PASSWORD || 'SecurePassword123!',
        name: 'Admin User',
        role: 'admin',
        isActive: true,
      });

      console.log('✓ Admin user created successfully!');
      console.log(`  Email: ${admin.email}`);
    }

    // Get admin ID
    const admin = await Admin.findOne({ email: process.env.ADMIN_EMAIL || 'admin@mindframe.com' });

    // Check if demo blogs already exist
    const existingBlogs = await Blog.countDocuments();

    if (existingBlogs === 0 && admin) {
      console.log('\n📝 Creating demo blogs...\n');

      // Create demo blogs
      const createdBlogs = await Blog.insertMany(
        demoBlogs.map((blog) => ({
          ...blog,
          createdBy: admin._id,
          author: 'Admin User',
        }))
      );

      console.log(`✓ ${createdBlogs.length} demo blogs created successfully!\n`);
      createdBlogs.forEach((blog) => {
        console.log(`  📄 ${blog.title}`);
      });
    } else if (existingBlogs > 0) {
      console.log(`\n✓ Demo blogs already exist! (${existingBlogs} blogs found)\n`);
    }

    console.log('✓ Database seeding completed!\n');
    process.exit(0);
  } catch (error) {
    console.error('\n✗ Error during seeding:', error.message);
    console.error(error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
