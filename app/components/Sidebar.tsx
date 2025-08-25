// components/Sidebar.tsx
"use client";
import { Home, ShoppingCart, Users, Boxes } from "lucide-react";
import Link from "next/link";

const menu = [
  { name: "Dashboard", icon: <Home />, href: "/" },
  { name: "Orders", icon: <ShoppingCart />, href: "/orders" },
  { name: "Customers", icon: <Users />, href: "/customers" },
  { name: "Inventory", icon: <Boxes />, href: "/inventory" },
];

export default function Sidebar() {
  return (
    <aside className="glass fixed left-0 top-0 h-screen w-60 p-6 flex flex-col gap-4">
      <h1 className="text-xl font-bold text-white mb-6">ShopSmart</h1>
      <nav className="flex flex-col gap-2">
        {menu.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="flex items-center gap-3 text-gray-300 hover:text-white hover:bg-white/10 p-2 rounded-lg transition"
          >
            {item.icon}
            <span
              className={`${
                item.name === "Dashboard" ? "sidebar-active" : ""
              }`}
            >
              {item.name}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
