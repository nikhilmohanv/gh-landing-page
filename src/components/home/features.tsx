import { CheckCircle, DollarSign, Shield, Users } from "lucide-react";

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
  
  export default function FeaturesSection() {
    return (
        <section className="py-20 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Why Choose Global Hiring?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        We combine global talent access with expert financial management to deliver
                        exceptional results at a fraction of traditional costs.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="text-center group">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 dark:bg-gray-900 rounded-2xl mb-6 group-hover:bg-gray-200 dark:group-hover:bg-gray-800 transition-colors">
                                <feature.icon className="h-8 w-8 text-gray-700 dark:text-gray-300" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Benefits Grid */}
                <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 md:p-12 border border-gray-100 dark:border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                                Complete Offshore Solutions
                            </h3>
                            <div className="space-y-4">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="bg-white dark:bg-black rounded-xl p-8 shadow-lg border border-gray-100 dark:border-gray-800">
                                <div className="text-4xl font-bold text-black dark:text-white mb-2">$4B</div>
                                <div className="text-gray-600 dark:text-gray-400 mb-4">Company Success Story</div>
                                <div className="text-2xl font-bold text-green-600 mb-2">$200K+</div>
                                <div className="text-gray-600 dark:text-gray-400 mb-4">Annual Savings Achieved</div>
                                <div className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-2">$25M</div>
                                <div className="text-gray-600 dark:text-gray-400">Monthly Invoice Processing</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}