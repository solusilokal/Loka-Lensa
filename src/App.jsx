import React, { useState, useEffect } from 'react';
import { 
  Instagram, 
  MapPin, 
  MessageCircle, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ArrowDown, 
  Facebook,
  Share,
  Copy,
  Check,
  Twitter,
  Clock,
  Calendar,
  Star,
  Quote,
  Camera,
  Aperture,
  Info,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';

const pageData = {
  name: "Loka Lensa",
  phone: "6289529605601",
  address: "Palangka Raya, Kalimantan Tengah",
  title: "Pusat Sewa Kamera & Lensa Terlengkap",
  description: "Abadikan setiap momen berharga dengan gear profesional dari Loka Lensa. Kami menyediakan layanan sewa kamera, lensa, dan perlengkapan audio visual dengan syarat mudah dan harga terjangkau.",
  history: "Berawal dari komunitas videografer lokal pada tahun 2019, Loka Lensa hadir untuk memberikan solusi atas mahalnya peralatan produksi visual. Kini kami telah membantu lebih dari 5.000+ kreator untuk merealisasikan karya mereka tanpa harus mengeluarkan budget fantastis untuk membeli alat.",
  profileImg: "./logo-loka-lensa.png", 
  heroImg: "./Gemini_Generated_Image_gymx90gymx90gymx.jpg",
  links: {
    instagram: "https://www.instagram.com/solusilokal.id",
    maps: "https://www.google.com/maps/search/Palangka+Raya", 
    facebook: "https://facebook.com/", 
    tiktok: "https://www.tiktok.com/@solusilokal.id" 
  },
  locationHighlights: [
    { text: "Pusat Kota", icon: MapPin },
    { text: "Buka 08:00 - 22:00", icon: Clock },
    { text: "Garansi Alat Normal", icon: ShieldCheck }
  ],
  catalog: [
    { name: "Sony A7 III Body Only", category: "Mirrorless", price: "250.000", image: "./sony-a7-iii.webp" },
    { name: "Canon EOS R Body Only", category: "Mirrorless", price: "300.000", image: "./canon-eos-r.webp" },
    { name: "Sony FE 50mm f/1.8", category: "Lensa", price: "75.000", image: "./sony-fe-50mm.webp" },
    { name: "DJI Ronin SC 2", category: "Gimbal", price: "150.000", image: "./dji-ronin-sc2.webp" },
    { name: "Godox SL60W + Softbox", category: "Lighting", price: "100.000", image: "./godox-sl60w.webp" },
  ],
  faqs: [
    { q: "Apa saja syarat untuk menyewa alat?", a: "Penyewa wajib meninggalkan 2 kartu identitas asli yang masih berlaku (KTP + SIM / KK / Kartu Mahasiswa). Kartu identitas harus atas nama penyewa sendiri." },
    { q: "Apakah hitungan sewa bisa setengah hari?", a: "Hitungan minimal sewa kami adalah per 24 jam (1 hari). Pengembalian sebelum 24 jam tetap dihitung tarif 1 hari." },
    { q: "Bagaimana jika terlambat mengembalikan alat?", a: "Keterlambatan akan dikenakan denda proporsional per jam. Jika terlambat lebih dari 4 jam, akan dihitung tambahan sewa 1 hari penuh." },
    { q: "Apakah bisa booking alat jauh hari?", a: "Sangat bisa! Booking maksimal H-14 dengan syarat melakukan DP minimal 30% dari total biaya sewa." }
  ],
  testimonials: [
    { name: "Rizky (Videografer)", rating: 5, text: "Alatnya selalu terawat, sensor bersih, dan batre dapet banyak. Langganan banget buat ngerjain project wedding." },
    { name: "Sarah (Content Creator)", rating: 5, text: "Syarat sewanya nggak ribet dan adminnya ramah banget mau ngajarin cara setting kamera buat pemula kayak aku." },
    { name: "Kevin", rating: 4, text: "Koleksi lensa Sony-nya lumayan lengkap. Harga bersahabat buat mahasiswa. Bakal sering sewa di sini." }
  ]
};

export default function App() {
  const [lightbox, setLightbox] = useState({ isOpen: false, images: [], currentIndex: 0 });
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [copied, setCopied] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyCTA(true);
      } else {
        setShowStickyCTA(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (images, index) => {
    setLightbox({ isOpen: true, images, currentIndex: index });
    document.body.style.overflow = 'hidden'; 
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
    document.body.style.overflow = 'unset';
  };

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const scrollToForm = () => {
    document.getElementById('booking-form').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const rentDate = formData.get('rentDate');
    const duration = formData.get('duration');
    const equipment = formData.get('equipment');
    const waUrl = `https://wa.me/${pageData.phone}?text=Halo%20Admin%20${pageData.name},%20saya%20${name}.%20Saya%20ingin%20menyewa:%0A%0AAlat:%20${equipment}%0ATanggal:%20${rentDate}%0ADurasi:%20${duration}%20Hari%0A%0AApakah%20alat%20tersedia?`;
    window.open(waUrl, '_blank');
  };

  const getShareUrl = () => {
    return window.location.href.startsWith('http') 
      ? window.location.href 
      : 'https://solusilokal.github.io/Loka-Lensa/';
  };

  const getShareText = () => {
    return `${pageData.name} - ${pageData.title}. Sewa kamera & lensa profesional di Palangka Raya! Hubungi Admin: https://wa.me/${pageData.phone}`;
  };

  const handleShare = (e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    setShowShareModal(true);
  };

  const copyToClipboard = async () => {
    const textToCopy = getShareUrl();
    let success = false;
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(textToCopy);
        success = true;
      } catch (e) {
        success = false;
      }
    }
    if (!success) {
      try {
        const tempInput = document.createElement('textarea');
        tempInput.value = textToCopy;
        tempInput.style.position = 'fixed';
        tempInput.style.left = '-9999px';
        tempInput.style.top = '0';
        document.body.appendChild(tempInput);
        tempInput.focus();
        tempInput.select();
        success = document.execCommand('copy');
        document.body.removeChild(tempInput);
      } catch (e) {
        console.error('Copy fallback error:', e);
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        body {
          background-color: #f1f5f9;
          color: #0f172a;
          margin: 0;
          font-family: 'Plus Jakarta Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
      
      <main className="w-full max-w-[480px] mx-auto relative shadow-2xl bg-slate-50 min-h-screen overflow-hidden pb-32">
        
        {/* Hero Section */}
        <section className="relative w-full min-h-[90dvh] flex flex-col justify-end pb-10 px-6 bg-slate-900">
          
          <button
            type="button"
            onClick={handleShare}
            aria-label="Bagikan Halaman"
            className="absolute top-6 right-6 z-30 p-3.5 bg-slate-900/60 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-slate-900/80 active:scale-90 transition-all shadow-lg cursor-pointer flex items-center justify-center"
          >
            <Share size={20} />
          </button>

          <div className="absolute inset-0 z-0">
            <img 
              src={pageData.heroImg} 
              alt={pageData.name} 
              className="w-full h-full object-cover object-center opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center mt-32">
            <div className="w-28 h-28 rounded-full p-2 bg-white shadow-2xl border-2 border-[#eab308]/60 overflow-hidden flex items-center justify-center mb-6">
              <img 
                src={pageData.profileImg} 
                alt="Logo Loka Lensa" 
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = "./logo-loka-lensa.png";
                }}
              />
            </div>

            <h1 className="text-4xl font-extrabold text-[#fde047] mb-2 leading-tight tracking-tight">
              {pageData.name}
            </h1>
            <p className="text-[#eab308] font-semibold text-sm mb-4 tracking-wide uppercase">
              {pageData.title}
            </p>
            <p className="text-slate-300 font-light text-[13px] leading-relaxed mb-8 max-w-[95%]">
              {pageData.description}
            </p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm mb-3">
              <a href={pageData.links.instagram} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium">
                <Instagram size={18} /> Instagram
              </a>
              <a href={pageData.links.tiktok} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg> TikTok
              </a>
            </div>
            
            <div className="w-full max-w-sm mb-8">
              <a href={pageData.links.maps} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 hover:bg-white/20 transition-all text-white shadow-sm text-sm font-medium">
                <MapPin size={18} /> Lokasi Kami
              </a>
            </div>

            <button 
              onClick={scrollToForm}
              className="group relative flex items-center justify-center gap-3 w-full max-w-sm py-4 bg-[#ca8a04] text-white rounded-2xl font-bold text-sm uppercase tracking-wider hover:bg-[#a16207] transition-all shadow-[0_8px_20px_rgba(202,138,4,0.3)] border border-[#facc15]/20 cursor-pointer"
            >
              <Camera size={18} />
              Sewa Sekarang
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform absolute right-6" />
            </button>
          </div>
        </section>

        {/* Cerita Kami */}
        <section className="py-12 px-6 bg-white relative">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#fef08a]/30 rounded-bl-[100px] -z-0"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-[#ca8a04]" size={24} />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Cerita Kami</h2>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed text-justify">
              {pageData.history}
            </p>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-6 px-6 bg-[#0f172a] shadow-inner">
          <div className="flex flex-wrap justify-center gap-3 w-full max-w-md mx-auto">
            {pageData.locationHighlights.map((loc, idx) => {
              const Icon = loc.icon;
              return (
                <span key={idx} className="flex items-center gap-1.5 px-4 py-2 bg-slate-800/80 rounded-full border border-slate-700 text-xs text-slate-200 font-medium">
                  <Icon size={14} className="text-[#facc15]" />
                  {loc.text}
                </span>
              );
            })}
          </div>
        </section>

        {/* Katalog & Harga */}
        <section className="pt-12 pb-8 bg-slate-50 border-b border-slate-200">
          <div className="px-6 mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Aperture className="text-[#ca8a04]" size={24} />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Katalog & Harga</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8">Peralatan terawat siap pakai untuk produksi Anda (Harga/24 Jam).</p>
          </div>
          
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-6 no-scrollbar">
            {pageData.catalog.map((item, idx) => (
              <div 
                key={idx}
                className="snap-center shrink-0 w-[200px] bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex flex-col"
              >
                <div 
                  className="w-full h-[200px] cursor-pointer relative group bg-slate-100"
                  onClick={() => openLightbox(pageData.catalog.map(c => c.image), idx)}
                >
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 bg-[#0f172a]/80 backdrop-blur-sm text-[#fde047] text-[10px] font-bold px-2 py-1 rounded-md border border-slate-700">
                    {item.category}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1 justify-between">
                  <h3 className="font-bold text-slate-800 text-sm leading-tight mb-2">{item.name}</h3>
                  <div className="mt-auto">
                    <span className="text-[#ca8a04] font-extrabold text-sm">Rp {item.price}</span>
                    <span className="text-slate-400 text-[10px]"> / hari</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 px-6 bg-white border-b border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <HelpCircle className="text-[#ca8a04]" size={24} />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">FAQ</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8">Pertanyaan yang sering diajukan pelanggan.</p>
          </div>

          <div className="flex flex-col gap-3">
            {pageData.faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                <button 
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-4 text-left bg-white focus:outline-none cursor-pointer"
                >
                  <span className="font-bold text-slate-800 text-[13px]">{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp size={18} className="text-[#ca8a04] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                <div 
                  className={`px-4 text-[13px] text-slate-600 transition-all duration-300 ease-in-out ${
                    openFaqIndex === idx ? 'py-4 border-t border-slate-100 opacity-100 max-h-40' : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                >
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimoni */}
        <section className="py-12 px-6 bg-slate-50 border-b border-slate-200">
          <div className="mb-6 flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <Quote className="text-[#ca8a04]" size={24} />
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Testimoni</h2>
            </div>
            <p className="text-slate-500 text-xs ml-8">Pengalaman kreator menyewa di Loka Lensa.</p>
          </div>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 no-scrollbar">
            {pageData.testimonials.map((testi, idx) => (
              <div key={idx} className="snap-center shrink-0 w-[280px] bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 text-slate-100 opacity-50">
                  <Quote size={80} />
                </div>
                <div className="flex items-center gap-1 relative z-10">
                  {[...Array(testi.rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-[#ca8a04] text-[#ca8a04]" />
                  ))}
                </div>
                <p className="text-slate-600 text-[13px] leading-relaxed relative z-10">"{testi.text}"</p>
                <div className="mt-auto pt-4 flex items-center gap-3 relative z-10">
                  <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center text-[#fde047] font-bold text-xs">
                    {testi.name.charAt(0)}
                  </div>
                  <span className="text-[13px] font-bold text-slate-800">{testi.name}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Form Pemesanan */}
        <section id="booking-form" className="py-14 px-6 bg-slate-100">
          <div className="bg-white border border-slate-200 rounded-[2rem] p-6 sm:p-8 shadow-xl relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#fef08a]/40 rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 mb-6">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Form Pemesanan</h2>
              <p className="text-slate-500 text-sm leading-relaxed">Cek ketersediaan alat dan konfirmasi jadwal sewa langsung dengan admin kami via WhatsApp.</p>
            </div>
            
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 relative z-10">
              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Nama Lengkap</label>
                <input 
                  type="text" 
                  name="name" 
                  required
                  placeholder="Ketik nama Anda"
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ca8a04] focus:ring-1 focus:ring-[#ca8a04] transition-all"
                />
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Tanggal Sewa</label>
                  <input 
                    type="date" 
                    name="rentDate" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ca8a04] focus:ring-1 focus:ring-[#ca8a04] transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1.5 w-1/2">
                  <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Durasi</label>
                  <select 
                    name="duration" 
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 focus:outline-none focus:border-[#ca8a04] focus:ring-1 focus:ring-[#ca8a04] transition-all appearance-none"
                  >
                    <option value="1">1 Hari</option>
                    <option value="2">2 Hari</option>
                    <option value="3">3 Hari</option>
                    <option value="7">1 Minggu</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wide ml-1">Alat yang disewa</label>
                <textarea 
                  name="equipment" 
                  required
                  rows="3"
                  placeholder="Cth: Sony A7III (1), Lensa 50mm (1), Baterai extra..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#ca8a04] focus:ring-1 focus:ring-[#ca8a04] transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full mt-2 bg-[#25D366] text-white font-bold text-sm tracking-wide py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-[#1EBE5A] transition-colors shadow-md cursor-pointer"
              >
                Kirim via WhatsApp
                <MessageCircle size={18} />
              </button>
            </form>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 pb-12 text-center flex flex-col items-center justify-center mx-6 mt-4">
          <div className="w-full h-px bg-slate-200 mb-8"></div>
          
          <div className="w-14 h-14 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 p-2 overflow-hidden border border-[#ca8a04]/40">
            <img 
              src={pageData.profileImg} 
              alt={pageData.name} 
              className="w-full h-full object-contain" 
              onError={(e) => {
                e.currentTarget.onerror = null;
                e.currentTarget.src = "./logo-loka-lensa.png";
              }}
            />
          </div>
          
          <div className="text-slate-500 text-xs flex flex-col gap-1 items-center">
            <span className="font-extrabold text-slate-800 text-sm">{pageData.name}</span>
            <span className="max-w-[250px]">{pageData.address}</span>
          </div>

          <p className="text-slate-400 text-[10px] mt-8">
            © {new Date().getFullYear()} {pageData.name}. All rights reserved.
          </p>
          
          <a 
            href="https://www.solusilokal.id" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-slate-400 text-[10px] mt-2 tracking-wide font-medium hover:text-slate-700 transition-colors"
          >
            powered by solusilokal.id
          </a>
        </footer>

        {/* Sticky Floating CTA */}
        <div 
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-3rem)] max-w-[432px] z-40 transition-all duration-500 ease-out ${
            showStickyCTA ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'
          }`}
        >
          <button 
            onClick={scrollToForm}
            className="w-full flex items-center justify-between px-6 py-4 bg-[#0f172a] backdrop-blur-xl border border-[#ca8a04]/50 rounded-2xl text-white shadow-[0_10px_40px_rgba(15,23,42,0.4)] hover:bg-slate-900 active:scale-[0.98] transition-all cursor-pointer"
          >
            <div className="flex flex-col items-start">
              <span className="font-bold text-sm tracking-wide text-[#fde047]">Sewa Kamera</span>
              <span className="text-[10px] text-slate-400 font-medium">Cek Ketersediaan Alat</span>
            </div>
            <div className="bg-[#ca8a04] text-white p-2.5 rounded-xl">
              <Calendar size={18} className="fill-none stroke-current stroke-2" />
            </div>
          </button>
        </div>

      </main>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20 cursor-pointer"
            onClick={closeLightbox}
          >
            <X size={20} />
          </button>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute left-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(p => ({ ...p, currentIndex: (p.currentIndex - 1 + p.images.length) % p.images.length }));
              }}
            >
              <ChevronLeft size={24} />
            </button>
          )}

          <div className="w-full max-w-4xl max-h-[100dvh] p-4 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={lightbox.images[lightbox.currentIndex]} 
              alt="Galeri Loka Lensa" 
              className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
            />
          </div>

          {lightbox.images.length > 1 && (
            <button 
              className="absolute right-4 p-3 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all z-50 border border-white/20 cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setLightbox(p => ({ ...p, currentIndex: (p.currentIndex + 1) % p.images.length }));
              }}
            >
              <ChevronRight size={24} />
            </button>
          )}
          
          {lightbox.images.length > 1 && (
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-xs font-bold tracking-[0.2em] bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20">
              {lightbox.currentIndex + 1} / {lightbox.images.length}
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {showShareModal && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/70 backdrop-blur-sm sm:items-center transition-all p-0 sm:p-4"
          onClick={() => setShowShareModal(false)}
        >
          <div
            className="w-full max-w-[480px] bg-white sm:rounded-3xl rounded-t-3xl p-6 relative overflow-hidden shadow-2xl animate-in slide-in-from-bottom-full sm:slide-in-from-bottom-0 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-5">
              <h3 className="text-slate-900 font-extrabold text-lg">Bagikan {pageData.name}</h3>
              <button
                type="button"
                onClick={() => setShowShareModal(false)}
                aria-label="Tutup"
                className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-all cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            {/* Profile banner preview */}
            <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 flex items-center gap-4 mb-5">
              <div className="w-14 h-14 rounded-full bg-white border border-amber-300 p-1 flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
                <img 
                  src={pageData.profileImg} 
                  alt={pageData.name} 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "./logo-loka-lensa.png";
                  }}
                />
              </div>
              <div className="flex flex-col min-w-0">
                <h4 className="text-slate-900 font-bold text-base leading-tight truncate">{pageData.name}</h4>
                <p className="text-amber-700 text-xs font-semibold truncate">{pageData.title}</p>
                <p className="text-slate-500 text-[11px] truncate mt-0.5">{pageData.address}</p>
              </div>
            </div>

            {/* Copy Link Input Bar */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-1.5 ml-1">
                Tautan Halaman
              </label>
              <div className="flex items-center gap-2 bg-slate-100 border border-slate-200 rounded-xl p-1.5 pr-2 focus-within:border-[#ca8a04] transition-colors">
                <input 
                  type="text"
                  readOnly
                  value={getShareUrl()}
                  className="w-full bg-transparent px-2.5 text-xs text-slate-700 outline-none select-all"
                />
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="shrink-0 flex items-center gap-1.5 px-3.5 py-2 bg-[#ca8a04] hover:bg-[#a16207] text-white rounded-lg text-xs font-bold transition-all shadow-sm cursor-pointer active:scale-95"
                >
                  {copied ? <Check size={15} /> : <Copy size={15} />}
                  {copied ? 'Tersalin!' : 'Salin'}
                </button>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div>
              <span className="block text-xs font-bold text-slate-600 uppercase tracking-wider mb-2.5 ml-1">
                Bagikan Langsung Ke
              </span>
              <div className="grid grid-cols-4 gap-2.5">
                {/* WhatsApp */}
                <button
                  type="button"
                  onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(getShareText() + ' ' + getShareUrl())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <MessageCircle size={22} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">WhatsApp</span>
                </button>

                {/* Telegram */}
                <button
                  type="button"
                  onClick={() => window.open(`https://t.me/share/url?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-sky-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.75-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Telegram</span>
                </button>

                {/* Facebook */}
                <button
                  type="button"
                  onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getShareUrl())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <Facebook size={22} className="fill-current" />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">Facebook</span>
                </button>

                {/* X (Twitter) */}
                <button
                  type="button"
                  onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(getShareUrl())}&text=${encodeURIComponent(getShareText())}`, '_blank')}
                  className="flex flex-col items-center gap-1.5 p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-800 transition-all cursor-pointer group active:scale-95"
                >
                  <div className="w-11 h-11 rounded-full bg-slate-900 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                    <Twitter size={20} />
                  </div>
                  <span className="text-[11px] font-bold text-slate-700">X</span>
                </button>
              </div>
            </div>

            {/* Native Mobile Share fallback if supported */}
            {typeof navigator !== 'undefined' && !!navigator.share && (
              <button
                type="button"
                onClick={async () => {
                  try {
                    await navigator.share({
                      title: pageData.name,
                      text: getShareText(),
                      url: getShareUrl()
                    });
                  } catch (e) {}
                }}
                className="w-full mt-4 py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Share size={15} /> Buka Opsi Berbagi Bawaan Perangkat
              </button>
            )}

          </div>
        </div>
      )}
    </>
  );
}
