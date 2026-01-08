import Link from "next/link";
import { getSortedPostsData } from "@/lib/data";

export default function Home() {
  const allPosts = getSortedPostsData();
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white rounded-2xl overflow-hidden p-8 md:p-16 text-center md:text-left">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Master Your Money, <span className="text-accent">Secure Your Future.</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            Expert advice on personal finance, loans, insurance, and investing to help you build wealth and financial freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link href="/category/personal-finance" className="bg-accent hover:bg-yellow-500 text-slate-900 font-bold py-3 px-6 rounded-lg transition-colors">
              Start Budgeting
            </Link>
            <Link href="/category/investing" className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-lg backdrop-blur-sm transition-colors">
              Start Investing
            </Link>
          </div>
        </div>
        {/* Abstract decoration - purely CSS/Tailwind */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>
      </section>

      {/* Featured Categories (Pillars) */}
      <section>
        <h2 className="text-3xl font-bold text-slate-900 mb-8 border-l-4 border-primary pl-4">Explore Our Pillars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard
            title="Personal Finance"
            desc="Budgeting, saving, and credit score mastery."
            link="/category/personal-finance"
            icon="💰"
            color="bg-blue-50 text-blue-700"
          />
          <CategoryCard
            title="Loans & Credit"
            desc="Navigating mortgages, student loans, and more."
            link="/category/loans"
            icon="🏦"
            color="bg-green-50 text-green-700"
          />
          <CategoryCard
            title="Insurance"
            desc="Protecting your family, health, and assets."
            link="/category/insurance"
            icon="🛡️"
            color="bg-purple-50 text-purple-700"
          />
          <CategoryCard
            title="Investing"
            desc="Stocks, crypto, and real estate strategies."
            link="/category/investing"
            icon="📈"
            color="bg-yellow-50 text-yellow-700"
          />
        </div>
      </section>

      {/* Latest or Featured Articles (Placeholder) */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Latest Insights</h2>

          {allPosts.slice(0, 6).map((post) => (
            <ArticleCard
              key={post.slug}
              category={post.category || "General"}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readTime={post.readTime}
              slug={post.slug}
              image={post.image}
            />
          ))}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* About Widget */}
          <div className="bg-slate-50 p-6 rounded-xl border border-gray-200">
            <h3 className="font-bold text-lg mb-2">About SmartMoneyMoves</h3>
            <p className="text-gray-600 text-sm mb-4">
              We are a team of financial experts dedicated to simplifying complex money topics.
            </p>
            <Link href="/about" className="text-primary font-medium text-sm hover:underline">Read Our Story &rarr;</Link>
          </div>

          {/* Ad Placeholder */}
          {/* Sidebar Ad Placeholder (Hidden for users) */}
          <div className="hidden" aria-hidden="true" data-ad-slot="sidebar-home"></div>   {/* Newsletter */}
          <div className="bg-primary p-6 rounded-xl text-white">
            <h3 className="font-bold text-lg mb-2">Join Our Newsletter</h3>
            <p className="text-blue-200 text-sm mb-4">Get the latest money tips delivered to your inbox.</p>
            <input type="email" placeholder="Your email address" className="w-full p-2 rounded text-slate-900 text-sm mb-2" />
            <button className="w-full bg-accent hover:bg-yellow-500 text-slate-900 font-bold py-2 rounded text-sm transition-colors">Subscribe</button>
          </div>
        </aside>
      </section>
    </div>
  );
}

// Simple internal components for repetitive UI
function CategoryCard({ title, desc, link, icon, color }) {
  return (
    <Link href={link} className="group block p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow bg-white">
      <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-4 ${color}`}>
        {icon}
      </div>
      <h3 className="font-bold text-xl text-slate-900 mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-gray-600 text-sm">{desc}</p>
    </Link>
  )
}

function ArticleCard({ category, title, excerpt, date, readTime, slug, image }) {
  return (
    <article className="flex flex-col md:flex-row gap-6 items-start">
      {/* Image Placeholder */}
      {image ? (
        <div className="w-full md:w-48 h-32 rounded-lg flex-shrink-0 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      ) : (
        <div className="w-full md:w-48 h-32 bg-gray-200 rounded-lg flex-shrink-0"></div>
      )}
      <div>
        <div className="flex items-center text-xs text-gray-500 mb-2 gap-2">
          <span className="font-semibold text-primary uppercase tracking-wider">{category}</span>
          <span>•</span>
          <span>{date}</span>
        </div>
        <Link href={`/blog/${slug}`}>
          <h3 className="text-xl font-bold text-slate-900 mb-2 hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          {excerpt}
        </p>
        <div className="text-xs text-gray-400 font-medium">
          {readTime}
        </div>
      </div>
    </article>
  )
}
