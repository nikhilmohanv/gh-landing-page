import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const stats = [
    { number: '70%', label: 'Cost Savings on Staffing' },
    { number: '50%', label: 'Savings on Accounting' },
    { number: '$175M+', label: 'Funds Managed' },
    { number: '20+', label: 'Years Experience' }
];

export default function HeroSection() {
    return (
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
    )
}