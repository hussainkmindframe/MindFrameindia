/**
 * Home Page
 * Landing page for the agency
 */

import { Link } from 'react-router-dom';
import { MdBook, MdMail, MdSmartphone, MdSearch, MdCreateNewFolder, MdCreditCard, MdPalette, MdShowChart, MdCheckCircle } from 'react-icons/md';

export default function Home() {

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary via-secondary to-accent text-white py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeIn">
            Transform Your Digital Presence
          </h1>
          <p className="text-lg md:text-xl mb-10 opacity-90 max-w-3xl mx-auto animate-slideUp">
            We provide cutting-edge digital marketing solutions to help your business grow, engage customers, and reach new heights in the digital world.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/blogs"
              className="px-8 py-4 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 active:scale-95"
            >
              <MdBook className="text-lg" />
              Explore Blogs
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 bg-accent text-white font-bold rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 active:scale-95"
            >
              <MdMail className="text-lg" />
              Get in Touch
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
              <p className="text-4xl font-bold">500+</p>
              <p>Satisfied Clients</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
              <p className="text-4xl font-bold">1000+</p>
              <p>Projects Completed</p>
            </div>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
              <p className="text-4xl font-bold">5+</p>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive digital marketing solutions tailored to your business needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Social Media Marketing',
                description: 'Grow your brand presence with targeted social media strategies across all platforms.',
                icon: MdSmartphone,
                color: 'from-blue-400 to-blue-600',
              },
              {
                title: 'SEO Optimization',
                description: 'Boost your visibility with proven SEO techniques and rank higher in search results.',
                icon: MdSearch,
                color: 'from-green-400 to-green-600',
              },
              {
                title: 'Content Marketing',
                description: 'Create engaging content that resonates with your audience and drives conversions.',
                icon: MdCreateNewFolder,
                color: 'from-purple-400 to-purple-600',
              },
              {
                title: 'PPC Advertising',
                description: 'Maximize ROI with strategic paid advertising campaigns on Google and social platforms.',
                icon: MdCreditCard,
                color: 'from-red-400 to-red-600',
              },
              {
                title: 'Brand Strategy',
                description: 'Build a strong brand identity that stands out in the market and connects with customers.',
                icon: MdPalette,
                color: 'from-yellow-400 to-yellow-600',
              },
              {
                title: 'Analytics & Reporting',
                description: 'Track performance with detailed analytics, insights, and actionable recommendations.',
                icon: MdShowChart,
                color: 'from-indigo-400 to-indigo-600',
              },
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-secondary"
                >
                  <div className="text-6xl mb-6 text-secondary">
                    <Icon />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                alt="Why Choose Us"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Mindframe?</h2>
              <ul className="space-y-4">
                {[
                  'Expert team with 5+ years of industry experience',
                  'Data-driven strategies backed by analytics',
                  'Proven track record with 500+ satisfied clients',
                  'Transparent communication and regular updates',
                  'Customized solutions for every business',
                  'Dedicated support and optimization',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <MdCheckCircle className="text-2xl text-secondary mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-primary mb-4">Featured Blogs & Insights</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our latest insights and tips on digital marketing strategies
            </p>
          </div>

          <div className="text-center">
            <Link
              to="/blogs"
              className="px-10 py-4 bg-secondary text-white font-bold rounded-lg hover:bg-blue-700 transition-all transform hover:scale-105 inline-block text-lg"
            >
              View All Blogs →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-primary text-center mb-16">What Our Clients Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                company: 'Tech Startup',
                text: 'Mindframe transformed our digital presence. We saw 300% growth in leads within 6 months!',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
              },
              {
                name: 'Mike Chen',
                company: 'E-commerce Business',
                text: 'Their SEO strategies are incredible. We\'re now ranking #1 for our main keywords.',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
              },
              {
                name: 'Emma Davis',
                company: 'Fashion Brand',
                text: 'The social media management is top-notch. Our engagement rate increased by 250%.',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-secondary/10 p-8 rounded-lg shadow-md">
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-bold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-secondary to-accent text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-10 opacity-90">
            Let's work together to create a digital marketing strategy that drives real results and transforms your online presence.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-secondary font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 text-lg"
            >
              Start Your Journey Today
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-secondary transition-all transform hover:scale-105 text-lg"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
