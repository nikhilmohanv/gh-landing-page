"use client"
import React, { useState } from 'react';
import { Globe, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';

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
        <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <span className="text-xl font-bold text-gray-900 dark:text-white">Global Hiring</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                href={item.path}
                                className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item.path)
                                        ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                                        : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                                    }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                        <ThemeToggle />
                        <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                            Start Hiring
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                        >
                            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 dark:border-gray-800 py-4">
                        <div className="flex flex-col space-y-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className={`px-3 py-2 text-sm font-medium transition-colors rounded-md ${isActive(item.path)
                                            ? 'text-black dark:text-white bg-gray-100 dark:bg-gray-900'
                                            : 'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-900'
                                        }`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                            <button className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors mt-4">
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