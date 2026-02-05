import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bain Forge",
  description: "Bain Forge - Office Selector",
};

import { OfficeProvider } from '@/contexts/OfficeContext';

// ... (Metadata stays same)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <OfficeProvider>
          {children}
        </OfficeProvider>
      </body>
    </html>
  );
}
