export const metadata = {
    title: "Contact Us - SmartMoneyMoves",
    description: "Get in touch with the SmartMoneyMoves team.",
};

export default function ContactPage() {
    return (
        <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold text-slate-900 mb-8 text-center">Contact Us</h1>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Your Name" />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="your@email.com" />
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                        <select id="subject" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all">
                            <option>General Inquiry</option>
                            <option>Advertising / Partnership</option>
                            <option>Report an Issue</option>
                            <option>Editorial Feedback</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea id="message" rows="5" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="How can we help?"></textarea>
                    </div>

                    <button type="submit" className="w-full bg-primary hover:bg-blue-800 text-white font-bold py-3 rounded-lg transition-colors">
                        Send Message
                    </button>
                </form>
            </div>

            <div className="mt-12 text-center text-gray-600">
                <p className="font-semibold">SmartMoneyMoves Inc.</p>
                <p>123 Finance Way, Suite 400</p>
                <p>New York, NY 10001</p>
                <p className="mt-2 text-primary">contact@smartmoneymoves.com</p>
            </div>
        </div>
    );
}
