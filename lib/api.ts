export const API = process.env.NEXT_PUBLIC_API_URL ?? "";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export const api = {
  products: {
    list: () => request<Product[]>("/products"),
  },
  orders: {
    list: () => request<OrderDTO[]>("/orders"),
    create: (payload: CreateOrderDTO) =>
      request<OrderDTO>("/orders", { method: "POST", body: JSON.stringify(payload) }),
    updateStatus: (id: string, status: string) =>
      request<OrderDTO>(`/orders/${id}`, { method: "PUT", body: JSON.stringify({ status }) }),
  },
  stats: {
    get: () => request<Stats>("/stats"),
  },
};

// Types
export type Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  category: string | { _id: string; name: string };
};

export type OrderDTO = {
  _id: string;
  user?: string;
  products: { product: string | Product; quantity: number }[];
  totalPrice: number;
  status: string;
  createdAt: string;
};

export type CreateOrderDTO = {
  products: { product: string; quantity: number }[];
  totalPrice: number;
};

export type Stats = {
  sales: number;
  orders: number;
  customers: number;
  inventory: number;
};
