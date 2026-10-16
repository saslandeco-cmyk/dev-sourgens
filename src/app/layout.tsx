import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bois & Forêt — La scierie pour vos projets",
  description: "Bois pour terrasse, bardage, aménagement et construction. Conseils personnalisés pour les particuliers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr"><body>{children}</body></html>;
}
