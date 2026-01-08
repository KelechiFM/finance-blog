import Link from "next/link";
import { getCategoryBySlug, getPostsByCategory } from "@/lib/data";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
    const { slug } = await params
    const category = getCategoryBySlug(slug);

    if (!category) {
        return {
            title: "Category Not Found",
        };
    }

    return {
        title: `${category.name} Advice - SmartMoneyMoves`,
        description: category.description,
    };
}

export default async function CategoryPage({ params }) {
    const { slug } = await params
    const category = getCategoryBySlug(slug);
    const posts = getPostsByCategory(slug);

    if (!category) {
        notFound();
    }

    return (
        <div className="space-y-12">
            {/* Category Header */}
            <header className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200 -mx-4 sm:-mx-6 lg:-mx-8 mb-8 text-center sm:text-left">
                <div className="max-w-7xl mx-auto">
                    <span className="text-primary font-bold uppercase tracking-wider text-sm">Category</span>
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mt-2 mb-4">{category.title}</h1>
                    <p className="text-xl text-gray-600 max-w-2xl">{category.description}</p>
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Content: Post List */}
                <div className="lg:col-span-2 space-y-8">
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <ArticleCard key={post.slug} post={post} />
                        ))
                    ) : (
                        <p className="text-gray-500">No posts found in this category yet.</p>
                    )}
                </div>

                {/* Sidebar */}
                <aside className="space-y-8">
                    {/* Ad Placeholder */}
                    {/* Ad Placeholder - Hidden from users */}
                    <div className="hidden" aria-hidden="true" data-ad-slot="sidebar-category"></div>

                    <div className="bg-slate-50 p-6 rounded-xl border border-gray-200">
                        <h3 className="font-bold text-lg mb-4">Popular Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            <Link href="/category/investing" className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">Investing</Link>
                            <Link href="/category/stock-market" className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">Stocks</Link>
                            <Link href="/category/crypto" className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">Crypto</Link>
                            <Link href="/category/budgeting" className="bg-white border border-gray-200 px-3 py-1 rounded-full text-sm text-gray-700 hover:border-primary hover:text-primary transition-colors">Budgeting</Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
}

function ArticleCard({ post }) {
    return (
        <article className="flex flex-col md:flex-row gap-6 items-start bg-white p-6 rounded-xl border border-gray-100 hover:shadow-md transition-shadow">
            {post.image ? (
                <div className="w-full md:w-48 h-32 rounded-lg flex-shrink-0 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                </div>
            ) : (
                <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
            )}
            <div>
                <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
                    <span className="font-semibold text-primary uppercase tracking-wider">{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                    <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary transition-colors leading-tight">
                        {post.title}
                    </h2>
                </Link>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                    {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-accent font-semibold text-sm hover:underline">
                    Read Article &rarr;
                </Link>
            </div>
        </article>
    )
}
