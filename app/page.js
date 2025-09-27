"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, MessageCircle, Mail,Instagram, Facebook } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { useState, useEffect,useRef } from "react";
import ContactForm from "./components/ContactForm";
import CategoryShowcase from "./components/CategoryShowcase";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
const form = useRef();

   const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScroll(false); // Kaydırınca gizle
      } else {
        setShowScroll(true);  // En üstteyken göster
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<main dir="rtl" className="relative bg-white overflow-x-hidden">
      {/* HERO */}
      <section id="hero" className="relative min-h-dvh">
        {/* BG image sadece HERO’da */}
      {/* Mobil için modern pattern */}


{/* Desktop için tek büyük arka plan */}
<Image
  src="/ArkaResim.png"
  alt="خلفية طبيعية"
  fill
  className="object-cover opacity-20 hidden md:block"
/>


        {/* Overlay: üstte yeşil → aşağı doğru beyaza bağlanır */}
<div className="absolute inset-0 bg-gradient-to-b from-green-200/95 via-green-100/30 to-white/0"></div>

        {/* Particles sadece HERO’da */}
        <Particles
          className="absolute inset-0 z-[1] pointer-events-none"
          options={{
            background: { color: "transparent" },
            particles: {
              color: { value: "#16a34a" },
              links: { enable: true, color: "#16a34a" },
              move: { enable: true, speed: 1 },
              number: { value: 40 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 4 } },
            },
          }}
        />

        {/* Content Split */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 py-8 h-full">
          {/* LEFT SIDE: Hero text */}
          <div className="flex flex-col items-center justify-center text-center px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <Image src="/LogoSon.png" alt="المنارة" width={400} height={100} />
            </motion.div>

            {/* Title Typing Effect */}
            <h1 className=" text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-lg">
              <TypeAnimation
                sequence={[
                  "المنارة للتجارة",
                  2000,
                  "منتجات DXN الطبيعية",
                  2000,
                  "الصحة تبدأ من الطبيعة",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-2 text-lg md:text-xl text-gray-700 max-w-md mx-auto leading-relaxed"
            >
              نقدم منتجات DXN الأصلية لتعزيز صحتك بأسلوب طبيعي ومتوازن
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-2 md:mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition text-base md:text-lg"
            >
              🌿 اكتشف منتجاتنا
            </motion.a>
          </div>

          {/* RIGHT SIDE: Product Slider */}
<section id="categories">
  <CategoryShowcase />
</section>
        </div>

   {/* Scroll Down Indicator */}
      
      </section>

{/* PRODUCTS SECTION */}
{/* PRODUCTS SECTION */}
<section id="products" className="bg-white py-24">
  <div className="max-w-6xl mx-auto px-6 text-center">
    {/* Stylish Title */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-400"
    >
      ✨ منتجاتنا الطبيعية ✨
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto mt-4 h-1 w-32 bg-gradient-to-r from-green-400 to-green-700 rounded-full"
    ></motion.div>

    {/* Subtitle */}
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
      className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto"
    >
      استكشف تشكيلتنا المختارة من منتجات DXN الطبيعية لتعزيز صحتك وحياتك اليومية
    </motion.p>

    {/* Swiper */}
    <div className="mt-16">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500 }}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-5xl"
      >
        {[
     { 
      name: "Myco Veggie", 
      img: "/products/mycoveggie.png",
      desc: "خليط من الخضروات والفطر والأعشاب لدعم الهضم وصحة الجسم."
    },
    { 
      name: "Ganozhi Shampoo", 
      img: "/products/PC004_Shampoo.png",
      desc: "شامبو لطيف بخلاصة الجانوديرما للعناية بالشعر وفروة الرأس."
    },
    { 
      name: "Ganozhi Toothpaste", 
      img: "/products/PC006_Toothpaste.png",
      desc: "معجون أسنان طبيعي يحتوي على الجانوديرما لحماية اللثة والأسنان."
    },
    { 
      name: "Tea Tree Cream", 
      img: "/products/PC014-TeaTree.png",
      desc: "كريم بزيت شجرة الشاي لتهدئة البشرة وحمايتها."
    },
    { 
      name: "Baby Oil", 
      img: "/products/SC012_BabyOil.png",
      desc: "زيت لطيف ومرطب لبشرة الأطفال الحساسة."
    },
    { 
      name: "Ganozhi Lipstick", 
      img: "/products/SC016_Lipstick_PearlyPink.png",
      desc: "أحمر شفاه طبيعي مرطب بخلاصة الجانوديرما."
    },
    { 
      name: "Aloe V Lotion", 
      img: "/products/SC024_H&B-Lotion.png",
      desc: "لوشن مرطب لليدين والجسم بخلاصة الألوفيرا."
    },
    { 
      name: "Tea Latte", 
      img: "/products/tealatte.png",
      desc: "شاي لاتيه ممزوج مع خلاصة الجانوديرما لانتعاش طبيعي."
    },
    { 
      name: "Coconut Oil", 
      img: "/products/coconut-oil-dxn.png",
      desc: "زيت جوز الهند العضوي البكر، متعدد الاستخدامات للصحة والجمال."
    },
    { 
      name: "Roselle Drink", 
      img: "/products/FB005_Roselle_285ml.png",
      desc: "مشروب نباتي من الكركديه غني بمضادات الأكسدة."
    },
    { 
      name: "Morinzhi Juice", 
      img: "/products/FB007_Morinzhi_285ml.png",
      desc: "عصير المورينزي الطبيعي لدعم الطاقة والمناعة."
    },
    { 
      name: "Lemonzhi", 
      img: "/products/FB155_Lemonzhi.png",
      desc: "شاي ليمون ممزوج بخلاصة الجانوديرما لانتعاش يومي."
    },
    { 
      name: "Zhi Honey", 
      img: "/products/FB328_Zhi_Honey.png",
      desc: "عسل طبيعي نقي مدعم بخلاصة الجانوديرما."
    },
    { 
      name: "Spirulina", 
      img: "/products/HF031_Spirulina_120s.png",
      desc: "طحالب سبيرولينا الغنية بالبروتينات والمعادن."
    },
    { 
      name: "Reishi Mushroom", 
      img: "/products/HF041_ReishiMushroomPowder_70g.png",
      desc: "فطر الريشي الشهير بدعم المناعة وصحة الجسم."
    },
    { 
      name: "Pineapple Jam", 
      img: "/products/jam.png",
      desc: "مربى الأناناس مع الجانوديرما، لذيذ وصحي."
    },
    { 
      name: "Kiwi Drink", 
      img: "/products/kiwi.png",
      desc: "شراب الكيوي الطبيعي المنعش والغني بالفيتامينات."
    },
    { 
      name: "Lingzhi Coffee 3in1", 
      img: "/products/Lingzhi_coffee_3in1ground-front.png",
      desc: "قهوة لينجزي 3 في 1 مع خلاصة الجانوديرما لبدء يومك بطاقة."
    },
        ].map((product, idx) => (
          <SwiperSlide key={idx}>
            {({ isActive }) => (
              <div
                className={`flex flex-col items-center text-center cursor-pointer transition-all duration-500 ${
                  isActive ? "z-10" : "opacity-50 blur-[1px]"
                }`}
              >
                {/* Sadece resim büyür */}
                <motion.div
                  animate={isActive ? { scale: 1.2 } : { scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src={product.img}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="mx-auto drop-shadow-xl"
                  />
                </motion.div>

                {/* Text sabit kalır */}
                <h3 className="mt-4 text-xl font-bold text-green-800">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mt-1">{product.desc}</p>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

{/* CTA text */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.5 }}
  className="mt-12 text-center"
>
  <p className="text-green-700 font-semibold text-lg">
    🌿 اكتشف منتجاتنا الطبيعية الآن وابدأ رحلتك نحو حياة صحية 🌿
  </p>
  <p className="text-gray-600 mt-2">
    لمعرفة المزيد من المنتجات تواصل معنا عبر واتساب
  </p>

  <a
    href="https://wa.me/905360211145"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition text-base"
  >
    📲 تواصل عبر واتساب
  </a>
</motion.div>

  </div>
</section>

{/* WHY US SECTION */}
<section
  id="why-us"
  className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b  py-20 px-6"
>
  {/* Başlık */}
<motion.h2
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="text-3xl md:text-4xl font-extrabold text-green-700 mb-4 text-center"
>
  لماذا تختار منتجاتنا الطبيعية؟
</motion.h2>

<motion.p
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ delay: 0.3, duration: 0.8 }}
  className="text-lg md:text-xl text-gray-600 mb-16 text-center max-w-2xl mx-auto leading-relaxed"
>
  نحن لا نقدم مجرد منتجات… بل أسلوب حياة صحي متوازن، 
  يجمع بين الطبيعة والجودة والخبرة العالمية.
</motion.p>


  {/* Kartlar */}
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl ">
    {[
      {
        icon: "🌱",
        title: "طبيعية 100%",
        desc: "منتجات عضوية مستخلصة من الطبيعة للحفاظ على صحتك.",
      },
      {
        icon: "🛡️",
        title: "جودة عالية",
        desc: "مضمونة ومعتمدة عالمياً بمعايير الجودة.",
      },
      {
        icon: "⚡",
        title: "طاقة وصحة",
        desc: "تمنحك توازن طبيعي وحيوية في حياتك اليومية.",
      },
{
  icon: "📊",
  title: "نتائج مثبتة",
  desc: "آلاف العملاء حول العالم شهدوا بفوائد منتجاتنا الطبيعية."
}


    ].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.2, duration: 0.8 }}
        whileHover={{ scale: 1.08, rotate: 1 }}
        className="relative bg-white/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl"
      >
        {/* Icon circle */}
        <div className="w-20 h-20 flex items-center justify-center rounded-full bg-green-100 text-4xl shadow-md mb-6">
          {item.icon}
        </div>
        <h3 className="text-xl font-bold text-green-800">{item.title}</h3>
        <p className="mt-3 text-gray-700 leading-relaxed">{item.desc}</p>
      </motion.div>
    ))}
  </div>
</section>


<section id="about-contact" className="relative py-20 px-6 bg-gradient-to-b from-white via-white to-green-50">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* HAKKIMIZDA */}
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-lg p-8 min-h-[380px]"
    >
<h2 className="text-2xl font-bold text-green-700 mb-6 flex items-center justify-center gap-2">
  <Building2 className="w-7 h-7 text-green-700" /> من نحن
</h2>


<p className="text-gray-600 leading-relaxed text-center text-base">
  في <span className="font-bold">المنارة </span> نضع صحتك وراحتك في المقدمة.  
  نعمل على تقديم <span className="font-bold">منتجات DXN الطبيعية</span> المعتمدة عالميًا،  
  لنمنحك أسلوب حياة متوازن وصحي قائم على الطبيعة والجودة.
</p>

<p className="text-gray-600 mt-4 leading-relaxed text-center text-base">
  رسالتنا هي نشر ثقافة العيش الصحي وبناء ثقة دائمة مع عملائنا  
  من خلال منتجات طبيعية عالية الجودة وخدمة مميزة. 🌿
</p>

    </motion.div>

    {/* İLETİŞİM FORMU */}
    <ContactForm />
  </div>
</section>


{/* FOOTER */}
{/* FOOTER (Modern & İnce) */}
<footer className="bg-gradient-to-r from-green-700 to-green-900 text-white py-6 ">
  <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3">
    
    {/* Menü */}
    <ul className="flex gap-6 text-sm font-medium">
      <li><a href="#hero" className="hover:text-green-300 transition">الرئيسية</a></li>
      <li><a href="#products" className="hover:text-green-300 transition">منتجاتنا</a></li>
      <li><a href="#about-contact" className="hover:text-green-300 transition">من نحن</a></li>
      <li><a href="#about-contact" className="hover:text-green-300 transition">اتصل بنا</a></li>
    </ul>

    {/* Sosyal Medya */}
{/* Sosyal Medya */}
<div className="flex gap-4 mt-2">
  <a
    href="https://wa.me/905360211145"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-white/90 text-green-700 p-2 rounded-full hover:bg-white transition transform hover:scale-110"
    aria-label="WhatsApp"
  >
    <MessageCircle className="w-5 h-5" />
  </a>

 {/* Instagram */}
<a
  href="https://www.instagram.com/elmanaraticaret?igsh=eXdlbDFtbHl0NHpz"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/90 text-green-700 p-2 rounded-full hover:bg-white transition transform hover:scale-110"
  aria-label="Instagram"
>
  <Instagram className="w-5 h-5" />
</a>

{/* TikTok */}
<a
  href="https://vt.tiktok.com/ZSDgnue22/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/90 text-green-700 p-2 rounded-full hover:bg-white transition transform hover:scale-110"
  aria-label="TikTok"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M448,209.9a210,210,0,0,1-122.2-39.2V370.6a141.4,141.4,0,1,1-99.3-134v84.7a58.2,58.2,0,1,0,41.1,55.3V0h80.3A129.5,129.5,0,0,0,448,128.6Z"/>
  </svg>
</a>

  <a
    href="https://www.facebook.com/share/1A2TVecGzj/"
    className="bg-white/90 text-green-700 p-2 rounded-full hover:bg-white transition transform hover:scale-110"
    aria-label="Facebook"
  >
    <Facebook className="w-5 h-5" />
  </a>

{/* YouTube */}
<a
  href="https://youtube.com/@elmanaraticaretmuhammedelhusey?si=cNxNLxpxq_P9moyd"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white/90 text-green-700 p-2 rounded-full hover:bg-white transition transform hover:scale-110"
  aria-label="YouTube"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.4-48.6C465.4 64 288 64 288 64s-177.4 0-213.3 11.5c-23.6 6.3-42.1 24.9-48.4 48.6C16 160.1 16 256 16 256s0 95.9 10.3 131.9c6.3 23.7 24.8 42.3 48.4 48.6C110.6 448 288 448 288 448s177.4 0 213.3-11.5c23.6-6.3 42.1-24.9 48.4-48.6C560 351.9 560 256 560 256s0-95.9-10.3-131.9zM232 336V176l142 80-142 80z"/>
  </svg>
</a>


</div>
    {/* Alt Satır */}
    <div className="mt-3 text-xs text-gray-300 text-center">
      © 2025 المنارة للتجارة - جميع الحقوق محفوظة
    </div>
  </div>
</footer>


      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905360211145"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition transform hover:scale-110 animate-bounce z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </a>

      {/* Floating Email Button */}
      <a
        href="mailto:elmanara@almanaraticaret.com"
        className="fixed bottom-6 left-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition transform hover:scale-110 animate-bounce z-50"
      >
        <Mail className="w-6 h-6" />
      </a>
    </main>
  );
}
