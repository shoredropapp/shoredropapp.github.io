export interface CartItem {
  id: string;
  type: 'package' | 'individual';
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
  packageItems?: string[];
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
  totalItems: number;
  rentalDate?: Date;
  deliveryLocation?: string;
  specialInstructions?: string;
}

export interface CartContextType {
  cart: CartState;
  addPackage: (pkg: any) => void;
  addItem: (item: any, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  setRentalDate: (date: Date) => void;
  setDeliveryLocation: (location: string) => void;
  setSpecialInstructions: (instructions: string) => void;
}