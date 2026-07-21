import { getBlogPostBySlug } from '@/lib/blog-data'

// Vercel default Edge runtime, blog-data.ts 150KB → "module too large" hatası.
// Node runtime zorla.
export const runtime = 'nodejs'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  return <div style={{padding:40,fontFamily:'sans-serif'}}><h1>BLOG TEST</h1><p>slug: {slug}</p><p>post: {post ? post.title : 'NULL'}</p></div>
}
