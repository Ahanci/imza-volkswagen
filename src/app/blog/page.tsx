import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { BlogExplorer } from '@/components/blog/BlogExplorer'
import { getAllBlogPosts, deriveBlogCategories } from '@/lib/sanity/blog-queries'
import { BookOpen } from 'lucide-react'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await getAllBlogPosts()
  const categories = deriveBlogCategories(posts)

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-1 bg-vag-light/30">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-vag-navy to-vag-blue text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={32} />
                <span className="text-sm font-medium uppercase tracking-wider text-white/80">Blog</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">Blog & Rehberler</h1>
              <p className="text-lg text-white/80 max-w-2xl">
                VAG Grubu araçlarınız hakkında bilgilendirici içerikler, bakım rehberleri ve
                teknik makaleler. Uzman ekibimizden doğrudan bilgiler.
              </p>
            </div>
          </div>
        </section>

        {/* Filtre + liste (interaktif) */}
        <BlogExplorer posts={posts} categories={categories} />
      </main>

      {/* Footer */}
      <Footer />
      {/* Floating CTA */}
      <FloatingCTA />
    </div>
  )
}
