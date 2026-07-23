/**
 * How It Works / Kullanım Rehberi — Ana sayfa için 5 adımlı bölüm.
 * Müşteri parça nasıl alır, adım adım görsel.
 */
import Link from "next/link";
import { Search, MessageCircle, FileText, CreditCard, Truck, ShieldCheck, ArrowRight } from "lucide-react";

const STEPS = [
  {
    icon: Search,
    num: "01",
    title: "Marka & Model Seçin",
    desc: "6 VAG markasından aracınızı seçin. Modelleri inceleyin, periyodik bakım paketlerini görün.",
    color: "from-vag-navy to-vag-blue",
  },
  {
    icon: FileText,
    num: "02",
    title: "Parça İnceleyin",
    desc: "Her üründe OEM numarası, uyumlu modeller, teknik özellikler ve garanti bilgisi var. Fiyat teklifi için WhatsApp'a tıklayın.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: MessageCircle,
    num: "03",
    title: "WhatsApp'tan Yazın",
    desc: "WhatsApp +90 543 979 20 13'e parça kodu veya aracınızın şase numarasını (VIN) gönderin. Aynı gün dönüş yapıyoruz.",
    color: "from-green-500 to-emerald-600",
  },
  {
    icon: CreditCard,
    num: "04",
    title: "Ödeme Yapın",
    desc: "Nakit, banka havalesi/EFT veya kredi kartı. Kurumsal müşteriler için fatura, garanti belgesi resmi olarak verilir.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: Truck,
    num: "05",
    title: "Kargo ile Teslim",
    desc: "Stoktaki parçalar aynı gün kargoya verilir. Türkiye geneli 1-3 iş günü içinde kapınızda.",
    color: "from-purple-600 to-violet-700",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-vag-blue font-semibold text-sm uppercase tracking-wider mb-2">
            Kullanım Rehberi
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-vag-navy mb-4">
            Nasıl Çalışır? 5 Adımda Parçanız
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            İhtiyacınız olan VAG yedek parçayı 5 basit adımda bulun, sipariş verin, kargoyla teslim alın.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative group"
              >
                {/* Card */}
                <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  {/* Icon + Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="text-white" size={28} />
                    </div>
                    <span className="text-5xl font-bold text-gray-100 leading-none select-none">
                      {step.num}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-vag-navy mb-2 leading-snug">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {step.desc}
                  </p>
                </div>

                {/* Arrow connector (between cards on desktop) */}
                {idx < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-vag-navy items-center justify-center text-white">
                    <ArrowRight size={14} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Bar */}
        <div className="bg-gradient-to-r from-vag-navy to-vag-blue rounded-2xl p-8 md:p-10 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <ShieldCheck size={40} className="text-yellow-400 mx-auto mb-3" />
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              Hâlâ Aradığınız Parçayı Bulamadınız mı?
            </h3>
            <p className="text-white/80 mb-6">
              Aracınızın şase numarasını (VIN) WhatsApp'tan gönderin, uzman ekibimiz
              doğru parçayı tespit edip size fiyat ve stok bilgisi versin.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/905439792013?text=Merhaba,%20arac%C4%B1m%C4%B1n%20%C5%9Fase%20numaras%C4%B1%20(VIN)%20ile%20do%C4%9Frru%20par%C3%A7ay%C4%B1%20bulmak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-lg"
              >
                <MessageCircle size={18} />
                WhatsApp'tan Parça Sorgula
              </a>
              <a
                href="tel:+903123940525"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-xl font-bold transition-colors"
              >
                Kurumsalı Ara (0312 394 05 25)
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
