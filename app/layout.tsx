import type { Metadata, Viewport } from "next";
import { DM_Serif_Display, Noto_Sans_KR, Noto_Serif_KR } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  display: "swap",
});

const serif = Noto_Serif_KR({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-serif",
  display: "swap",
});

const display = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// 공유 미리보기(og:image)는 절대 주소가 필요합니다. 배포 도메인을 NEXT_PUBLIC_SITE_URL 환경변수로 지정하세요.
// 예) NEXT_PUBLIC_SITE_URL=https://orsay.artfrnd.com npm run build
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: "오르세 미술관전 · 지금을 사는 기쁨 · 작품 목록",
  description:
    "도쿄도 미술관 개관 100주년 기념 「오르세 미술관 소장 — 지금을 사는 기쁨: 그럼에도 하루하루는 사랑스럽다」(2026.11.14–2027.3.28) 출품작 112점 한국어 작품 목록과 도슨트 해설",
  openGraph: {
    title: "오르세 미술관전 — 지금을 사는 기쁨 · 한국어 작품 목록",
    description: "그럼에도 하루하루는 사랑스럽다 — 도쿄도 미술관",
    images: ["/img/poster.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ef9e9d",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" className={`${sans.variable} ${serif.variable} ${display.variable}`}>
      <body>{children}</body>
    </html>
  );
}
