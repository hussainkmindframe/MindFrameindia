/**
 * About Page
 */

import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">About Mindframe Agency</h1>
          <p className="text-xl opacity-90">Transforming businesses through digital excellence since 2019</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Our Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Our Story"
              className="rounded-lg shadow-lg"
            />
            <div>
              <h2 className="text-5xl font-bold text-primary mb-6">Our Story</h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                Founded in 2019, Mindframe Agency began with a simple mission: to help businesses thrive in the digital world. 
                What started as a small team of passionate digital marketers has grown into a full-service agency trusted by hundreds of companies across various industries.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                We believe that every business, regardless of size, deserves access to world-class digital marketing strategies. 
                Our approach combines data-driven insights with creative excellence to deliver measurable results.
              </p>
              <p className="text-gray-700 leading-relaxed text-lg">
                Today, we're proud to have helped over 500 clients achieve their digital marketing goals and transform their online presence.
              </p>
            </div>
          </div>
        </section>

        {/* Our Mission & Vision */}
        <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-secondary/10 p-8 rounded-lg shadow-lg border-l-4 border-secondary">
            <h3 className="text-3xl font-bold text-primary mb-4">🎯 Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To empower businesses with innovative digital marketing solutions that drive growth, 
              build brand awareness, and create lasting connections with their audiences. We're committed 
              to delivering exceptional service, transparency, and results-driven strategies that exceed expectations.
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/10 to-orange-50 p-8 rounded-lg shadow-lg border-l-4 border-accent">
            <h3 className="text-3xl font-bold text-primary mb-4">🚀 Our Vision</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              To be the most trusted digital marketing partner for businesses worldwide, known for 
              innovation, integrity, and outstanding results. We envision a future where every company 
              can leverage cutting-edge digital strategies to achieve their business goals.
            </p>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⭐',
                title: 'Excellence',
                description: 'We strive for excellence in every project, ensuring quality and attention to detail in everything we do.',
              },
              {
                icon: '💡',
                title: 'Innovation',
                description: 'We stay ahead of industry trends and implement cutting-edge strategies and technologies.',
              },
              {
                icon: '🤝',
                title: 'Integrity',
                description: 'We believe in transparency, honesty, and building trust with our clients through open communication.',
              },
              {
                icon: '👥',
                title: 'Collaboration',
                description: 'We work closely with our clients to understand their goals and deliver results together.',
              },
              {
                icon: '📈',
                title: 'Impact',
                description: 'We focus on creating meaningful impact and measurable results for our clients.',
              },
              {
                icon: '🌱',
                title: 'Growth',
                description: 'We believe in continuous learning and helping our clients grow their businesses exponentially.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg border border-gray-200 hover:border-secondary hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">Why Choose Mindframe?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <ul className="space-y-6">
                {[
                  { icon: '✓', text: 'Proven track record of success with 500+ satisfied clients' },
                  { icon: '✓', text: 'Team of experienced digital marketing professionals' },
                  { icon: '✓', text: 'Data-driven strategies backed by comprehensive analytics' },
                  { icon: '✓', text: 'Transparent reporting and regular communication' },
                  { icon: '✓', text: 'Customized solutions tailored to your business needs' },
                  { icon: '✓', text: 'Dedicated support and ongoing optimization' },
                  { icon: '✓', text: '5+ years of industry experience' },
                  { icon: '✓', text: '24/7 customer support and assistance' },
                ].map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-2xl text-secondary font-bold mt-1">{reason.icon}</span>
                    <span className="text-lg text-gray-700">{reason.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
              alt="Why Choose Us"
              className="rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-5xl font-bold text-primary mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: 'Sarah Williams',
                role: 'Founder & CEO',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
              },
              {
                name: 'John Smith',
                role: 'Digital Strategy Lead',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
              },
              {
                name: 'Emma Johnson',
                role: 'Content Manager',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
              },
              {
                name: 'Mike Chen',
                role: 'SEO Specialist',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
              },
            ].map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-primary mb-2">{member.name}</h4>
                  <p className="text-secondary font-medium">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-secondary to-accent text-white py-16 rounded-lg mb-20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '500+', label: 'Happy Clients' },
              { number: '1000+', label: 'Projects Completed' },
              { number: '5+', label: 'Years Experience' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, index) => (
              <div key={index}>
                <p className="text-5xl font-bold mb-2">{stat.number}</p>
                <p className="text-xl">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gray-50 border-2 border-secondary p-12 rounded-lg text-center">
          <h3 className="text-4xl font-bold text-primary mb-4">Ready to Work With Us?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business reach new heights in the digital landscape.
          </p>
          <Link
            to="/contact"
            className="px-10 py-4 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors inline-block font-bold text-lg"
          >
            Get in Touch Today
          </Link>
        </section>
      </div>
    </div>
  );
}
