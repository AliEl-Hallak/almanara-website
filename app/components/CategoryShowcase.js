"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function CategoryShowcase() {
  const categories = [
    { img: "/Categorey_Images/1.png" },
    { img: "/Categorey_Images/2.png" },
    { img: "/Categorey_Images/3.png" },
    { img: "/Categorey_Images/4.png" },
    { img: "/Categorey_Images/5.png" },
    { img: "/Categorey_Images/6.png" },
  ];

  const [index, setIndex] = useState(0);

  // Otomatik kategori geçişi
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  bg-transparent">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center px-6">
        {/* Resim container büyütüldü */}
        <div className="relative w-80 h-80 md:w-[450px] md:h-[450px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="absolute"
            >
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative"
              >
                <Image
                  src={categories[index].img}
                  alt="category"
                  width={450}   // büyütüldü
                  height={450}  // büyütüldü
                  className="object-contain drop-shadow-2xl"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
