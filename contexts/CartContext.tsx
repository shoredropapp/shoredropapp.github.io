"use client";

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartState, CartContextType, CartItem } from '../types/cart';
import { toast } from 'sonner';

const initialState: CartState = {
  items: [],
  totalAmount: 0,
  totalItems: 0,
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'SET_RENTAL_DATE'; payload: Date }
  | { type: 'SET_DELIVERY_LOCATION'; payload: string }
  | { type: 'SET_SPECIAL_INSTRUCTIONS'; payload: string }
  | { type: 'LOAD_CART'; payload: CartState };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let newItems;
      
      if (existingItem) {
        newItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        newItems = [...state.items, action.payload];
      }
      
      const totalAmount = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const totalItems = newItems.reduce((total, item) => total + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        totalAmount,
        totalItems,
      };
    }
    
    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => item.id !== action.payload);
      const totalAmount = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const totalItems = newItems.reduce((total, item) => total + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        totalAmount,
        totalItems,
      };
    }
    
    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      ).filter(item => item.quantity > 0);
      
      const totalAmount = newItems.reduce((total, item) => total + (item.price * item.quantity), 0);
      const totalItems = newItems.reduce((total, item) => total + item.quantity, 0);
      
      return {
        ...state,
        items: newItems,
        totalAmount,
        totalItems,
      };
    }
    
    case 'CLEAR_CART':
      return initialState;
    
    case 'SET_RENTAL_DATE':
      return { ...state, rentalDate: action.payload };
    
    case 'SET_DELIVERY_LOCATION':
      return { ...state, deliveryLocation: action.payload };
    
    case 'SET_SPECIAL_INSTRUCTIONS':
      return { ...state, specialInstructions: action.payload };
    
    case 'LOAD_CART':
      return action.payload;
    
    default:
      return state;
  }
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('shoreDropCart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        // Convert date string back to Date object if it exists
        if (parsedCart.rentalDate) {
          parsedCart.rentalDate = new Date(parsedCart.rentalDate);
        }
        dispatch({ type: 'LOAD_CART', payload: parsedCart });
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('shoreDropCart', JSON.stringify(cart));
  }, [cart]);

  const addPackage = (pkg: any) => {
    const cartItem: CartItem = {
      id: `package-${pkg.title.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'package',
      name: pkg.title,
      price: parseInt(pkg.price.replace('$', '')),
      quantity: 1,
      image: pkg.image,
      description: pkg.description,
      packageItems: pkg.items,
    };
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    toast.success(`${pkg.title} added to cart!`);
  };

  const addItem = (item: any, quantity: number = 1) => {
    const cartItem: CartItem = {
      id: `item-${item.name.toLowerCase().replace(/\s+/g, '-')}`,
      type: 'individual',
      name: item.name,
      price: parseInt(item.price.replace('$', '')),
      quantity,
      image: item.image,
      description: item.description,
    };
    
    dispatch({ type: 'ADD_ITEM', payload: cartItem });
    toast.success(`${item.name} added to cart!`);
  };

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
    toast.success('Item removed from cart');
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
    toast.success('Cart cleared');
  };

  const setRentalDate = (date: Date) => {
    dispatch({ type: 'SET_RENTAL_DATE', payload: date });
  };

  const setDeliveryLocation = (location: string) => {
    dispatch({ type: 'SET_DELIVERY_LOCATION', payload: location });
  };

  const setSpecialInstructions = (instructions: string) => {
    dispatch({ type: 'SET_SPECIAL_INSTRUCTIONS', payload: instructions });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addPackage,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        setRentalDate,
        setDeliveryLocation,
        setSpecialInstructions,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}