import { getBlogPostBySlug } from '@/lib/blog-data'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPostBySlug(slug)
  return <div style={{padding:40,fontFamily:'sans-serif'}}><h1>BLOG TEST</h1><p>slug: {slug}</p><p>post: {post ? post.title : 'NULL'}</p></div>
}
