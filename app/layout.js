import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ Metadata (title, description, favicon vs.)
export const metadata = {
  title: "EL MANARA TICARET | DXN",
  description: "مع DXN، تمتع بمنتجات طبيعية متنوعة: من المكملات والمشروبات إلى العناية بالجمال. صحتك تبدأ هنا مع المنارة للتجارة.",
  icons: {
    icon: "/ELManaraLogo.png",
    shortcut: "/ELManaraLogo.png",
    apple: "/ELManaraLogo.png",
  },
};

// ✅ Tek RootLayout export
export default function RootLayout({ children }) {
  return (
    <html lang="ar">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
