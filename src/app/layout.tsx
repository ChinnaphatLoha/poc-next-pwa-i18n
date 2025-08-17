import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My PWA App",
  description: "Next.js PWA Example",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
  icons: {
    icon: "/icons/icon-192x192.png",
    apple: "/icons/icon-192x192.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
