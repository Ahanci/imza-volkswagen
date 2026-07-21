import Link from 'next/link'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/home/FloatingCTA'
import { Button } from '@/components/ui/button'
import { BookOpen, Home, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex items-center justify-center bg-vag-light/30 py-20">
        <div className="text-center max-w-lg mx-auto px-4">
          <div className="text-8xl font-bold text-vag-blue mb-4">404</div>
          <BookOpen size={64} className="mx-auto text-vag-blue/40 mb-6" />
          <h1 className="text-3xl font-bold text-vag-navy mb-3">
            Aradığınız Sayfa Bulunamadı
          </h1>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Aradığınız blog yazısı, marka veya ürün sayfası mevcut olmayabilir veya
            taşınmış olabilir. Aşağıdaki bağlantılardan devam edebilirsiniz.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/">
              <Button className="bg-vag-blue hover:bg-blue-700 gap-2">
                <Home size={18} />
                Ana Sayfa
              </Button>
            </Link>
            <Link href="/blog">
              <Button variant="outline" className="gap-2">
                <Search size={18} />
                Blogda Ara
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  )
}
