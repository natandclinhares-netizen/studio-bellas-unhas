import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Débora | Studio Bellas Unhas",
  description:
    "Studio Bellas Unhas — beleza, cuidado e delicadeza em cada detalhe. Agende seu horário com a Débora.",
  metadataBase: new URL("https://studio-bellas-unhas.vercel.app"),
  openGraph: {
    title: "Débora | Studio Bellas Unhas",
    description:
      "Beleza em cada detalhe. Conheça o Studio Bellas Unhas e agende seu horário.",
    url: "https://studio-bellas-unhas.vercel.app",
    siteName: "Studio Bellas Unhas",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/debora studio/og-image-square.png",
        width: 1254,
        height: 1254,
        alt: "Débora — Studio Bellas Unhas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Débora | Studio Bellas Unhas",
    description:
      "Beleza em cada detalhe. Conheça o Studio Bellas Unhas.",
    images: ["/debora studio/og-image-square.png"],
  },
  icons: {
    icon: "/debora studio/logo debora.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}




