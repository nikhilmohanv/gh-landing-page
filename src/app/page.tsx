import React from 'react';
import { Shield, Users, TrendingUp, CheckCircle, ArrowRight, MessageCircle, DollarSign, Globe } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  const features = [
    {
      icon: DollarSign,
      title: 'Save Up to 70%',
      description: 'Reduce staffing costs by up to 70% and accounting expenses by 50% with our offshore solutions.',
    },
    {
      icon: Users,
      title: 'Top 10% Talent',
      description: 'Access pre-vetted professionals from Philippines, India, and Latin America with proven expertise.',
    },
    {
      icon: Shield,
      title: 'Zero-Risk Hiring',
      description: 'No upfront costs, complimentary replacements, and full HR compliance management.',
    },
  ];

  const benefits = [
    'Complete payroll and HR management',
    'Pre-vetted talent from top 10% candidates',
    '60-90 day performance coaching included',
    'Full-time dedicated team members',
    'Transparent pricing - talent earns 70%+',
    'Fortune 500-level service standards',
  ];

  const stats = [
    { number: '70%', label: 'Cost Savings on Staffing' },
    { number: '50%', label: 'Savings on Accounting' },
    { number: '$175M+', label: 'Funds Managed' },
    { number: '20+', label: 'Years Experience' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Offshore Accounting &
              <span className="text-black block">Talent Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Access top-tier offshore talent and professional accounting services. 
              Save up to 70% on staffing and 50% on accounting while maintaining Fortune 500-level quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center group">
                Start Hiring Today
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-black hover:text-black transition-colors">
                View Accounting Plans
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-black mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* AI Assistant CTA */}
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-black rounded-2xl mb-6">
                <MessageCircle className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Meet Your AI Hiring Assistant
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get instant answers about our offshore talent and accounting services. 
                Available 24/7 to help you understand how we can transform your business operations.
              </p>
              <Link
                href="/chat"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Start AI Chat
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Global Hiring?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine global talent access with expert financial management to deliver 
              exceptional results at a fraction of traditional costs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 group-hover:bg-gray-200 transition-colors">
                  <feature.icon className="h-8 w-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Complete Offshore Solutions
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-4xl font-bold text-black mb-2">$4B</div>
                  <div className="text-gray-600 mb-4">Company Success Story</div>
                  <div className="text-2xl font-bold text-green-600 mb-2">$200K+</div>
                  <div className="text-gray-600 mb-4">Annual Savings Achieved</div>
                  <div className="text-2xl font-bold text-gray-700 mb-2">$25M</div>
                  <div className="text-gray-600">Monthly Invoice Processing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive solutions for your business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Accounting Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-green-100 rounded-xl">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Accounting Services</h3>
                  <p className="text-green-600 font-medium">Starting from $249/month</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Professional accounting services with 20+ years of expertise from KPMG & PwC alumni. 
                Let us handle your books while you focus on scaling.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-700">• Monthly Accounting & Payroll</div>
                <div className="text-sm text-gray-700">• Financial Statements & Analysis</div>
                <div className="text-sm text-gray-700">• Tax Filings & Compliance</div>
                <div className="text-sm text-gray-700">• Dashboard & Metrics</div>
              </div>
              <Link href="/services" className="text-black font-medium hover:underline">
                View Accounting Plans →
              </Link>
            </div>

            {/* Staffing Services */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-100 rounded-xl">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">Offshore Staffing</h3>
                  <p className="text-blue-600 font-medium">Save up to 70%</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Access the top 10% of offshore talent from Philippines, India, and Latin America. 
                We handle sourcing, screening, payroll, and HR compliance.
              </p>
              <div className="space-y-2 mb-6">
                <div className="text-sm text-gray-700">• Executive & Admin Assistants</div>
                <div className="text-sm text-gray-700">• Accounting & Finance Support</div>
                <div className="text-sm text-gray-700">• Marketing & Sales Teams</div>
                <div className="text-sm text-gray-700">• Customer Support Specialists</div>
              </div>
              <Link href="/services" className="text-black font-medium hover:underline">
                Explore Talent Solutions →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business Operations?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join companies saving hundreds of thousands annually with our offshore solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Hiring Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;