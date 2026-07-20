'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Sparkles
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'bot'
  content: string
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: '1',
    role: 'bot',
    content: 'Merhaba! 👋 Ben VAG Parça asistanınız. Size nasıl yardımcı olabilirim?\n\n• Ürün sorgulama\n• OEM kodu ile arama\n• Uyumluluk kontrolü\n• Teknik destek',
    timestamp: new Date()
  }
]

const quickActions = [
  { label: '🔍 Ürün Ara', action: 'Volkswagen Golf 7 fren balatası fiyatı nedir?' },
  { label: '📦 Stok Sorgula', action: 'Audi A3 amortisör stokta var mı?' },
  { label: '🔧 Teknik Destek', action: 'Hangi yağ filtresi Golf 7 için uygun?' },
  { label: '💰 Fiyat Bilgisi', action: 'Seat Leon debriyaj seti ne kadar?' }
]

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && !isMinimized) {
      inputRef.current?.focus()
    }
  }, [isOpen, isMinimized])

  const handleSendMessage = async (text?: string) => {
    const messageText = text || inputValue.trim()
    if (!messageText) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: messageText,
      timestamp: new Date()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsTyping(true)

    // Simulate bot response (will be replaced with AI SDK)
    setTimeout(() => {
      let botResponse = ''
      
      const lowerText = messageText.toLowerCase()
      
      if (lowerText.includes('fren') && lowerText.includes('balata')) {
        botResponse = 'VW Golf 7 için fren balatalarımız mevcut! 🛒\n\n**Öne Çıkan Ürünler:**\n• ATE Premium - ₺489 (Orijinal Kalite)\n• Bosch - ₺425 (Güvenilir)\n• TRW - ₺398 (Ekonomik)\n\nTüm ürünler orijinal ekipman spesifikasyonuna uygundur. Detaylı bilgi almak ister misiniz?'
      } else if (lowerText.includes('amortisör') || lowerText.includes('amortisor')) {
        botResponse = 'Amortisör çeşitlerimiz:\n\n✅ **Ön Amortisör Seti**\n   • VW Golf 7 / Audi A3 / Seat Leon\n   • Sachs Orijinal - ₺1.250/Adet\n   • Bilstein B4 - ₺1.580/Adet\n\n✅ **Arka Amortisör Seti**\n   • Kayaba - ₺980/Adet\n   • Monroe - ₺890/Adet\n\nAraç modelinizi paylaşırssanız tam uyumlu ürünleri listeleyebilirim.'
      } else if (lowerText.includes('yağ') && lowerText.includes('filtre')) {
        botResponse = 'Motor yağı filtreleri:\n\n🚗 **Volkswagen Golf 7:**\n   • Mann-Filter HU 719/7 x - ₺145\n   • M Filter OC 217/2 - ₺128\n\n🚗 **Audi A3:**\n   • Mahle OX 401D/E - ₺165\n   • Bosch P7016 - ₺152\n\nTüm filtreler VAG onaylıdır. Hangi araç modeli için bakıyorsunuz?'
      } else if (lowerText.includes('fiyat') || lowerText.includes('ne kadar') || lowerText.includes('kaç para')) {
        botResponse = 'Fiyatlarımız hakkında bilgi vermemi istediğiniz ürünü belirtebilir misiniz? 📋\n\nÖrnek sorular:\n• "Golf 7 fren balatası fiyatı"\n• "Audi A3 far ampulü"\n• "Seat Leon yağ filtresi"\n\nYa da kategoriye göre de arayabilirsiniz!'
      } else if (lowerText.includes('stok') || lowerText.includes('var mı')) {
        botResponse = 'Stok durumunu kontrol ediyorum... 🔍\n\nGenel olarak en çok satan ürünlerimiz sürekli stoğumuzda bulunmaktadır. Özel bir ürün kodu veya adı ile sorgulama yaparsanız anlık stok bilgisini verebilirim.\n\n☎️ Acil ihtiyaçlarınız için: **0850 123 45 67**'
      } else {
        botResponse = 'Sorunuzu anladım. Size en iyi şekilde yardımcı olmak istiyorum! 🤖\n\nSize şu konularda yardımcı olabilirim:\n\n• 🔍 **Ürün Arama** - OEM kodu veya parça adıyla\n• 📋 **Uyumluluk Kontrolü** - Araç modelinize göre\n• 💰 **Fiyat Bilgisi** - Güncel fiyatlar\n• 📦 **Stok Durumu** - Anlık stok bilgisi\n• 🔧 **Teknik Destek** - Uzman tavsiyesi\n\nLütfen daha spesifik bir soru sorun, size hemen yardımcı olayım!'
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'bot',
        content: botResponse,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-gradient-to-r from-vag-navy to-vag-blue hover:from-vag-blue hover:to-vag-blue shadow-2xl p-0 group"
          size="icon"
        >
          <MessageCircle size={28} className="text-white group-hover:scale-110 transition-transform" />
          
          {/* Pulse Animation */}
          <span className="absolute inset-0 rounded-full bg-vag-blue animate-ping opacity-30" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-vag-red text-white text-xs rounded-full flex items-center justify-center">
            1
          </span>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div 
          className={`fixed bottom-6 right-6 z-50 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 ${
            isMinimized ? 'w-80 h-14' : 'w-96 sm:w-[420px] h-[600px]'
          }`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-vag-navy to-vag-blue p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Bot size={22} className="text-white" />
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-400 rounded-full border-2 border-vag-navy" />
              </div>
              <div>
                <h3 className="font-semibold text-white text-sm">VAG Parça Asistanı</h3>
                <p className="text-xs text-white/70 flex items-center gap-1">
                  <Sparkles size={10} />
                  Çevrimiçi
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <Minimize2 size={18} className="text-white" />
              </button>
              <button
                onClick={() => {
                  setIsOpen(false)
                  setIsMinimized(false)
                }}
                className="w-8 h-8 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
              >
                <X size={18} className="text-white" />
              </button>
            </div>
          </div>

          {/* Content */}
          {!isMinimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.role === 'user' ? 'justify-end' : ''}`}
                  >
                    {message.role === 'bot' && (
                      <div className="w-8 h-8 bg-gradient-to-br from-vag-navy to-vag-blue rounded-lg flex items-center justify-center flex-shrink-0">
                        <Bot size={16} className="text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        message.role === 'user'
                          ? 'bg-vag-blue text-white rounded-br-md'
                          : 'bg-gray-100 text-gray-800 rounded-bl-md'
                      }`}
                    >
                      <p className="whitespace-pre-line">{message.content}</p>
                      <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-white/60' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>

                    {message.role === 'user' && (
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                        <User size={16} className="text-gray-600" />
                      </div>
                    )}
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex gap-2">
                    <div className="w-8 h-8 bg-gradient-to-br from-vag-navy to-vag-blue rounded-lg flex items-center justify-center flex-shrink-0">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                      </div>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />

                {/* Quick Actions */}
                {messages.length <= 1 && (
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-muted-foreground mb-3">Hızlı Eylemler:</p>
                    <div className="flex flex-wrap gap-2">
                      {quickActions.map((action, index) => (
                        <button
                          key={index}
                          onClick={() => handleSendMessage(action.action)}
                          className="text-xs px-3 py-2 bg-vag-light hover:bg-vag-blue hover:text-white rounded-full transition-colors border border-transparent"
                        >
                          {action.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Quick Replies */}
              <div className="px-4 py-2 bg-gray-50 border-t border-gray-100 overflow-x-auto">
                <div className="flex gap-2">
                  {['OEM Kodu', 'Araç Modeli', 'Parça Adı'].map((item) => (
                    <button
                      key={item}
                      onClick={() => setInputValue(`${item}: `)}
                      className="text-xs px-3 py-1.5 bg-white border border-gray-200 rounded-full whitespace-nowrap hover:border-vag-blue hover:text-vag-blue transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex gap-2">
                  <Input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyPress}
                    placeholder="Mesajınızı yazın..."
                    className="flex-1 h-11 border-gray-200 focus:border-vag-blue"
                  />
                  <Button
                    onClick={() => handleSendMessage()}
                    disabled={!inputValue.trim() || isTyping}
                    className="bg-vag-red hover:bg-red-700 text-white px-4 h-11"
                  >
                    <Send size={18} />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Asistanımız yapay zeka desteklidir. Hassas bilgiler için uzman ekibimize başvurun.
                </p>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default ChatBot
