export default function HomeContent() {
  return (
    <div className="page-transition">

      {/* ✅ MOVED: Ticker AFTER hero for LCP */}
      {/* Hero section FIRST — LCP element gets priority */}
      <section
        className="relative overflow-hidden bg-green-warm-gradient dark:from-green-950 dark:via-green-900 dark:to-emerald-950"
        aria-label="Hero section - Agrarian Welfare Verification"
      >
        <HeroImage />
        <div className="absolute -top-24 -left-20 w-96 h-96 rounded-full bg-emerald-400/20 blur-[100px] pointer-events-none" aria-hidden="true" />
        <div className="absolute top-1/3 -right-10 w-80 h-80 rounded-full bg-amber-400/15 blur-[100px] pointer-events-none" aria-hidden="true" />

        <div className="container-site relative z-10 max-w-3xl px-4 py-10 md:py-16">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-green-100 text-xs font-bold px-4 py-2 rounded-full mb-4 uppercase tracking-wider backdrop-blur-sm">
            🌾 India Ka #1 Agrarian Welfare Information Portal
          </div>

          <h1 className="font-black text-white leading-[1.15] mb-3 tracking-tight drop-shadow-lg">
            <span className="text-3xl md:text-5xl block">किसान लाभ वेरिफिकेशन —</span>
            <span className="text-2xl md:text-4xl block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-yellow-100 via-amber-200 to-yellow-300">
              कृषि कल्याण {STATS.currentTranche}वीं किस्त 2026
            </span>
          </h1>

          <h2 className="text-base md:text-lg text-green-50 mb-5 max-w-xl leading-relaxed font-normal drop-shadow-md">
            Kisan bhai — <strong className="text-white">{STATS.currentTranche}वीं किस्त {STATS.currentTrancheDate} को रिलीज़ हो चुकी है!</strong> अपना status अभी verify करो, digital verification complete करो, पैसा आया या नहीं देखो। <span className="text-yellow-200 font-semibold">सब फ्री — 10 मिनट में।</span>
          </h2>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/articles/pm-kisan-23vi-kist-2026-status-check"
              className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-black px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-900/40 focus:ring-2 focus:ring-yellow-300 focus:outline-none"
              aria-label={`${STATS.currentTranche}वीं किस्त status verify करें`}
            >
              📆 {STATS.currentTranche}वीं किस्त Status देखो
            </Link>
            <Link
              href="/articles/pm-kisan-ekyc-online-2026"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl text-sm transition-all hover:scale-105 backdrop-blur-sm focus:ring-2 focus:ring-white focus:outline-none"
              aria-label="Digital verification complete करें"
            >
              🔐 Digital Verification करो — फ्री
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-6 text-[11px] text-green-100 drop-shadow-md">
            {['✅ 100% Free', '🔒 कोई Data Store नहीं', '🏛️ Official Portal Verified', '📞 Support Line: 155261'].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ MOVED BELOW HERO: Structured data scripts (non-render-blocking) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleListSchema) }} />

      {/* ✅ TICKER NOW BELOW HERO — doesn't push LCP element */}
      <div className="bg-red-600 text-white py-1.5 px-4" role="banner" aria-label="Latest updates">
        <div className="container-site flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-[11px] font-medium">
          {TICKER_ITEMS.slice(0, 3).map((item, i) => (
            <span key={i} className="flex items-center gap-1">{item}</span>
          ))}
        </div>
      </div>

      {/* Common problems — quick solutions */}
      <section className="py-12 bg-[var(--color-card)]" aria-labelledby="problems-heading">
        <div className="container-site px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🤔 आपकी Problem क्या है?</span>
            <h2 id="problems-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">सीधा Solution — Click करो</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-lg mx-auto">सबसे common problems के step-by-step guides</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {[
              { icon: '💸', title: 'किस्त नहीं आई', sub: 'Payment pending या failed', href: '/articles/pm-kisan-payment-failed-status-2026', bg: 'bg-red-50 dark:bg-red-900/20', border: 'border-red-200 dark:border-red-800', tag: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300' },
              { icon: '🔐', title: 'Digital Verification करना है', sub: 'OTP या CSC — दोनों फ्री', href: '/articles/pm-kisan-ekyc-online-2026', bg: 'bg-green-50 dark:bg-green-900/20', border: 'border-green-200 dark:border-green-800', tag: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300' },
              { icon: '❌', title: 'Rejected हो गया', sub: 'Rejection reason पता करो', href: '/articles/pm-kisan-rejected-list-2026', bg: 'bg-orange-50 dark:bg-orange-900/20', border: 'border-orange-200 dark:border-orange-800', tag: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300' },
              { icon: '✏️', title: 'नाम गलत है', sub: '15 मिनट में fix करो', href: '/articles/pm-kisan-name-correction-online-2026', bg: 'bg-purple-50 dark:bg-purple-900/20', border: 'border-purple-200 dark:border-purple-800', tag: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300' },
            ].map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className={`${c.bg} ${c.border} border rounded-2xl p-4 flex flex-col gap-2 hover:shadow-lg hover:scale-[1.02] transition-all no-underline group h-full focus:ring-2 focus:ring-green-500 focus:outline-none`}
                aria-label={`${c.title} - ${c.sub}`}
              >
                <div className="flex items-start justify-between">
                  <span className="text-2xl" role="img" aria-hidden="true">{c.icon}</span>
                  <span className={`text-[9px] font-black px-2 py-0.5 rounded-full ${c.tag}`}>Guide</span>
                </div>
                <h3 className="font-bold text-[var(--color-text)] text-sm leading-tight">{c.title}</h3>
                <p className="text-[var(--color-text-muted)] text-xs leading-snug">{c.sub}</p>
                <span className="text-xs font-bold text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all inline-flex items-center gap-1 mt-auto">पढ़ो →</span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-6">
            <Link href="/articles" className="text-sm font-bold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] hover:underline focus:ring-2 focus:ring-green-500 focus:outline-none rounded">
              सारी Problems देखो →
            </Link>
          </div>
        </div>
      </section>

      {/* Cultivators showcase — statistics */}
      <section className="py-14 bg-gradient-to-b from-green-50 to-[var(--color-card)] dark:from-green-950/30 dark:to-[var(--color-card)]" aria-labelledby="cultivators-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🌾 हमारे किसान</span>
            <h2 id="cultivators-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">भारत की असली ताकत</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">11 करोड़+ किसानों को agrarian welfare से मिल रहा है हर साल ₹6,000</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
            <Image
              src="/indian-farmers-wheat-field.webp"
              alt="Indian farmers in green wheat field - Agrarian welfare beneficiaries"
              width={1200}
              height={630}
              quality={75}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="text-white">
                <h3 className="text-2xl md:text-3xl font-black mb-2">किसान लाभ कार्यक्रम</h3>
                <p className="text-green-200 text-sm md:text-base">हर किसान को ₹2,000 हर 4 महीने में — सीधा bank account में</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {[
              { label: 'Registered किसान', value: '11 Cr+', icon: '👨‍🌾' },
              { label: 'Payment पा चुके', value: '9.44 Cr+', icon: '💰' },
              { label: 'सालाना', value: '₹6,000', icon: '📅' },
              { label: 'हर किस्त', value: '₹2,000', icon: '💵' },
            ].map((stat) => (
              <div key={stat.label} className="bg-[var(--color-card)] rounded-2xl p-5 shadow-lg border-2 border-[var(--color-border)] text-center hover:shadow-xl transition-all">
                <div className="text-3xl mb-2" role="img" aria-hidden="true">{stat.icon}</div>
                <div className="text-2xl font-black text-[var(--color-primary)] mb-1">{stat.value}</div>
                <div className="text-xs text-[var(--color-text-muted)] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — 3 step process */}
      <section className="py-14 bg-[var(--color-card)]" aria-labelledby="how-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">📋 प्रक्रिया</span>
            <h2 id="how-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">कृषि कल्याण — 3 कदमों में Complete</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">बस ये 3 काम करो, ₹2,000 हर 4 महीने में सीधा bank में</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
            {[
              { step: '01', title: 'Enrollment करो', desc: 'Official portal पर जाके biometric credential number से enroll करो', icon: '📝', color: 'bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800' },
              { step: '02', title: 'Digital Verification Complete करो', desc: 'OTP या biometric से verification verify करो — बिल्कुल फ्री', icon: '🔐', color: 'bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800' },
              { step: '03', title: '₹2,000 पाओ', desc: 'हर 4 महीने में सीधा bank account में पैसा', icon: '💰', color: 'bg-amber-50 border-amber-200 dark:bg-amber-900/20 dark:border-amber-800' },
            ].map((item) => (
              <div key={item.step} className={`${item.color} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-all`}>
                <span className="text-4xl mb-3 block" role="img" aria-hidden="true">{item.icon}</span>
                <span className="inline-block bg-[var(--color-card)] text-[var(--color-text-muted)] text-xs font-black px-3 py-1 rounded-full mb-3">कदम {item.step}</span>
                <h3 className="font-bold text-[var(--color-text)] text-lg mb-2">{item.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest articles — featured content */}
      <section className="py-14 bg-gradient-to-b from-gray-50 to-[var(--color-card)] dark:from-gray-900/50 dark:to-[var(--color-card)]" aria-labelledby="latest-heading">
        <div className="container-site px-4">
          <div className="text-center mb-8">
            <span className="inline-block bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🆕 नई Guides</span>
            <h2 id="latest-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">ताज़ा जानकारी हिंदी में</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">Practical step-by-step guides — government copy-paste नहीं</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {TOP_ARTICLES.map((a) => (
              <Link
                key={a.slug}
                href={`/articles/${a.slug}`}
                className="group bg-[var(--color-card)] border border-[var(--color-border)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline h-full flex flex-col focus:ring-2 focus:ring-green-500 focus:outline-none"
                aria-label={`पढ़ो: ${a.title}`}
              >
                <ArticleImage src={a.image} alt={a.title} emoji={a.emoji} />
                <div className="p-4 flex-col flex-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full self-start ${CAT_COLORS[a.category] ?? 'bg-gray-100 text-gray-600'}`}>{a.category}</span>
                  <h3 className="font-bold text-[var(--color-text)] text-sm leading-snug mt-2 mb-1.5 group-hover:text-[var(--color-primary)] transition-colors">{a.title}</h3>
                  <p className="text-[var(--color-text-muted)] text-xs leading-relaxed mb-3 line-clamp-2">{a.desc}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-[var(--color-border)] mt-auto">
                    <span className="text-[11px] text-[var(--color-text-muted)]">✍️ KisanStatus Team</span>
                    <span className="text-xs font-bold text-[var(--color-primary)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">पढ़ो →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-black px-8 py-3.5 rounded-xl text-sm transition-all hover:scale-105 shadow-lg shadow-green-600/30 focus:ring-2 focus:ring-green-300 focus:outline-none"
              aria-label={`सभी ${STATS.totalArticles} guides देखें`}
            >
              📚 सारी {STATS.totalArticles} Guides देखो
            </Link>
          </div>
        </div>
      </section>

      {/* Modern farming — technology section */}
      <section className="py-14 bg-gradient-to-b from-amber-50 to-[var(--color-card)] dark:from-amber-950/20 dark:to-[var(--color-card)]" aria-labelledby="modern-heading">
        <div className="container-site px-4">
          <div className="text-center mb-10">
            <span className="inline-block bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 text-xs font-bold px-3 py-1.5 rounded-full mb-3 uppercase tracking-wider">🚜 Modern खेती</span>
            <h2 id="modern-heading" className="text-2xl md:text-3xl font-black text-[var(--color-text)] mb-2">Technology + खेती</h2>
            <p className="text-[var(--color-text-muted)] text-sm max-w-xl mx-auto">कृषि कल्याण के साथ modern खेती से double आमदनी</p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl max-w-5xl mx-auto mb-10">
            <Image
              src="/modern-farming-technology-india.webp"
              alt="Modern farming technology in India - Tractor, mobile app, digital agriculture for cultivators"
              width={1200}
              height={630}
              quality={75}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 1200px"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                {[
                  { icon: '📱', title: 'Mobile से Apply', sub: 'घर बैठे enrollment' },
                  { icon: '🌐', title: 'Online Status', sub: 'कभी भी verify करो' },
                  { icon: '💳', title: 'सीधा Bank', sub: 'DBT से सीधा account' },
                ].map((item) => (
                  <div key={item.title} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
                    <div className="text-3xl mb-2" role="img" aria-hidden="true">{item.icon}</div>
                    <div className="font-bold">{item.title}</div>
                    <div className="text-xs opacity-90">{item.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
            {[
              { icon: '🌱', title: 'मिट्टी Analysis Card', desc: 'मिट्टी testing फ्री', color: 'bg-green-500' },
              { icon: '💧', title: 'सिंचाई Support', desc: 'Water management', color: 'bg-blue-500' },
              { icon: '🌾', title: 'फसल सुरक्षा', desc: 'Fasal suraksha', color: 'bg-amber-500' },
              { icon: '📊', title: 'Procurement Rate', desc: 'मंडी भाव जानो', color: 'bg-purple-500' },
            ].map((feature) => (
              <div key={feature.title} className="bg-[var(--color-card)] rounded-2xl p-6 shadow-lg border-2 border-[var(--color-border)] hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mb-4`} role="img" aria-hidden="true">{feature.icon}</div>
                <h3 className="font-bold text-[var(--color-text)] text-lg mb-2">{feature.title}</h3>
                <p className="text-[var(--color-text-muted)] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal disclaimer */}
      <div className="container-site pb-10 px-4">
        <p className="text-center text-amber-700 bg-amber-50 border border-amber-200 dark:text-amber-300 dark:bg-amber-900/20 dark:border-amber-800 rounded-xl px-4 py-3 text-xs max-w-2xl mx-auto" role="note">
          ⚠️ <strong>Disclaimer:</strong> KisanStatus.com एक independent information portal है। यह Government of India या official portal का official platform नहीं है।
        </p>
      </div>

      {/* FAQ section */}
      <FAQSection faqs={FAQS} />
    </div>
  );
}