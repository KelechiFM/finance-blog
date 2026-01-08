"use client";
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-background border-b border-border sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="text-2xl font-bold text-primary tracking-tight">
                                SmartMoney<span className="text-secondary">Moves</span>
                            </Link>
                        </div>
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <Link href="/category/personal-finance" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Personal Finance
                            </Link>
                            <Link href="/category/loans" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Loans
                            </Link>
                            <Link href="/category/insurance" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Insurance
                            </Link>
                            <Link href="/category/investing" className="border-transparent text-foreground hover:text-primary hover:border-primary inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                                Investing
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center gap-4">
                        <Link href="/about" className="text-muted-foreground hover:text-foreground px-3 py-2 rounded-md text-sm font-medium">
                            About Us
                        </Link>
                        <ThemeToggle />
                    </div>
                    <div className="-mr-2 flex items-center gap-2 sm:hidden">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link href="/category/personal-finance" className="bg-primary/5 border-l-4 border-primary text-primary block pl-3 pr-4 py-2 text-base font-medium">
                            Personal Finance
                        </Link>
                        <Link href="/category/loans" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Loans
                        </Link>
                        <Link href="/category/insurance" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Insurance
                        </Link>
                        <Link href="/category/investing" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            Investing
                        </Link>
                        <Link href="/about" className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                            About Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
