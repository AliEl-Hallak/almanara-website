"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MessageCircle, Mail,Instagram, Facebook } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
import { useState, useEffect } from "react";


// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
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
    <main dir="rtl" className="relative bg-white">
      {/* HERO */}
      <section id="hero" className="relative min-h-dvh">
        {/* BG image sadece HERO’da */}
        <Image
          src="/Logo.png"
          alt="خلفية طبيعية"
          fill
          className="object-cover opacity-20"
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
              <Image src="/Logo.png" alt="المنارة" width={600} height={100} />
            </motion.div>

            {/* Title Typing Effect */}
            <h1 className="mt-6 text-4xl md:text-5xl font-extrabold text-green-800 drop-shadow-lg">
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
              className="mt-4 text-lg md:text-xl text-gray-700 max-w-md mx-auto leading-relaxed"
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
          <div className="mt-[-16px] md:mt-0 w-full p-4 md:p-6 flex items-center justify-center">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 2500 }}
              loop={true}
              slidesPerView={1}
              className="w-full max-w-md"
            >
              {[
                {
                  name: "قهوة لينجزي السوداء",
                  desc: "قهوة طبيعية مدعمة بفطر الريشي",
                  img: "/1.png",
                },
                {
                  name: "مكمل غذائي ريشي",
                  desc: "مستخلص فطر جانوديرما لتعزيز المناعة",
                  img: "/2.png",
                },
                {
                  name: "شامبو جانوديرم",
                  desc: "شامبو طبيعي للعناية بالشعر",
                  img: "/1.png",
                },
              ].map((product, idx) => (
                <SwiperSlide key={idx}>
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center text-center cursor-pointer"
                    onClick={() => (window.location.href = "/products")}
                  >
                    <Image
                      src={product.img}
                      alt={product.name}
                      width={250}
                      height={250}
                      className="mx-auto drop-shadow-xl transition-transform"
                    />
                    <h3 className="text-2xl font-bold text-green-800">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 mt-1">{product.desc}</p>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

   {/* Scroll Down Indicator */}
        {showScroll && (
          <div className="absolute bottom-20 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-green-700 transition-opacity duration-500">
            <ChevronDown className="w-7 h-7 animate-bounce" />
            <span className="text-sm font-medium mt-1 text-gray-700">
              انزل لاكتشاف منتجاتنا الطبيعية
            </span>
          </div>
        )}
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
          { name: "قهوة لينجزي السوداء", desc: "قهوة طبيعية مدعمة بفطر الريشي", img: "/1.png" },
          { name: "مكمل غذائي ريشي", desc: "مستخلص فطر جانوديرما لتعزيز المناعة", img: "/2.png" },
          { name: "شامبو جانوديرم", desc: "شامبو طبيعي للعناية بالشعر", img: "/1.png" },
          { name: "معجون أسنان جانوديرم", desc: "معجون طبيعي لحماية اللثة والأسنان", img: "/2.png" },
          { name: "مشروم باودر", desc: "مسحوق الفطر للطبخ والمشروبات", img: "/1.png" },
          { name: "سبيرولينا", desc: "غذاء طبيعي غني بالبروتينات", img: "/2.png" },
          { name: "زيت جانو", desc: "زيت طبيعي لصحة أفضل", img: "/1.png" },
          { name: "كريم البشرة", desc: "ترطيب وحماية للبشرة", img: "/2.png" },
          { name: "شاي لينجزي", desc: "شاي طبيعي مهدئ", img: "/1.png" },
          { name: "كاكاو DXN", desc: "مشروب كاكاو صحي للطاقة", img: "/2.png" },
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

    </main>
  );
}
