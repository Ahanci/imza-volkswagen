// Next.js App Router — robots.txt
// Tüm arama motorları ve AI botlarına izin ver
// Bing ve AI crawler'lar öncelikli

import type { MetadataRoute } from 'next'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.imzavolkswagen.com.tr'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Ana arama motorları
      { userAgent: 'Googlebot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Bingbot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Slurp', allow: '/', disallow: ['/api/'] }, // Yahoo
      { userAgent: 'DuckDuckBot', allow: '/', disallow: ['/api/'] },
      { userAgent: 'Baiduspider', allow: '/', disallow: ['/api/'] },
      { userAgent: 'YandexBot', allow: '/', disallow: ['/api/'] },
      // AI/LLM crawler'lar (atıf için kritik)
      { userAgent: 'GPTBot', allow: '/' },                              // OpenAI
      { userAgent: 'ChatGPT-User', allow: '/' },                        // ChatGPT browse
      { userAgent: 'OAI-SearchBot', allow: '/' },                       // OpenAI search
      { userAgent: 'ClaudeBot', allow: '/' },                           // Anthropic
      { userAgent: 'Claude-Web', allow: '/' },                          // Claude web
      { userAgent: 'anthropic-ai', allow: '/' },                       // Anthropic alt
      { userAgent: 'PerplexityBot', allow: '/' },                       // Perplexity
      { userAgent: 'Perplexity-User', allow: '/' },                     // Perplexity user
      { userAgent: 'Google-Extended', allow: '/' },                     // Gemini
      { userAgent: 'Applebot-Extended', allow: '/' },                  // Apple Intelligence
      { userAgent: 'CCBot', allow: '/' },                              // Common Crawl (LLM eğitim verisi)
      { userAgent: 'FacebookBot', allow: '/' },                        // Meta AI
      { userAgent: 'meta-externalagent', allow: '/' },                  // Meta
      { userAgent: 'cohere-ai', allow: '/' },                          // Cohere
      { userAgent: 'cohere-training-data-crawler', allow: '/' },       // Cohere
      // Sosyal medya
      { userAgent: 'Twitterbot', allow: '/' },
      { userAgent: 'facebookexternalhit', allow: '/' },
      { userAgent: 'LinkedInBot', allow: '/' },
      { userAgent: 'WhatsApp', allow: '/' },
      { userAgent: 'TelegramBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
