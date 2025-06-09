"use client"
import React from 'react';
import { Award, Users, TrendingUp, Heart, MapPin, Phone, Mail, Globe, DollarSign } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '$175M+', label: 'Funds Managed' },
    { number: '70%', label: 'Average Cost Savings' },
    { number: '$4B', label: 'Client Company Size' }
  ];

  const team = [
    {
      name: 'Nash Cisneros',
      role: 'Founder & CEO',
      experience: '20+ years',
      specialties: ['Finance Leadership', 'KPMG & PwC Alumni', 'Offshore Strategy'],
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Talent Acquisition',
      experience: '15+ years',
      specialties: ['Global Recruiting', 'Talent Assessment', 'Performance Coaching'],
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Director of Accounting Services',
      experience: '18+ years',
      specialties: ['Financial Management', 'Tax Strategy', 'Business Growth'],
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Priya Sharma',
      role: 'Operations Manager',
      experience: '12+ years',
      specialties: ['Process Optimization', 'Quality Assurance', 'Client Success'],
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain Fortune 500-level standards while delivering cost-effective offshore solutions.'
    },
    {
      icon: Users,
      title: 'Global Talent',
      description: 'Access to the top 10% of professionals from Philippines, India, and Latin America.'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of helping companies save hundreds of thousands annually while scaling operations.'
    },
    {
      icon: Heart,
      title: 'Partnership',
      description: 'We act as your strategic partner, ensuring both talent and client success through ongoing support.'
    }
  ];

  const achievements = [
    {
      icon: DollarSign,
      title: '$175M+ Funds Managed',
      description: 'Extensive experience managing large-scale financial operations'
    },
    {
      icon: TrendingUp,
      title: '$100M+ Startup Growth',
      description: 'Helped scale startups to nine-figure valuations'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients across North America with offshore talent'
    },
    {
      icon: Users,
      title: 'Fortune 500 Standards',
      description: 'Delivering enterprise-level quality and compliance'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Global Hiring
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We help businesses access top-tier offshore talent and accounting support, 
              saving up to 70% in staffing costs and 50% in accounting services while 
              maintaining Fortune 500-level quality and expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-4xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To democratize access to world-class talent and financial expertise by connecting 
                businesses with the top 10% of offshore professionals. We believe that geographic 
                boundaries shouldn't limit access to exceptional talent and services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Through our comprehensive vetting process, ongoing coaching, and full-service 
                management, we ensure that businesses can scale efficiently while maintaining 
                the highest standards of quality and compliance.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                To be the global leader in offshore talent and accounting solutions, 
                enabling businesses of all sizes to compete on a global scale through 
                access to exceptional talent and cost-effective financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven expertise in finance and talent management with measurable results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6">
                  <achievement.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{achievement.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide how we serve our clients and manage our global talent network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced professionals with backgrounds from top-tier firms including KPMG, PwC, 
              and Fortune 500 companies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-gray-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.experience} experience</p>
                  <div className="space-y-1">
                    {member.specialties.map((specialty, specialtyIndex) => (
                      <div key={specialtyIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full inline-block mr-2">
                        {specialty}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-gray-900 to-black rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Client Success Story</h2>
              <p className="text-xl text-gray-300">$4 Billion Company - Vancouver, Canada</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-center mb-8">
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">$200K+</div>
                <div className="text-gray-300">Annual Savings Achieved</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-400 mb-2">$25M</div>
                <div className="text-gray-300">Monthly Invoice Processing</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">4</div>
                <div className="text-gray-300">Offshore Team Members</div>
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6 text-center">
              <p className="text-lg italic">
                "This success isn't just about savings—it's about unlocking the potential of a global workforce."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Location</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Head Office</h3>
                    <p className="text-gray-600">
                      213 - 2438 Marine Dr.<br />
                      West Vancouver, BC V7V 1L2<br />
                      Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+1 604-674-5992</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">nash.cisneros@globalhiring.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Global Presence</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">North America</span>
                  <span className="font-semibold text-gray-900">Canada, USA</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100">
                  <span className="text-gray-600">Asia Pacific</span>
                  <span className="font-semibold text-gray-900">Philippines, India</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600">Latin America</span>
                  <span className="font-semibold text-gray-900">Multiple Countries</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-800">
                  <strong>24/7 Support:</strong> Our global presence ensures round-the-clock 
                  support for all your offshore talent and accounting needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the companies saving hundreds of thousands annually with our offshore solutions.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default About;