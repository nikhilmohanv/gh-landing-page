import { Globe, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function ServicesSection() {
    return (
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
    );
}