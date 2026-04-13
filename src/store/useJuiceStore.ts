import { create } from 'zustand';

export interface Juice {
  id: string;
  name: string;
  description: string;
  price: number;
  image?: string;
}

interface CartItem extends Juice {
  quantity: number;
}

interface JuiceStore {
  juices: Juice[];
  cart: CartItem[];
  setJuices: (juices: Juice[]) => void;
  addToCart: (juice: Juice) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const useJuiceStore = create<JuiceStore>((set) => ({
  juices: [], // Akan diisi nanti berdasarkan daftar 15 jus
  cart: [],
  setJuices: (juices) => set({ juices }),
  addToCart: (juice) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === juice.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === juice.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...juice, quantity: 1 }] };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ cart: [] }),
}));
