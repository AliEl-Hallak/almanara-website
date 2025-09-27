"use client";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function JoinUs() {
  return (
    <section id="join-us" className="relative py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        {/* Grup animasyonu */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Başlık */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700">
            🚀 هل ترغب بالانضمام إلينا؟
          </h2>

          {/* Açıklama */}
          <p className="text-gray-600 text-lg leading-relaxed">
            مع المنارة ستتعلم كيف تبني عملك التجاري وتحقق دخلاً إضافياً من خلال منتجات
            صحية وطبيعية. انضم إلينا اليوم وابدأ رحلتك نحو النجاح 🌿
          </p>

          {/* WhatsApp Butonu */}
          <a
            href="https://wa.me/905360211145"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition text-lg font-semibold"
          >
            <FaWhatsapp className="w-6 h-6" />
            تواصل عبر واتساب
          </a>
        </motion.div>
      </div>
    </section>
  );
}
