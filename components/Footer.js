import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-slate-50 border-t border-gray-200 mt-12">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-primary tracking-tight">
                            SmartMoney<span className="text-secondary">Moves</span>
                        </span>
                        <p className="mt-4 text-sm text-gray-500">
                            Your trusted guide to financial freedom. We provide expert advice on loans, insurance, investing, and personal finance to help you make smarter money moves.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Categories</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/category/personal-finance" className="text-base text-gray-500 hover:text-gray-900">
                                    Personal Finance
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/loans" className="text-base text-gray-500 hover:text-gray-900">
                                    Loans
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/insurance" className="text-base text-gray-500 hover:text-gray-900">
                                    Insurance
                                </Link>
                            </li>
                            <li>
                                <Link href="/category/investing" className="text-base text-gray-500 hover:text-gray-900">
                                    Investing
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-4">
                            <li>
                                <Link href="/about" className="text-base text-gray-500 hover:text-gray-900">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-base text-gray-500 hover:text-gray-900">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-base text-gray-500 hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-base text-gray-500 hover:text-gray-900">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Disclaimer</h3>
                        <p className="mt-4 text-xs text-gray-500">
                            The content on SmartMoneyMoves is for informational purposes only and does not constitute financial advice. Always consult with a qualified financial advisor before making decisions.
                        </p>
                        <div className="mt-6">
                            <Link href="/signup" className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8">
                    <p className="text-base text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} SmartMoneyMoves. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
