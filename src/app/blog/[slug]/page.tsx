import React from 'react'
import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { getBlogPostBySlug } from '@/lib/blog-data'
import { FloatingCTA } from '@/components/home/FloatingCTA'

// Server Component — async params (Next.js 15+)
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold mb-4">Yazı Bulunamadı</h1>
            <Link href="/blog" className="text-blue-600 underline">Bloga dön</Link>
          </div>
        </main>
        <Footer />
        <FloatingCTA />
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-12">
        <p className="text-sm text-gray-500">Kategori: {post.category}</p>
        <h1 className="text-4xl font-bold mt-2 mb-4">{post.title}</h1>
        <p className="text-lg text-gray-600 mb-6">{post.excerpt}</p>
        <div className="prose max-w-none">
          <pre className="whitespace-pre-wrap text-sm bg-gray-50 p-4 rounded">
            {post.content}
          </pre>
        </div>
        <div className="mt-8 flex gap-2 flex-wrap">
          {post.tags.map((t) => (
            <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">#{t}</span>
          ))}
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
