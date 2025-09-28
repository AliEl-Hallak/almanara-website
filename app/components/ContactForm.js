"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail,Send} from "lucide-react";

export default function ContactForm() {
  const form = useRef();
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  // Email kontrol fonksiyonu
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Input değiştiğinde canlı kontrol
  const handleChange = (e) => {
    const { name, value } = e.target;
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "الاسم مطلوب";
      else if (value.trim().length < 2) message = "الاسم قصير جداً";
    }

    if (name === "email") {
      if (!value.trim()) message = "البريد الإلكتروني مطلوب";
      else if (!isValidEmail(value.trim()))
        message = "البريد الإلكتروني غير صالح";
    }

    if (name === "message") {
      if (!value.trim()) message = "الرسالة مطلوبة";
      else if (value.trim().length < 5) message = "الرسالة قصيرة جداً";
    }

setErrors((prev) => ({
  ...prev,
  [name]: message,   // input’un kendi name’i (name, email, message) direkt alınır
}));

  };

  // Submit işlemi
  const sendEmail = (e) => {
    e.preventDefault();

    const formEl = form.current;
    const name = formEl.name .value.trim();
    const email = formEl.email.value.trim();
    const message = formEl.message.value.trim();

    const nextErrors = {
      name: !name
        ? "الاسم مطلوب"
        : name.length < 2
        ? "الاسم قصير جداً"
        : "",
      email: !email
        ? "البريد الإلكتروني مطلوب"
        : !isValidEmail(email)
        ? "البريد الإلكتروني غير صالح"
        : "",
      message: !message
        ? "الرسالة مطلوبة"
        : message.length < 5
        ? "الرسالة قصيرة جداً"
        : "",
    };

    setErrors(nextErrors);

    if (nextErrors.name || nextErrors.email || nextErrors.message) return;

    emailjs
      .sendForm(
        "service_ahzo2f2",
        "template_44ljua8",
        form.current,
        "ZOVajJmaJMUq5Xtcp"
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 4000);
        },
        (error) => {
          console.error("FAILED...", error.text);
        }
      );
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-lg p-8 min-h-[380px]"
    >
<h2 className="flex items-center justify-center gap-3 text-2xl font-extrabold text-green-700 mb-6">
  <span className="p-2 ">
    <Mail className="w-6 h-6" />
  </span>
  <span>تواصل معنا</span>
</h2>


      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        {/* İsim */}
        <div>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            type="text"
            name="name"
            placeholder="الاسم الكامل"
            onChange={handleChange}
            className={`w-full rounded-lg px-4 py-3 border ${
              errors.name
                ? "border-red-400"
                : errors.name === ""
                ? "border-gray-300"
                : "border-green-400"
            } text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400`}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            type="text"
            name="email"
            placeholder="البريد الإلكتروني"
            dir="ltr"
            onChange={handleChange}
            className={`w-full rounded-lg px-4 py-3 border ${
              errors.email
                ? "border-red-400"
                : errors.email === ""
                ? "border-gray-300"
                : "border-green-400"
            } text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400`}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Mesaj */}
        <div>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            rows="3"
            name="message"
            placeholder="رسالتك..."
            onChange={handleChange}
            className={`w-full rounded-lg px-4 py-3 border ${
              errors.message
                ? "border-red-400"
                : errors.message === ""
                ? "border-gray-300"
                : "border-green-400"
            } text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400`}
          ></motion.textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          )}
        </div>

        {/* Gönder Butonu */}
   <motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  type="submit"
  className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition flex items-center justify-center gap-2"
>
  <Send className="w-5 h-5" />
  إرسال الرسالة
</motion.button>

        {success && (
          <p className="mt-4 text-green-600 font-semibold text-center">
            ✅ تم إرسال رسالتك بنجاح!
          </p>
        )}
      </form>
    </motion.div>
  );
}