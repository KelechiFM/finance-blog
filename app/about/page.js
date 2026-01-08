import Image from "next/image";

export const metadata = {
    title: "About Us - SmartMoneyMoves",
    description: "Meet the team of financial experts behind SmartMoneyMoves.",
};

export default function AboutPage() {
    return (
        <div className="max-w-4xl mx-auto space-y-12">
            <section className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-slate-900">About SmartMoneyMoves</h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Our mission is to simplify complex financial topics and help you make smarter money decisions.
                </p>
            </section>

            <section className="prose prose-lg mx-auto text-gray-600">
                <p>
                    Founded in 2025, <strong>SmartMoneyMoves</strong> was created with a simple goal: to provide clear, unbiased, and actionable financial advice to everyone. Whether you are looking to get out of debt, buy your first home, or start investing for retirement, we have the resources you need.
                </p>
                <p>
                    We believe that financial literacy is the key to freedom. Our team of writers and financial analysts work tirelessly to break down the jargon and give you the facts you need to succeed.
                </p>
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Meet Our Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TeamMember
                        name="Sarah Jenkins"
                        role="Senior Financial Analyst"
                        bio="Sarah has over 15 years of experience in wealth management and holds a CFA designation. She specializes in retirement planning and investment strategies."
                    />
                    <TeamMember
                        name="Michael Ross"
                        role="Loan & Credit Expert"
                        bio="Former mortgage broker turned financial educator, Michael helps readers navigate the complex world of personal loans and credit scores."
                    />
                </div>
            </section>

            <section className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center">
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Editorial Guidelines</h2>
                <p className="text-gray-600 mb-6">
                    We adhere to strict editorial standards. Our content is fact-checked and reviewed by financial professionals to ensure accuracy. We may receive compensation from some partners, but this never influences our recommendations.
                </p>
            </section>
        </div>
    );
}

function TeamMember({ name, role, bio }) {
    return (
        <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex-shrink-0"></div>
            <div className="text-center sm:text-left">
                <h3 className="text-xl font-bold text-slate-900">{name}</h3>
                <p className="text-primary font-medium text-sm mb-2">{role}</p>
                <p className="text-gray-600 text-sm">{bio}</p>
            </div>
        </div>
    )
}
