"use client"
import React from 'react';
import { Award, Users, TrendingUp, Heart, MapPin, Phone, Mail, Globe, DollarSign } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '20+', label: 'Years of Experience' },
    { number: '$175M+', label: 'Funds Managed' },
    { number: '70%', label: 'Average Cost Savings' },
    { number: '$4B', label: 'Client Company Size' },

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
    <div className="pt-16 bg-white dark:bg-black">
      {/* Hero Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Global Hiring
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We help businesses access top-tier offshore talent and accounting support,
              saving up to 70% in staffing costs and 50% in accounting services while
              maintaining Fortune 500-level quality and expertise.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white dark:bg-black rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-white">
                <div className="text-4xl font-bold text-black dark:text-white mb-2">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
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
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To democratize access to world-class talent and financial expertise by connecting
                businesses with the top 10% of offshore professionals. We believe that geographic
                boundaries shouldn&apos;t limit access to exceptional talent and services.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Through our comprehensive vetting process, ongoing coaching, and full-service
                management, we ensure that businesses can scale efficiently while maintaining
                the highest standards of quality and compliance.
              </p>
            </div>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 border border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Our Vision</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                To be the global leader in offshore talent and accounting solutions,
                enabling businesses of all sizes to compete on a global scale through
                access to exceptional talent and cost-effective financial services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Proven expertise in finance and talent management with measurable results for our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-6">
                  <achievement.icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These principles guide how we serve our clients and manage our global talent network.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 text-center hover:shadow-lg transition-shadow border border-gray-100 dark:border-white">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-6">
                  <value.icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals with backgrounds from top-tier firms including KPMG, PwC,
              and Fortune 500 companies.
            </p>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 md:p-12 text-white border border-gray-800 dark:border-white">
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
                "This success isn&apos;t just about savings—it&apos;s about unlocking the potential of a global workforce."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Location</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Head Office</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      213 - 2438 Marine Dr.<br />
                      West Vancouver, BC V7V 1L2<br />
                      Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 604-674-5992</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">nash.cisneros@globalhiring.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Global Presence</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">North America</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Canada, USA</span>
                </div>
                <div className="flex justify-between py-3 border-b border-gray-100 dark:border-gray-800">
                  <span className="text-gray-600 dark:text-gray-400">Asia Pacific</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Philippines, India</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-gray-600 dark:text-gray-400">Latin America</span>
                  <span className="font-semibold text-gray-900 dark:text-white">Multiple Countries</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <p className="text-sm text-gray-800 dark:text-gray-300">
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