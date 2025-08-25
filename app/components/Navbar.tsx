// app/components/Navbar.tsx
"use client";
import { Bell, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-16 bg-white/10 backdrop-blur-xl border-b border-white/10 flex items-center justify-end px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-white/10 rounded-lg transition">
          <Bell className="text-white" size={20} />
        </button>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-xl">
          <User size={18} className="text-white/80" />
          <span className="text-sm">Admin</span>
        </div>
      </div>
    </header>
  );
}
