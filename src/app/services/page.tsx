import { Calculator, Shield, Globe, CheckCircle } from 'lucide-react';

const Services = () => {
    const accountingPlans = [
        {
            name: 'Plan A',
            price: '$249/month',
            description: 'Essential accounting services for growing businesses',
            features: [
                'Monthly Accounting',
                'Monthly Payroll & Filings',
                'Monthly Sales Tax Filings'
            ],
            popular: false
        },
        {
            name: 'Plan B',
            price: '$399/month',
            description: 'Comprehensive financial management with analytics',
            features: [
                'Everything in Plan A',
                'Monthly Metrics Dashboard',
                'Quarterly Financial Analysis',
                'Strategic Financial Insights',
                'Priority Support'
            ],
            popular: true
        },
        {
            name: 'Annual Package',
            price: '$999/year',
            description: 'Perfect for self-employed professionals and small businesses',
            features: [
                'Complete Annual Accounting',
                'Tax Preparation & Filing',
                'Quarterly Check-ins',
                'Year-end Financial Reports'
            ],
            popular: false
        }
    ];

    const staffingRoles = [
        { role: 'Admin Assistant', savings: 'Up to 70%' },
        { role: 'Executive Assistant', savings: 'Up to 70%' },
        { role: 'Accounting Assistant', savings: 'Up to 70%' },
        { role: 'Marketing Support', savings: 'Up to 70%' },
        { role: 'Sales Support', savings: 'Up to 70%' },
        { role: 'Customer Support', savings: 'Up to 70%' },
        { role: 'HR Assistant', savings: 'Up to 70%' },
        { role: 'Operations Support', savings: 'Up to 70%' }
    ];

    const process = [
        {
            step: '01',
            title: 'Tell Us Your Needs',
            description: 'Share your role requirements and business goals with our team.'
        },
        {
            step: '02',
            title: 'We Find Top Talent',
            description: 'Rigorous screening including skills assessment, communication tests, and interviews.'
        },
        {
            step: '03',
            title: 'We Handle Everything',
            description: 'Complete management of contracts, onboarding, timesheets, and payroll.'
        },
        {
            step: '04',
            title: 'Ongoing Success',
            description: '60-90 day coaching program to ensure high performance and satisfaction.'
        }
    ];

    return (
        <div className="pt-16 bg-white dark:bg-black">
            {/* Hero Section */}
            <section className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-4xl mx-auto">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Offshore Accounting & Staffing Solutions
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                            Access top-tier offshore talent and professional accounting services.
                            Save significantly while maintaining Fortune 500-level quality and expertise.
                        </p>
                    </div>
                </div>
            </section>

            {/* Accounting Services */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl mb-6">
                            <Calculator className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Professional Accounting Services
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            20+ years of finance expertise from KPMG & PwC alumni. We&apos;ve managed over $175M in funds
                            and helped grow companies to $100M+ valuations.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {accountingPlans.map((plan, index) => (
                            <div key={index} className={`bg-white dark:bg-black rounded-2xl shadow-lg border-2 p-8 relative ${plan.popular ? 'border-green-500' : 'border-gray-100 dark:border-white'
                                }`}>
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                                        <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                                            Most Popular
                                        </span>
                                    </div>
                                )}

                                <div className="text-center mb-8">
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{plan.name}</h3>
                                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-4">{plan.price}</div>
                                    <p className="text-gray-600 dark:text-gray-400">{plan.description}</p>
                                </div>

                                <div className="space-y-4 mb-8">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center">
                                            <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                                            <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular
                                        ? 'bg-green-600 text-white hover:bg-green-700'
                                        : 'bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800'
                                    }`}>
                                    Get Started
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 text-center border border-gray-100 dark:border-gray-800">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Why Choose Our Accounting Services?</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <div>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">20+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">$175M+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Funds Managed</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">$100M+</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Startup Growth</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">50%</div>
                                <div className="text-sm text-gray-600 dark:text-gray-400">Cost Savings</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Staffing Services */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl mb-6">
                            <Globe className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            Offshore Staffing Solutions
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Access the top 10% of offshore talent from Philippines, India, and Latin America.
                            Zero-risk hiring with comprehensive support and management.
                        </p>
                    </div>

                    <div className="max-w-6xl mx-auto mb-16">
                        <div className="grid md:grid-cols-2 gap-12">
                            <div className="text-center md:text-left">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">What We Handle</h3>
                                <div className="space-y-4">
                                    {['Sourcing & Screening', 'Skills Assessment', 'Payroll Management', 'HR Compliance', 'Performance Coaching', 'Ongoing Support'].map((item, index) => (
                                        <div key={index} className="flex items-center justify-center md:justify-start">
                                            <CheckCircle className="h-5 w-5 text-blue-500 mr-3" />
                                            <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="text-center md:text-right">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Our Guarantees</h3>
                                <div className="space-y-4">
                                    {['Zero-risk hiring', 'No upfront costs', 'Complimentary replacements', 'Full HR management', 'Transparent pricing', '60-90 day coaching'].map((item, index) => (
                                        <div key={index} className="flex items-center justify-center md:justify-end">
                                            <span className="text-gray-700 dark:text-gray-300 mr-3">{item}</span>
                                            <Shield className="h-5 w-5 text-green-500" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Roles and Savings */}
                    <div className="bg-white dark:bg-black rounded-2xl p-8 border border-gray-100 dark:border-white">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Roles We Support</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {staffingRoles.map((item, index) => (
                                <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 text-center hover:shadow-md transition-shadow">
                                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{item.role}</h4>
                                    <div className="text-green-600 dark:text-green-400 font-medium">{item.savings}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Simple, transparent process designed for your success
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{item.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Success Story */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-black rounded-2xl p-8 md:p-12 shadow-lg border border-gray-100 dark:border-white">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Success Story</h2>
                            <p className="text-xl text-gray-600 dark:text-gray-400">$4 Billion Company - Vancouver, Canada</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$200K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Annual Savings</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$25M</div>
                                <div className="text-gray-600 dark:text-gray-400">Monthly Invoice Processing</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-gray-700 dark:text-gray-300 mb-2">4</div>
                                <div className="text-gray-600 dark:text-gray-400">Offshore Team Members</div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <p className="text-gray-800 dark:text-gray-300 italic text-center">
                                "This success isn&apos;t just about savings—it&apos;s about unlocking the potential of a global workforce."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-black">
                <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8">
                        Contact us today to discuss your offshore staffing and accounting needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-white text-black px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Start Hiring
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

export default Services;