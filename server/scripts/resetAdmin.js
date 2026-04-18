/**
 * Admin Password Reset Script
 */

import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Admin from '../models/Admin.js';
import connectDB from '../config/database.js';

dotenv.config();

const resetAdmin = async () => {
  try {
    await connectDB();
    console.log('\n🔄 Resetting admin credentials...\n');

    // Delete existing admin
    await Admin.deleteMany({});
    console.log('✓ Old admin deleted');

    // Create new admin
    const newAdmin = await Admin.create({
      email: 'admin@mindframe.com',
      password: 'SecurePassword123!',
      name: 'Admin',
      role: 'admin',
      isActive: true,
    });

    console.log('✓ New admin created!\n');
    console.log('📧 Email: admin@mindframe.com');
    console.log('🔑 Password: SecurePassword123!\n');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

resetAdmin();
