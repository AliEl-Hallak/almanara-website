"use client";
import { motion } from "framer-motion";
import { FaWhatsapp, FaUserEdit } from "react-icons/fa";
import Link from "next/link";

export default function JoinUs() {
  return (
    <section id="join-us" className="relative py-16 px-6 bg-gradient-to-b ">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center gap-6"
        >
          {/* Başlık */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-green-700">
             هل ترغب بالانضمام إلينا؟
          </h2>

          {/* Açıklama */}
          <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
            مع <span className="font-bold text-green-700">المنارة </span> 
            ستتعلم كيف تبني عملك التجاري وتحقق دخلاً إضافياً مع منتجات DXN الطبيعية.  
            اختر الطريقة الأنسب لك للانضمام الآن
          </p>

          {/* Butonlar */}
          <div className="flex flex-col md:flex-row gap-4 mt-4">
         

            {/* Form Butonu */}
            <Link
              href="/joinus" // JoinUsForm sayfasına yönlendirme
              className="inline-flex items-center gap-3 bg-white text-green-700 border border-green-600 px-6 py-3 rounded-full shadow-md hover:bg-green-50 transition text-lg font-semibold"
            >
              <FaUserEdit className="w-6 h-6" />
              املأ استمارة الانضمام
            </Link>
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
