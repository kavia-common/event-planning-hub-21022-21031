import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Planner | Ocean Professional",
  description: "Discover, book, and manage event planning services with a modern, minimalist interface.",
};

function TopNav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-primary/90 to-primary text-white grid place-items-center shadow-sm">
            <span className="font-semibold">EB</span>
          </div>
          <span className="text-xl font-semibold text-text">EventBook</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link className="nav-link" href="/events">Events</Link>
          <Link className="nav-link" href="/bookings">My Bookings</Link>
          <Link className="nav-link" href="/profile">Profile</Link>
          <Link className="btn btn-primary" href="/login">Sign in</Link>
        </nav>
        <div className="md:hidden">
          {/* Simple mobile menu icon (non-interactive placeholder) */}
          <div className="h-9 w-9 rounded-lg grid place-items-center border border-gray-200 text-text/80">≡</div>
        </div>
      </div>
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-text antialiased min-h-screen">
        <TopNav />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
        <footer className="border-t border-gray-200 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">© {new Date().getFullYear()} EventBook. All rights reserved.</p>
            <div className="flex items-center gap-4 text-sm">
              <Link href="/about" className="hover:text-primary transition-colors">About</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
              <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
