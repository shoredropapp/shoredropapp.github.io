"use client";

import { useState } from 'react';
import { ShoppingBag, X } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/sheet';
import { Button } from '../components/button';
import { Badge } from '../components/badge';
import { Separator } from '../components/separator';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useNavigate } from 'react-router-dom';
import { useRouter } from "next/navigation";

import { CartItem as CartItemType } from '../types/cart';


export default function CartDrawer() {
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleViewCart = () => {
    setOpen(false);
    router.push("/cart");
  };

  const handleCheckout = () => {
    setOpen(false);
    router.push("/booking");
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <ShoppingBag className="h-4 w-4" />
          {cart.totalItems > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {cart.totalItems}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Your Cart ({cart.totalItems} {cart.totalItems === 1 ? 'item' : 'items'})
          </SheetTitle>
          <SheetDescription>
            Review your beach rental selection
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full mt-6">
          {cart.items.length === 0 ? (
            <EmptyCart onClose={() => setOpen(false)} />
          ) : (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto">
                {cart.items.map((item: CartItemType)=> (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              <div className="space-y-4 pt-4 border-t">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${cart.totalAmount}</span>
                  </div>
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Delivery & Setup</span>
                    <span>Included</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-medium">
                    <span>Total</span>
                    <span>${cart.totalAmount}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <Button onClick={handleCheckout} className="w-full bg-ocean-light hover:bg-ocean-deep">
                    Book Now
                  </Button>
                  <Button onClick={handleViewCart} variant="outline" className="w-full">
                    View Full Cart
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}