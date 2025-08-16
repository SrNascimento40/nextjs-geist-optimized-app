import type { Metadata } from "next";
import { Inter, Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-playfair"
});

const dancing = Dancing_Script({ 
  subsets: ["latin"],
  variable: "--font-dancing"
});

export const metadata: Metadata = {
  title: "Matheus Rocha - Psicólogo | Terapia Cognitivo-Comportamental",
  description: "Psicólogo especializado em Terapia Cognitivo-Comportamental (TCC). Atendimento online com abordagem acolhedora e personalizada.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} ${dancing.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
