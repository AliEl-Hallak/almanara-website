

"use client";
import { motion } from "framer-motion";
import JoinUsForm from "../components/JoinUsForm";
import Image from "next/image";

export default function JoinUsPage() {
  return (
    <main dir="rtl" className="relative bg-white overflow-hidden">
      {/* Arka Plan */}
      <div className="absolute inset-0">
        <Image
          src="/ArkaResim.png"
          alt="خلفية طبيعية"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-green-200/90 via-white/90 to-white"></div>
      </div>

      {/* İçerik */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-16">
        {/* Başlık */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-extrabold text-green-800 text-center drop-shadow-lg"
        >
          🌿 انضم إلى عائلة{" "}
          <span className="text-green-600">المنارة للتجارة</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-4 text-gray-700 text-lg md:text-xl text-center max-w-2xl leading-relaxed"
        >
          اكتشف معنا فرص النجاح والتسويق مع منتجات DXN الصحية
          🌱، وكن جزءًا من فريق يسعى نحو حياة طبيعية وصحية أفضل.
        </motion.p>

        {/* Form */}
        <div className="mt-10 w-full max-w-2xl">
          <JoinUsForm />
        </div>
      </section>
    </main>
  );
}
