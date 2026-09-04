import type { Metadata } from "next";
import { Harmattan, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Sidebar } from "@/components/sidebar";
import { MobileNav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const harmattan = Harmattan({
  variable: "--font-harmattan",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      className={`${harmattan.variable} ${geistMono.variable} h-full antialiased`}
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
              <main className="flex min-h-[calc(100vh-2.5rem)] flex-col overflow-hidden rounded-3xl border border-border bg-card backdrop-blur-md">
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
