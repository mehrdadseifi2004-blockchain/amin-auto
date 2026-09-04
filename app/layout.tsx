import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "تعمیرگاه خودرو امین | مشهد",
  description: "تعمیرگاه خودرو امین در بلوار سیدرضی مشهد؛ عیب‌یابی، تعمیر و سرویس خودرو.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fa" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
