/**
 * Contact Page
 */

import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdEmail, MdPhone, MdLocationOn, MdSend, MdElectricBolt, MdGpsFixed, MdHandshake } from 'react-icons/md';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90">We'd love to hear from you. Let's start a conversation about your digital marketing goals.</p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Contact Info */}
          {[
            { 
              icon: '�', 
              title: 'Email', 
              detail: 'info@mindframeindia.com',
              color: 'from-purple-400 to-purple-600'
            },
            { 
              icon: '📱', 
              title: 'Head Office - Mumbai', 
              detail: '+91 9892000733 / +91 9167830733',
              color: 'from-green-400 to-green-600'
            },
            { 
              icon: '🌍', 
              title: 'California Office', 
              detail: '+1 (925) 205 8356',
              color: 'from-blue-400 to-blue-600'
            },
          ].map((info, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg border-t-4 border-secondary shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="text-5xl mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-primary mb-2">{info.title}</h3>
              <p className="text-gray-600 text-lg">{info.detail}</p>
            </div>
          ))}
        </div>

        {/* Office Locations Section */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Our Global Offices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: 'HEAD OFFICE',
                city: 'MUMBAI, INDIA',
                address: '6th Floor Bhukanvala Chambers B-22, Off Link Road, Veera Desai Rd, Andheri West, Mumbai, Maharashtra 400053',
                email: 'info@mindframeindia.com',
                phone: '+91 9892000733'
              },
              {
                name: 'BRANCH OFFICE',
                city: 'MUMBAI, INDIA',
                address: '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053',
                email: 'info@mindframeindia.com',
                phone: '+91 9892000733 / +91 9167830733'
              },
              {
                name: 'BRANCH OFFICE',
                city: 'HYDERABAD, INDIA',
                address: '501, Fifth floor, Pioneer Heights, Lane Opp International Public School, Manikonda Road, Hyderabad 500008',
                email: 'info@mindframeindia.com',
                phone: ''
              },
              {
                name: 'BRANCH OFFICE',
                city: 'DUBAI, UAE',
                address: 'No: 606, 6th floor, Gardens 4, Near Ibn Battuta Mall, P. O. Box 234637, Dubai, United Arab Emirates',
                email: 'info@mindframeindia.com',
                phone: '+91 9892000733'
              },
              {
                name: 'BRANCH OFFICE',
                city: 'CALIFORNIA, USA',
                address: 'Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
                email: 'info@mindframeglobal.com',
                phone: '+1 (925) 205 8356'
              }
            ].map((office, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg border border-gray-200 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all">
                <h4 className="font-bold text-secondary mb-1">{office.name}</h4>
                <h5 className="font-bold text-primary mb-3">{office.city}</h5>
                <p className="text-sm text-gray-600 leading-relaxed mb-3">{office.address}</p>
                <div className="border-t pt-3 space-y-1">
                  <p className="text-xs text-gray-600 flex items-center gap-2">
                    <MdEmail className="text-secondary flex-shrink-0" />
                    <span>{office.email}</span>
                  </p>
                  {office.phone && (
                    <p className="text-xs text-gray-600 flex items-center gap-2">
                      <MdPhone className="text-secondary flex-shrink-0" />
                      <span>{office.phone}</span>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white border border-gray-200 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-8">Send us a Message</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 resize-none transition-all"
                  placeholder="Tell us more about your project..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-gradient-to-r from-secondary to-blue-600 text-white rounded-lg hover:shadow-lg transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 flex items-center justify-center gap-2 active:scale-95"
              >
                <MdSend className="text-lg" />
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Image & Info */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&q=80"
              alt="Contact Us"
              className="rounded-lg shadow-lg mb-8 w-full h-96 object-cover"
            />

            {/* Additional Info Box */}
            <div className="bg-gradient-to-br from-secondary/10 to-accent/10 p-8 rounded-lg border-l-4 border-secondary">
              <h3 className="text-2xl font-bold text-primary mb-4">Why Contact Us?</h3>
              <ul className="space-y-3">
                {[
                  'Get personalized digital marketing recommendations',
                  'Discuss your business goals and challenges',
                  'Learn about our services and pricing',
                  'Schedule a free consultation with our experts',
                  'Explore partnership opportunities',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-1">→</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Response Time */}
            <div className="bg-accent/20 p-4 rounded-lg mt-6 border border-accent">
              <p className="text-sm text-gray-700">
                <span className="font-bold">Average Response Time:</span> We typically respond to inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20">
          <h2 className="text-4xl font-bold text-primary mb-8 text-center">Head Office Location</h2>
          <div className="bg-gray-200 rounded-lg overflow-hidden h-96 shadow-lg">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Mindframe Agency Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.6046876937015!2d72.82649!3d19.11717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df8dc13d79%3A0x60f5ff3b8f9e4e0!2sBhukanvala%20Chambers%2C%20Veera%20Desai%20Rd%2C%20Andheri%20West%2C%20Mumbai%2C%20Maharashtra%20400053!5e0!3m2!1sen!2sin!4v1234567890"
              allowFullScreen=""
              loading="lazy"
              style={{ border: 0 }}
            ></iframe>
          </div>
        </div>

        {/* Additional Support Section */}
        <div className="mt-20 bg-gray-50 p-12 rounded-lg">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">We're Here to Help</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: '⚡',
                title: 'Quick Response',
                description: 'We respond to all inquiries promptly and professionally'
              },
              {
                icon: '🎯',
                title: 'Expert Consultation',
                description: 'Get advice from our team of experienced digital marketing experts'
              },
              {
                icon: '🤝',
                title: '24/7 Support',
                description: 'Your success is our priority, and we\'re here to support you'
              },
            ].map((support, index) => (
              <div key={index} className="p-6">
                <div className="text-5xl mb-4">{support.icon}</div>
                <h4 className="text-xl font-bold text-primary mb-2">{support.title}</h4>
                <p className="text-gray-600">{support.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
