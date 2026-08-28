import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lanz Miguel Acosta — UI/UX Designer & AI Automation",
  description: "Portfolio of Lanz Miguel Acosta, a UI/UX designer and AI automation builder creating useful digital solutions from real operational problems.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body>{children}</body></html>;
}
