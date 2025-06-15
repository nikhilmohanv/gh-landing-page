"use client"
import { useState } from 'react';
import { MapPin, Phone, Mail, Send, CheckCircle, Globe } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
    };

    const contactInfo = [
        {
            icon: MapPin,
            title: 'Head Office',
            details: ['213 - 2438 Marine Dr.', 'West Vancouver, BC V7V 1L2', 'Canada'],
            color: 'text-gray-600 dark:text-gray-400'
        },
        {
            icon: Phone,
            title: 'Phone Number',
            details: ['+1 604-674-5992', 'Available 24/7'],
            color: 'text-green-600 dark:text-green-400'
        },
        {
            icon: Mail,
            title: 'Email Address',
            details: ['nash.cisneros@globalhiring.ai', 'Response within 24 hours'],
            color: 'text-gray-600 dark:text-gray-400'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            details: ['Philippines, India', 'Latin America', 'North America'],
            color: 'text-blue-600 dark:text-blue-400'
        }
    ];

    const services = [
        'Offshore Accounting Services',
        'Executive Assistant Hiring',
        'Admin Assistant Hiring',
        'Accounting Assistant Hiring',
        'Marketing Support Team',
        'Sales Support Team',
        'Customer Support Team',
        'Operations Support',
        'HR Assistant',
        'Other'
    ];

    return (
        <div className="pt-16 bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Get in Touch
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Ready to save up to 70% on staffing costs and 50% on accounting services?
                            Contact our expert team today for a free consultation and discover how offshore solutions can transform your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white text-center hover:shadow-xl transition-shadow">
                                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${info.color} bg-gray-100 dark:bg-gray-900`}>
                                    <info.icon className={`h-8 w-8 ${info.color}`} />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{info.title}</h3>
                                <div className="space-y-1">
                                    {info.details.map((detail, detailIndex) => (
                                        <p key={detailIndex} className="text-gray-600 dark:text-gray-400 text-sm">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Additional Info */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white">
                            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h2>

                            {isSubmitted && (
                                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                                    <p className="text-green-800 dark:text-green-300">Thank you! Your message has been sent successfully. We&apos;ll respond within 24 hours.</p>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                            placeholder="+1 (555) 123-4567"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                            Company Name
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                            placeholder="Your Company"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Service of Interest
                                    </label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                    >
                                        <option value="">Select a service</option>
                                        {services.map((service, index) => (
                                            <option key={index} value={service}>{service}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:border-gray-500 dark:focus:border-gray-400 transition-colors resize-none bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
                                        placeholder="Tell us about your staffing or accounting needs and how we can help..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-black dark:bg-white text-white dark:text-black py-4 px-6 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                                >
                                    <Send className="h-5 w-5" />
                                    <span>Send Message</span>
                                </button>
                            </form>
                        </div>

                        {/* Additional Information */}
                        <div className="space-y-8">
                            {/* Quick Contact */}
                            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Quick Contact</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                        <Phone className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">For immediate assistance</p>
                                            <p className="font-semibold text-gray-900 dark:text-white">+1 604-674-5992</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                        <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                                        <div>
                                            <p className="text-sm text-gray-600 dark:text-gray-400">General inquiries</p>
                                            <p className="font-semibold text-gray-900 dark:text-white">nash.cisneros@globalhiring.ai</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* FAQ */}
                            <div className="bg-white dark:bg-black rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-white">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Frequently Asked Questions</h3>
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">How quickly can you find talent?</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">We typically present qualified candidates within 1-2 weeks of receiving your requirements.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Do you offer free consultations?</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Yes! We provide complimentary consultations to understand your needs and explain our services.</p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">What are the upfront costs?</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">Zero upfront costs. We offer risk-free hiring with transparent bi-weekly billing.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Success Metrics */}
                            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 text-white border border-gray-800 dark:border-white">
                                <h3 className="text-xl font-bold mb-6">Why Companies Choose Us</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-green-400 mb-1">70%</div>
                                        <div className="text-xs text-gray-300">Staffing Savings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-blue-400 mb-1">50%</div>
                                        <div className="text-xs text-gray-300">Accounting Savings</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-white mb-1">24/7</div>
                                        <div className="text-xs text-gray-300">Global Support</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-yellow-400 mb-1">Top 10%</div>
                                        <div className="text-xs text-gray-300">Talent Quality</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Global Presence</h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Headquartered in Vancouver with talent networks across Philippines, India, and Latin America.
                        </p>
                    </div>

                    <div className="bg-gray-200 dark:bg-gray-800 rounded-2xl h-96 flex items-center justify-center border border-gray-100 dark:border-gray-700">
                        <div className="text-center">
                            <Globe className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
                            <p className="text-gray-600 dark:text-gray-400 font-medium">Global Operations Map</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">213 - 2438 Marine Dr., West Vancouver, BC</p>
                            <p className="text-sm text-gray-500 dark:text-gray-500">Talent networks in 10+ countries</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;