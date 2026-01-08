import Link from "next/link";
import { getPostBySlug } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return {
            title: "Post Not Found",
        };
    }

    return {
        title: post.title,
        description: post.excerpt,
    };
}

export default async function BlogPostPage({ params }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    // Schema for FAQ
    const faqSchema = post.faq && post.faq.length > 0 ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": post.faq.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    } : null;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Article Content */}
            <article className="lg:col-span-2">
                {/* Header */}
                <header className="mb-8">
                    <div className="flex items-center text-sm text-gray-500 mb-4 gap-2">
                        <Link href={`/category/${post.category}`} className="font-bold text-primary uppercase tracking-wider hover:underline">{post.category}</Link>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-6">
                        {post.title}
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed border-l-4 border-accent pl-4 italic">
                        {post.excerpt}
                    </p>
                </header>

                {/* Hero Image */}
                {post.image && (
                    <div className="relative w-full h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden mb-8 shadow-md">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

                {/* Author Bio (Top) */}
                <div className="flex items-center gap-4 mb-8 py-4 border-y border-gray-100">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">Written by {post.author}</p>
                        <p className="text-xs text-gray-500">Finance Expert</p>
                    </div>
                </div>

                {/* Ad Placeholder (Top of Content) */}
                {/* Ad Placeholder (Top of Content) - Hidden from users */}
                <div className="hidden" aria-hidden="true" data-ad-slot="in-content-top"></div>

                {/* Content Body */}
                <div className="prose prose-lg prose-slate max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>

                {/* FAQ Section */}
                {post.faq && post.faq.length > 0 && (
                    <section className="bg-slate-50 p-8 rounded-2xl border border-gray-200 mb-12">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            {post.faq.map((item, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-bold text-slate-800 mb-2">{item.question}</h3>
                                    <p className="text-gray-600">{item.answer}</p>
                                </div>
                            ))}
                        </div>
                        {/* JSON-LD Schema */}
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
                        />
                    </section>
                )}

                {/* Ad Placeholder (Bottom of Content) */}
                {/* Ad Placeholder (Bottom of Content) - Hidden from users */}
                <div className="hidden" aria-hidden="true" data-ad-slot="in-content-bottom"></div>

            </article>

            {/* Sidebar (Sticky) */}
            <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
                {/* Ad Placeholder */}
                {/* Sidebar Ad Placeholder - Hidden from users */}
                <div className="hidden" aria-hidden="true" data-ad-slot="sidebar-post"></div>

                {/* Table of Contents (Simulated) */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <h3 className="font-bold text-sm uppercase tracking-wider text-gray-400 mb-4">Table of Contents</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="text-gray-600 hover:text-primary">Introduction</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Key Takeaways</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Step-by-Step Guide</a></li>
                        <li><a href="#" className="text-gray-600 hover:text-primary">Conclusion</a></li>
                    </ul>
                </div>
            </aside>
        </div>
    );
}
