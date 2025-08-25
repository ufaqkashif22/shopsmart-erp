//D:\ecommerce\ecomerce-fullstack\app\dashboard\page.tsx
"use client";
import { useEffect, useState } from "react";
import { api, Stats } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, ShoppingCart, Users, Boxes } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.stats
      .get()
      .then(setStats)
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    {
      title: "Sales",
      value: stats ? `$${stats.sales}` : "—",
      icon: <DollarSign className="h-6 w-6" />,
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "Orders",
      value: stats ? String(stats.orders) : "—",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Customers",
      value: stats ? String(stats.customers) : "—",
      icon: <Users className="h-6 w-6" />,
      color: "from-green-400 to-green-600",
    },
    {
      title: "Inventory",
      value: stats ? String(stats.inventory) : "—",
      icon: <Boxes className="h-6 w-6" />,
      color: "from-pink-400 to-pink-600",
    },
  ];

  const data = [
    { name: "Jan", uv: 400 },
    { name: "Feb", uv: 300 },
    { name: "Mar", uv: 600 },
    { name: "Apr", uv: 200 },
    { name: "May", uv: 500 },
    { name: "Jun", uv: 700 },
  ];

 return (
  <div className="p-6 bg-transparent">
    <h1 className="text-2xl font-bold text-white mb-6">ERP Dashboard</h1>

    {/* Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {cards.map((stat, i) => (
        <Card
          key={i}
          className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg hover:scale-105 transition"
        >
          <CardHeader className="flex flex-row items-center justify-between pb-1">
            <CardTitle className="text-sm font-medium text-white">
              {stat.title}
            </CardTitle>
            <div
              className={`p-2 rounded-full bg-gradient-to-r ${stat.color} text-white`}
            >
              {stat.icon}
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xl font-bold text-white">
              {loading ? "Loading…" : stat.value}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>

    {/* Chart */}
    <div className="mt-6">
      <Card className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-4">
        <h2 className="text-lg font-bold text-white mb-3">
          Monthly Performance
        </h2>
        <div className="h-56"> {/* reduced from h-72 */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="name" stroke="#ddd" />
              <YAxis stroke="#ddd" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(8px)",
                  color: "#fff",
                }}
              />
              <Bar dataKey="uv" fill="url(#colorUv)" radius={[6, 6, 0, 0]} />
              <defs>
                <linearGradient id="colorUv" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  </div>
);
}
