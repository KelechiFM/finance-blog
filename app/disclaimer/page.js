export const metadata = {
    title: "Disclaimer - SmartMoneyMoves",
    description: "Financial disclaimer for SmartMoneyMoves.",
};

export default function DisclaimerPage() {
    return (
        <div className="max-w-3xl mx-auto prose prose-slate">
            <h1 className="text-3xl font-bold text-slate-900 mb-6">Financial Disclaimer</h1>
            <p className="text-gray-500 mb-8">Last Updated: October 2025</p>

            <h3>Not Financial Advice</h3>
            <p>
                The information provided on <strong>SmartMoneyMoves</strong> is for educational and informational purposes only. It is not intended as financial, investment, legal, or tax advice. You should consult with a qualified professional before making any financial decisions.
            </p>

            <h3>Investment Risks</h3>
            <p>
                Investing in stocks, cryptocurrencies, and other financial instruments involves a significant level of risk and may not be suitable for all investors. You should carefully consider your investment objectives, level of experience, and risk appetite. Past performance is not indicative of future results.
            </p>

            <h3>Affiliate Disclosure</h3>
            <p>
                Some of the links on this website are affiliate links. This means that if you click on the link and purchase an item or sign up for a service, we may receive an affiliate commission at no extra cost to you.
            </p>
            <p>
                We only recommend products and services that we trust and believe will add value to our readers. Our editorial content is not influenced by advertisers or affiliate partnerships.
            </p>

            <h3>Accuracy of Information</h3>
            <p>
                While we strive to keep our content accurate and up-to-date, financial information changes rapidly. We cannot guarantee the accuracy, completeness, or timeliness of the information contained on this website.
            </p>
        </div>
    );
}
