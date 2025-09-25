"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { MessageCircle ,Mail } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import Particles from "react-tsparticles";
   import { ChevronDown } from "lucide-react";
// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export default function Home() {
  return (
    <main dir="rtl" className="relative h-screen overflow-hidden bg-green-50">
      {/* Particles Background */}
      <Particles
        className="absolute inset-0"
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

      {/* Background Image */}
      <Image
        src="/Logo.png"
        alt="خلفية طبيعية"
        fill
        className="object-cover opacity-40"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-green-900/30"></div>

      {/* Content Split into 2 columns */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 h-full">
        {/* LEFT SIDE: Hero */}
        <div className="  flex flex-col items-center justify-center text-center px-6">
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
                "المنارة للتجارة", 2000,
                "منتجات DXN الطبيعية", 2000,
                "الصحة تبدأ من الطبيعة", 2000,
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
            href="/products"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 md:mt-8 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition text-base md:text-lg"
          >
            🌿 اكتشف منتجاتنا
          </motion.a>

        </div>

  <div className="mt-[-20px] md:mt-20 w-full">
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
                  <h3 className=" text-2xl font-bold text-green-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-1">{product.desc}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905360211145"
        target="_blank"
        className="fixed bottom-6 right-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition transform hover:scale-110 animate-bounce z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
{/* Floating Email Button - Bottom Left */}
<a
  href="mailto:elmanara@almanaraticaret.com"
        className="fixed bottom-6 left-6 bg-green-600 text-white p-4 rounded-full shadow-xl hover:bg-green-700 transition transform hover:scale-110 animate-bounce z-50"
>
  <Mail className="w-6 h-6" />
</a>

{/* Scroll Down Indicator */}
<div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-green-700">
  {/* Icon */}
  <ChevronDown className="w-7 h-7 animate-bounce" />
  
  {/* Text */}
  <span className="text-sm font-medium mt-1 text-gray-700">
    انزل لاكتشاف منتجاتنا الطبيعية
  </span>
</div>

    </main>
  );
}
