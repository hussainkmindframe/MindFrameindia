/**
 * Footer Component
 */

import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const offices = [
    {
      name: 'HEAD OFFICE - MUMBAI',
      address: '6th Floor Bhukanvala Chambers B-22, Off Link Road, Veera Desai Rd, Andheri West, Mumbai, Maharashtra 400053',
      email: 'info@mindframeindia.com',
      phone: '+91 9892000733'
    },
    {
      name: 'BRANCH - MUMBAI',
      address: '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053',
      email: 'info@mindframeindia.com',
      phone: '+91 9892000733 / +91 9167830733'
    },
    {
      name: 'BRANCH - HYDERABAD',
      address: '501, Fifth floor, Pioneer Heights, Lane Opp International Public School, Manikonda Road, Hyderabad 500008',
      email: 'info@mindframeindia.com',
      phone: ''
    },
    {
      name: 'BRANCH - DUBAI',
      address: 'No: 606, 6th floor, Gardens 4, Near Ibn Battuta Mall, P. O. Box 234637, Dubai, United Arab Emirates',
      email: 'info@mindframeindia.com',
      phone: '+91 9892000733'
    },
    {
      name: 'BRANCH - CALIFORNIA',
      address: 'Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
      email: 'info@mindframeglobal.com',
      phone: '+1 (925) 205 8356'
    }
  ];

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Mindframe
              </span>
              <span className="text-gray-300"> Agency</span>
            </h3>
            <p className="text-gray-400">
              We create digital marketing solutions that drive results and transform businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-400 hover:text-secondary transition-colors">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-secondary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@mindframeindia.com</li>
              <li>Phone: +91 9892000733</li>
              <li>Location: Multiple Offices</li>
              <li className="pt-2">
                <Link to="/contact" className="text-secondary hover:text-accent transition-colors font-semibold">
                  View All Offices →
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Office Locations */}
        <div className="border-t border-gray-700 py-8 mb-8">
          <h4 className="text-lg font-semibold mb-6">Our Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {offices.map((office, index) => (
              <div key={index} className="text-sm bg-gray-800 p-4 rounded-lg">
                <h5 className="font-semibold text-secondary mb-2">{office.name}</h5>
                <p className="text-gray-400 text-xs leading-relaxed mb-2">{office.address}</p>
                <p className="text-gray-400 text-xs">{office.email}</p>
                {office.phone && <p className="text-gray-400 text-xs">{office.phone}</p>}
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex justify-between items-center flex-col md:flex-row gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Mindframe Agency. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-2xl hover:scale-110 transform">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-2xl hover:scale-110 transform">
                <FaTwitter />
              </a>
              <a href="#" className="text-gray-400 hover:text-secondary transition-colors text-2xl hover:scale-110 transform">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
