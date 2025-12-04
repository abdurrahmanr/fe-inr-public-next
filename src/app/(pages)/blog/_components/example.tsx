// types/blog.ts
export interface Blog {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    category: string;
    tags: string[];
    publishedAt: string;
    slug: string;
    readTime: number;
    featured?: boolean;
}

export interface BlogCategory {
    id: string;
    name: string;
    slug: string;
    count: number;
    description?: string;
}

export interface BlogQueryParams {
    category?: string;
    page?: string;
    limit?: string;
    featured?: string;
}

// Mock data with more variety
const mockBlogs: Blog[] = [
    {
        id: "1",
        title: "Getting Started with Next.js 14 App Router",
        excerpt:
            "Learn how to build modern web applications with the latest Next.js features and App Router.",
        author: "John Doe",
        category: "web-development",
        tags: ["nextjs", "react", "typescript"],
        publishedAt: "2024-01-15",
        slug: "getting-started-nextjs-14",
        readTime: 5,
        featured: true,
    },
    {
        id: "2",
        title: "Advanced React Patterns and Hooks",
        excerpt:
            "Dive deep into advanced React patterns, custom hooks, and performance optimization techniques.",
        author: "Jane Smith",
        category: "web-development",
        tags: ["react", "patterns", "hooks", "performance"],
        publishedAt: "2024-01-10",
        slug: "advanced-react-patterns",
        readTime: 8,
    },
    {
        id: "3",
        title: "Database Design for Scalable Applications",
        excerpt:
            "Essential principles and best practices for designing databases that scale with your application.",
        author: "Bob Johnson",
        category: "backend",
        tags: ["database", "sql", "architecture", "scaling"],
        publishedAt: "2024-01-05",
        slug: "database-design-principles",
        readTime: 12,
    },
    {
        id: "4",
        title: "Modern CSS Layout Techniques",
        excerpt:
            "Master CSS Grid, Flexbox, and modern layout techniques with practical examples.",
        author: "Alice Brown",
        category: "frontend",
        tags: ["css", "layout", "grid", "flexbox"],
        publishedAt: "2024-01-20",
        slug: "css-layout-guide",
        readTime: 6,
    },
    {
        id: "5",
        title: "DevOps Best Practices for 2024",
        excerpt:
            "Learn the latest DevOps practices, tools, and methodologies for efficient deployment.",
        author: "Mike Wilson",
        category: "devops",
        tags: ["devops", "ci-cd", "docker", "kubernetes"],
        publishedAt: "2024-01-12",
        slug: "devops-best-practices",
        readTime: 10,
        featured: true,
    },
    {
        id: "6",
        title: "UI/UX Design Principles",
        excerpt:
            "Essential design principles and user experience best practices for modern applications.",
        author: "Sarah Davis",
        category: "design",
        tags: ["ui", "ux", "design", "user-experience"],
        publishedAt: "2024-01-18",
        slug: "ui-ux-design-principles",
        readTime: 7,
    },
    {
        id: "7",
        title: "JavaScript Performance Optimization",
        excerpt:
            "Techniques and strategies to optimize JavaScript performance in web applications.",
        author: "Tom Anderson",
        category: "frontend",
        tags: ["javascript", "performance", "optimization"],
        publishedAt: "2024-01-08",
        slug: "javascript-performance",
        readTime: 9,
    },
    {
        id: "8",
        title: "Microservices Architecture Patterns",
        excerpt:
            "Understanding microservices architecture patterns and when to use them.",
        author: "Lisa Garcia",
        category: "backend",
        tags: ["microservices", "architecture", "patterns"],
        publishedAt: "2024-01-14",
        slug: "microservices-patterns",
        readTime: 15,
        featured: true,
    },
];

const blogCategories: BlogCategory[] = [
    { id: "all", name: "All Posts", slug: "all", count: mockBlogs.length },
    {
        id: "web-development",
        name: "Web Development",
        slug: "web-development",
        count: mockBlogs.filter((b) => b.category === "web-development").length,
        description: "Full-stack web development tutorials and guides",
    },
    {
        id: "frontend",
        name: "Frontend",
        slug: "frontend",
        count: mockBlogs.filter((b) => b.category === "frontend").length,
        description: "Frontend technologies, frameworks, and best practices",
    },
    {
        id: "backend",
        name: "Backend",
        slug: "backend",
        count: mockBlogs.filter((b) => b.category === "backend").length,
        description: "Server-side development and architecture",
    },
    {
        id: "devops",
        name: "DevOps",
        slug: "devops",
        count: mockBlogs.filter((b) => b.category === "devops").length,
        description: "DevOps practices, tools, and methodologies",
    },
    {
        id: "design",
        name: "Design",
        slug: "design",
        count: mockBlogs.filter((b) => b.category === "design").length,
        description: "UI/UX design principles and trends",
    },
    {
        id: "featured",
        name: "Featured",
        slug: "featured",
        count: mockBlogs.filter((b) => b.featured).length,
        description: "Editor's picks and featured content",
    },
];

export async function fetchBlogsByCategory(
    params: BlogQueryParams = {},
): Promise<{
    blogs: Blog[];
    total: number;
    page: number;
    totalPages: number;
    category: BlogCategory | null;
}> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 200));

    const { category = "all", page = "1", limit = "6", featured } = params;
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    let filteredBlogs = [...mockBlogs];

    // Filter by category
    if (category !== "all") {
        if (category === "featured") {
            filteredBlogs = filteredBlogs.filter((blog) => blog.featured);
        } else {
            filteredBlogs = filteredBlogs.filter(
                (blog) => blog.category === category,
            );
        }
    }

    // Filter by featured if specified
    if (featured === "true") {
        filteredBlogs = filteredBlogs.filter((blog) => blog.featured);
    }

    // Sort by date (newest first)
    filteredBlogs.sort(
        (a, b) =>
            new Date(b.publishedAt).getTime() -
            new Date(a.publishedAt).getTime(),
    );

    const total = filteredBlogs.length;
    const totalPages = Math.ceil(total / limitNum);
    const startIndex = (pageNum - 1) * limitNum;
    const paginatedBlogs = filteredBlogs.slice(
        startIndex,
        startIndex + limitNum,
    );

    const selectedCategory =
        blogCategories.find((c) => c.slug === category) || null;

    return {
        blogs: paginatedBlogs,
        total,
        page: pageNum,
        totalPages,
        category: selectedCategory,
    };
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 50));
    return blogCategories;
}

// app/blog/page.tsx (Server Component)
import { Suspense } from "react";

interface BlogPageProps {
    searchParams: {
        category?: string;
        page?: string;
        featured?: string;
    };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
    const categories = await getBlogCategories();
    const currentCategory = searchParams.category || "all";

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Our Blog
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Discover insights, tutorials, and best practices from
                        our team of experts
                    </p>
                </div>

                {/* Category Filter */}
                <div className="mb-8">
                    <CategoryFilter
                        categories={categories}
                        currentCategory={currentCategory}
                    />
                </div>

                {/* Blog Content */}
                <Suspense fallback={<BlogGridSkeleton />}>
                    <BlogContent searchParams={searchParams} />
                </Suspense>
            </div>
        </div>
    );
}

// Separate component to enable proper suspense
async function BlogContent({ searchParams }: { searchParams: any }) {
    const result = await fetchBlogsByCategory(searchParams);

    return (
        <div>
            {/* Category Info */}
            {result.category && result.category.slug !== "all" && (
                <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        {result.category.name}
                    </h2>
                    {result.category.description && (
                        <p className="text-gray-600">
                            {result.category.description}
                        </p>
                    )}
                    <div className="mt-2 text-sm text-gray-500">
                        {result.total} {result.total === 1 ? "post" : "posts"}{" "}
                        in this category
                    </div>
                </div>
            )}

            {/* Blog Grid */}
            <BlogGrid blogs={result.blogs} />

            {/* Pagination */}
            {result.totalPages > 1 && (
                <div className="mt-12">
                    <Pagination
                        currentPage={result.page}
                        totalPages={result.totalPages}
                        category={searchParams.category}
                    />
                </div>
            )}
        </div>
    );
}

// components/CategoryFilter.tsx (Client Component)
("use client");

interface CategoryFilterProps {
    categories: BlogCategory[];
    currentCategory: string;
}

export function CategoryFilter({
    categories,
    currentCategory,
}: CategoryFilterProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const handleCategoryChange = (categorySlug: string) => {
        const params = new URLSearchParams(searchParams);

        if (categorySlug === "all") {
            params.delete("category");
        } else {
            params.set("category", categorySlug);
        }

        // Reset to first page when changing category
        params.delete("page");

        startTransition(() => {
            router.push(`/blog?${params.toString()}`);
        });
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                    Categories
                </h3>
                {isPending && (
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                        Loading...
                    </div>
                )}
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                    const isActive = currentCategory === category.slug;

                    return (
                        <button
                            key={category.id}
                            onClick={() => handleCategoryChange(category.slug)}
                            disabled={isPending}
                            className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                ${
                    isActive
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }
              `}
                        >
                            {category.name}
                            <span className="ml-2 text-xs opacity-75">
                                ({category.count})
                            </span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

// components/BlogGrid.tsx (Server Component)

interface BlogGridProps {
    blogs: Blog[];
}

export function BlogGrid({ blogs }: BlogGridProps) {
    if (blogs.length === 0) {
        return (
            <div className="text-center py-16">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    No posts found
                </h3>
                <p className="text-gray-600">
                    There are no posts in this category yet. Check back soon!
                </p>
            </div>
        );
    }

    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
            ))}
        </div>
    );
}

// components/BlogCard.tsx (Server Component)
import Link from "next/link";

interface BlogCardProps {
    blog: Blog;
}

export function BlogCard({ blog }: BlogCardProps) {
    return (
        <article className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
            <div className="p-6">
                {/* Header with category and featured badge */}
                <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                        {blog.category
                            .replace("-", " ")
                            .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </span>
                    {blog.featured && (
                        <div className="flex items-center gap-1 text-yellow-600">
                            {/* <Star className="w-4 h-4 fill-current" /> */}
                            <span className="text-xs font-medium">
                                Featured
                            </span>
                        </div>
                    )}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 3).map((tag) => (
                        <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded"
                        >
                            #{tag}
                        </span>
                    ))}
                    {blog.tags.length > 3 && (
                        <span className="text-xs text-gray-400">
                            +{blog.tags.length - 3} more
                        </span>
                    )}
                </div>

                {/* Meta info */}
                <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            {/* <User className="w-4 h-4" /> */}
                            <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                            {/* <Calendar className="w-4 h-4" /> */}
                            <span>
                                {new Date(
                                    blog.publishedAt,
                                ).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center gap-1">
                        {/* <Clock className="w-4 h-4" /> */}
                        <span>{blog.readTime} min</span>
                    </div>
                </div>
            </div>
        </article>
    );
}

// components/Pagination.tsx (Client Component)
("use client");

import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    category?: string;
}

export function Pagination({
    currentPage,
    totalPages,
    category,
}: PaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const navigateToPage = (page: number) => {
        const params = new URLSearchParams(searchParams);

        if (page === 1) {
            params.delete("page");
        } else {
            params.set("page", page.toString());
        }

        startTransition(() => {
            router.push(`/blog?${params.toString()}`);
        });
    };

    const getVisiblePages = () => {
        const pages = [];
        const start = Math.max(1, currentPage - 2);
        const end = Math.min(totalPages, currentPage + 2);

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        return pages;
    };

    if (totalPages <= 1) return null;

    return (
        <div className="flex items-center justify-center gap-2">
            {/* Previous button */}
            <button
                onClick={() => navigateToPage(currentPage - 1)}
                disabled={currentPage === 1 || isPending}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {/* <ChevronLeft className="w-4 h-4" /> */}
                Previous
            </button>

            {/* Page numbers */}
            <div className="flex gap-1">
                {getVisiblePages().map((page) => (
                    <button
                        key={page}
                        onClick={() => navigateToPage(page)}
                        disabled={isPending}
                        className={`
              px-4 py-2 text-sm font-medium rounded-lg transition-colors
              disabled:cursor-not-allowed
              ${
                  page === currentPage
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 bg-white border border-gray-300 hover:bg-gray-50"
              }
            `}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Next button */}
            <button
                onClick={() => navigateToPage(currentPage + 1)}
                disabled={currentPage === totalPages || isPending}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                Next
                {/* <ChevronRight className="w-4 h-4" /> */}
            </button>
        </div>
    );
}

// components/BlogGridSkeleton.tsx
export function BlogGridSkeleton() {
    return (
        <div>
            {/* Category info skeleton */}
            <div className="mb-8 p-6 bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="h-6 w-48 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="h-4 w-96 bg-gray-200 animate-pulse rounded mb-2"></div>
                <div className="h-3 w-32 bg-gray-200 animate-pulse rounded"></div>
            </div>

            {/* Grid skeleton */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }, (_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                    >
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-4">
                                <div className="h-5 w-24 bg-gray-200 animate-pulse rounded-full"></div>
                                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                            <div className="h-6 w-3/4 bg-gray-200 animate-pulse rounded mb-3"></div>
                            <div className="space-y-2 mb-4">
                                <div className="h-4 w-full bg-gray-200 animate-pulse rounded"></div>
                                <div className="h-4 w-5/6 bg-gray-200 animate-pulse rounded"></div>
                                <div className="h-4 w-2/3 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                            <div className="flex gap-2 mb-4">
                                <div className="h-5 w-12 bg-gray-200 animate-pulse rounded"></div>
                                <div className="h-5 w-16 bg-gray-200 animate-pulse rounded"></div>
                                <div className="h-5 w-14 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                <div className="flex gap-4">
                                    <div className="h-4 w-20 bg-gray-200 animate-pulse rounded"></div>
                                    <div className="h-4 w-24 bg-gray-200 animate-pulse rounded"></div>
                                </div>
                                <div className="h-4 w-16 bg-gray-200 animate-pulse rounded"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
