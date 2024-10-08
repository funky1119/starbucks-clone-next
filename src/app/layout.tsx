import type { Metadata } from "next";
import Navigation from "./components/navigation";
import "./globals.scss";
import { IconDescriptor } from "next/dist/lib/metadata/types/metadata-types";
export interface CustomIconDescriptorType extends IconDescriptor {
  precedence?: string;
}
const icon: CustomIconDescriptorType = {
  rel: "stylesheet",
  url: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined",
  precedence: "default",
};

export const metadata: Metadata = {
  title: "Starbucks Coffee Korea",
  description: "Starbucks Coffee Korea App",
  openGraph: {
    type: "website",
    siteName: "Starbucks",
    title: "Starbucks Coffee Korea",
    description:
      "스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다.",
    images: {
      url: "/images/starbucks_seo.jpg",
    },
    url: "https://starbucks.co.kr",
  },
  twitter: {
    card: "summary",
    site: "Starbucks",
    title: "Starbucks Coffee Korea",
    description:
      "스타벅스는 세계에서 가장 큰 다국적 커피 전문점으로, 64개국에서 총 23,187개의 매점을 운영하고 있습니다.",
    images: {
      url: "/images/starbucks_seo.jpg",
    },
  },
  icons: {
    other: icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <header>
          <Navigation />
        </header>
        {children}
      </body>
    </html>
  );
}
