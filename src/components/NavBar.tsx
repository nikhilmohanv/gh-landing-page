"use client"
import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/services', label: 'Services' },
        { path: '/about', label: 'About Us' },
        { path: '/contact', label: 'Contact' },
        { path: '/chat', label: 'AI Assistant' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        {/* <div className="p-2 bg-black rounded-lg group-hover:bg-gray-800 transition-colors">
                            <Globe className="h-6 w-6 text-white" />
                        </div> */}
                        <span className="text-xl font-bold text-gray-900">Global Hiring</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item.path)
                                        ? 'text-black bg-gray-100'
                                        : 'text-gray-700 hover:text-black hover:bg-gray-50'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors">
                            Start Hiring
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 hover:text-black hover:bg-gray-50 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item.path)
                                            ? 'text-black bg-gray-100'
                                            : 'text-gray-700 hover:text-black hover:bg-gray-50'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button className="bg-black text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-4">
                                Start Hiring
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navigation;