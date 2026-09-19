import type { Metadata } from "next";
import { Montserrat, Playfair_Display, DM_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivangi Jadon",
  description:
    "Lead Technical Consulting Engineer at Cisco, working on automation, AI/ML tooling, and cloud systems. Projects and writing.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Sidebar />
          <MobileNav />

          <div className="lg:pl-60">
            <div className="p-3 sm:p-5">
              <main className="flex min-h-[calc(100vh-2.5rem)] flex-col overflow-hidden rounded-sm border border-border bg-card">
                <div className="flex-1">{children}</div>
                <Footer />
              </main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
