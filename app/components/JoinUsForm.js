"use client";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { UserPlus, Send } from "lucide-react";
import { IMaskInput } from "react-imask";

export default function JoinUsForm() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Email kontrol regex
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  // İsim sadece harf
  const isValidName = (name) => /^[\p{L}\s]+$/u.test(name);
  // Telefon sadece rakam 8–15 arası
  const isValidPhone = (phone) => /^\d{8,15}$/.test(phone);
  // 18 yaş kontrol
  const isAdult = (dob) => {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
    return age >= 18;
  };

  // Input değiştikçe kontrol
  const handleChange = (e) => {
    const { name, value } = e.target;
    let message = "";

    if (name === "name") {
      if (!value.trim()) message = "الاسم مطلوب";
      else if (!isValidName(value.trim())) message = "الاسم يجب أن يحتوي على أحرف فقط";
      else if (value.trim().length < 2) message = "الاسم قصير جداً";
    }

    if (name === "email") {
      if (!value.trim()) message = "البريد الإلكتروني مطلوب";
      else if (!isValidEmail(value.trim())) message = "البريد الإلكتروني غير صالح";
    }

    if (name === "phone") {
      if (!value.trim()) message = "رقم الهاتف مطلوب";
      else if (!isValidPhone(value.trim())) message = "الرقم يجب أن يكون 8-15 أرقام";
    }

    if (name === "dob") {
      if (!value.trim()) message = "تاريخ الميلاد مطلوب";
      else if (!isAdult(value)) message = "يجب أن يكون العمر 18 فما فوق";
    }

    if (name === "address") {
      if (!value.trim()) message = "العنوان مطلوب";
      else if (value.trim().length < 5) message = "العنوان قصير جداً";
    }

    if (name === "nationality") {
      if (!value.trim()) message = "الجنسيّة مطلوبة";
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  // Submit
  const sendEmail = (e) => {
    e.preventDefault();
    const formEl = form.current;

    const values = {
      name: formEl.name.value.trim(),
      email: formEl.email.value.trim(),
      phone: formEl.phone.value.trim(),
      dob: formEl.dob.value.trim(),
      address: formEl.address.value.trim(),
      nationality: formEl.nationality.value.trim(),
        tc: formEl.tc?.value.trim() || "فارغ"

    };

    const nextErrors = {
      name: !values.name
        ? "الاسم مطلوب"
        : !isValidName(values.name)
        ? "الاسم يجب أن يحتوي على أحرف فقط"
        : values.name.length < 2
        ? "الاسم قصير جداً"
        : "",
      email: !values.email
        ? "البريد الإلكتروني مطلوب"
        : !isValidEmail(values.email)
        ? "البريد الإلكتروني غير صالح"
        : "",
      phone: !values.phone
        ? "رقم الهاتف مطلوب"
        : !isValidPhone(values.phone)
        ? "الرقم يجب أن يكون 8-15 أرقام"
        : "",
      dob: !values.dob
        ? "تاريخ الميلاد مطلوب"
        : !isAdult(values.dob)
        ? "يجب أن يكون العمر 18 فما فوق"
        : "",
      address: !values.address
        ? "العنوان مطلوب"
        : values.address.length < 5
        ? "العنوان قصير جداً"
        : "",
      nationality: !values.nationality ? "الجنسيّة مطلوبة" : "",
    };

    setErrors(nextErrors);
    if (Object.values(nextErrors).some((err) => err)) return;

    // EmailJS gönder
    emailjs
      .sendForm("service_ahzo2f2", "template_3c72uij", form.current, "ZOVajJmaJMUq5Xtcp")
      .then(() => {
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 4000);
      })
      .catch((error) => console.error("FAILED...", error.text));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl p-8 max-w-lg mx-auto"
    >
      <h2 className="flex items-center justify-center gap-3 text-2xl font-bold text-green-700 mb-6">
        <UserPlus className="w-7 h-7" />
        <span>انضم إلينا</span>
      </h2>

      <form ref={form} onSubmit={sendEmail} className="space-y-3">
        <Input name="name" placeholder="الاسم الكامل" error={errors.name} onChange={handleChange} />
        <Input name="email" placeholder="البريد الإلكتروني"  error={errors.email} onChange={handleChange} />
        <Input name="phone" placeholder="رقم الهاتف"  error={errors.phone} onChange={handleChange} />
        <Input
          name="tc"
          placeholder="الرقم الوطني (اختياري)"
          onChange={handleChange}
        />

        {/* Doğum tarihi */}
    {/* Doğum tarihi - react-imask */}
<div>
  <IMaskInput
    mask="0000-00-00"
  placeholder="تاريخ الميلاد (YYYY-MM-DD)"
    name="dob"
    onAccept={(value) => handleChange({ target: { name: "dob", value } })}
    className={`w-full rounded-lg px-3 py-2 border ${
      errors.dob ? "border-red-400" : errors.dob === "" ? "border-gray-300" : "border-green-400"
    } bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm`}
  />
  {errors.dob && <p className="mt-1 text-xs text-red-600">{errors.dob}</p>}
</div>


        <Input name="nationality" placeholder="الجنسيّة" error={errors.nationality} onChange={handleChange} />

        {/* Adres büyük kutu */}
        <div>
          <motion.textarea
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.15 }}
            name="address"
            rows="3"
            placeholder="العنوان الكامل"
            onChange={handleChange}
            className={`w-full rounded-lg px-3 py-2 border ${
              errors.address ? "border-red-400" : errors.address === "" ? "border-gray-300" : "border-green-400"
            } bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm`}
          ></motion.textarea>
          {errors.address && <p className="mt-1 text-xs text-red-600">{errors.address}</p>}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-green-700 transition flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          إرسال الطلب
        </motion.button>
        {success && (
          <p className="mt-3 text-green-600 font-semibold text-center text-sm">
            ✅ تم إرسال طلبك بنجاح!
          </p>
        )}
      </form>
    </motion.div>
  );
}

// Input component
function Input({ name, type = "text", placeholder, error, onChange, dir }) {
  return (
    <div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.15 }}
        type={type}
        name={name}
        placeholder={placeholder}
        dir={dir}
        onChange={onChange}
        className={`w-full rounded-lg px-3 py-2 border ${
          error ? "border-red-400" : error === "" ? "border-gray-300" : "border-green-400"
        } bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm appearance-none`}
      />
      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </div>
  );
}
