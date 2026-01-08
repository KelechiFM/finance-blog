import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// Explicitly defined categories for robust routing
export const categories = [
    {
        slug: "personal-finance",
        name: "Personal Finance",
        title: "Master Your Wallet: Budgeting, Saving & Credit",
        description: "Learn how to budget effectively, save more money, and improve your credit score.",
    },
    {
        slug: "loans",
        name: "Loans & Credit",
        title: "Smart Borrowing: Mortgages, Auto & Student Loans",
        description: "Expert advice on finding the best loan rates and managing debt responsibly.",
    },
    {
        slug: "insurance",
        name: "Insurance",
        title: "Protect Your Future: Health, Life & Auto Insurance",
        description: "Understand your policy options and save money on premiums.",
    },
    {
        slug: "investing",
        name: "Investing",
        title: "Grow Your Wealth: Stocks, Real Estate & Crypto",
        description: "Strategies for long-term growth, from ETFs to real estate.",
    },
];

export function getCategoryBySlug(slug) {
    return categories.find((cat) => cat.slug === slug);
}

// Get all sorted posts data
export function getSortedPostsData() {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const slug = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Calculate read time (approx 200 words per minute)
        const wordCount = matterResult.content.split(/\s+/g).length;
        const readTime = `${Math.ceil(wordCount / 200)} min read`;

        // Combine the data with the id
        return {
            slug,
            readTime,
            ...matterResult.data,
        };
    });

    // Sort posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

// Get posts filtered by category
export function getPostsByCategory(categorySlug) {
    const allPosts = getSortedPostsData();
    return allPosts.filter(post => post.category === categorySlug);
}

// Get a single post by slug with HTML content
export async function getPostBySlug(slug) {
    try {
        const fullPath = path.join(postsDirectory, `${slug}.md`);

        if (!fs.existsSync(fullPath)) {
            return null;
        }

        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Use remark to convert markdown into HTML string
        const processedContent = await remark()
            .use(html)
            .process(matterResult.content);
        const contentHtml = processedContent.toString();

        // Combine the data with the id and contentHtml
        return {
            slug,
            content: contentHtml,
            ...matterResult.data,
        };
    } catch (err) {
        console.error("Error reading post:", err);
        return null;
    }

}
