# تعمیرگاه خودرو امین

Homepage پیاده‌سازی‌شده بر اساس طرح UI تولیدشده برای تعمیرگاه خودرو امین.

## اجرا

```bash
npm install
npm run dev
```

سپس:
`http://localhost:3000`

## تکنولوژی
- Next.js
- React
- TypeScript
- CSS
- Lucide React

## جایگزینی تصاویر واقعی
در حال حاضر بخش‌های تصویری با CSS ساخته شده‌اند تا پروژه بدون asset خارجی اجرا شود. برای نسخه نهایی، تصاویر واقعی تعمیرگاه و خودروها را داخل `public/images` قرار دهید و پس از آن می‌توان بخش‌های Hero، Services، Before/After و Workshop را با `next/image` جایگزین کرد.
