"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const inventory = [
  { id: 1, name: "Laptop", stock: 15, price: "$1200" },
  { id: 2, name: "Phone", stock: 40, price: "$700" },
  { id: 3, name: "Headphones", stock: 5, price: "$100" },
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Inventory</h1>
      
      <Card>
        <CardHeader>
          <CardTitle>Stock Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b">
                <th className="p-3">Product</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b hover:bg-neutral-100">
                  <td className="p-3">{item.name}</td>
                  <td className="p-3">
                    <span
                      className={`px-2 py-1 rounded text-sm font-medium ${
                        item.stock > 20
                          ? "bg-green-100 text-green-700"
                          : item.stock > 10
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {item.stock} in stock
                    </span>
                  </td>
                  <td className="p-3">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
}
