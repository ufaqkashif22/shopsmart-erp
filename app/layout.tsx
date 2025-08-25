// D:\ecommerce\ecomerce-fullstack\app\layout.tsx
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Package, ShoppingCart, Users, Settings } from "lucide-react";

export const metadata = {
  title: "ShopSmart",
  description: "ERP-style dashboard demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative min-h-screen text-neutral-900 antialiased">

        {/* 🌈 Subtle Animated Background */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 animate-gradient-slow"></div>
        <div className="fixed inset-0 -z-10 opacity-20"
          style={{
            backgroundImage: "url('/patterns/waves.svg')", // 👈 ek abstract wave pattern dal do public/patterns me
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        {/* 🟪 Sidebar */}
        <aside className="fixed top-0 left-0 h-full w-64 bg-gradient-to-b from-purple-900/70 to-blue-900/70 backdrop-blur-xl border-r border-white/20 shadow-2xl">
          <div className="p-6 font-bold text-2xl text-white">ShopSmart</div>
          <nav className="flex flex-col gap-3 p-4 text-sm">
            <NavItem href="/dashboard" icon={<LayoutDashboard size={18} />} label="Dashboard" />
            <NavItem href="/orders" icon={<ShoppingCart size={18} />} label="Orders" />
            <NavItem href="/products" icon={<Package size={18} />} label="Products" />
            <NavItem href="/customers" icon={<Users size={18} />} label="Customers" />
            <NavItem href="/settings" icon={<Settings size={18} />} label="Settings" />
          </nav>
        </aside>

        {/* 🧊 Main Content */}
        <main className="ml-64 p-8">
          <div className="rounded-2xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-8 transition">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <Link
      href={href}
      className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all group"
    >
      <span className="group-hover:scale-110 transition-transform">{icon}</span>
      <span>{label}</span>
    </Link>
  );
}
