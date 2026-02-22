import { Minus, Plus, X } from 'lucide-react';
import { CartItem as CartItemType } from '../types/cart';
import { useCart } from '../contexts/CartContext';
import { Button } from '../components/button';
import { Badge } from '../components/badge';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCart();

  const decreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    }
  };

  const increaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  const handleRemove = () => {
    removeItem(item.id);
  };

  return (
    <div className="flex gap-3 p-4 bg-white/50 rounded-lg border border-gray-100">
      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
        <img 
          src={item.image} 
          alt={item.name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex-1 space-y-2">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-medium text-sm text-ocean-deep leading-tight">{item.name}</h4>
            {item.type === 'package' && (
              <Badge variant="secondary" className="mt-1 text-xs">
                Package
              </Badge>
            )}
            {item.description && (
              <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
            )}
            {item.packageItems && (
              <div className="mt-2">
                <p className="text-xs font-medium text-ocean-deep">Includes:</p>
                <ul className="text-xs text-muted-foreground space-y-1 mt-1">
                  {item.packageItems.map((packageItem, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-1 h-1 bg-ocean-light rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {packageItem}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleRemove}
            className="h-6 w-6 p-0 text-muted-foreground hover:text-destructive"
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={decreaseQuantity}
              disabled={item.quantity <= 1}
              className="h-6 w-6 p-0"
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
            <Button
              variant="outline"
              size="sm"
              onClick={increaseQuantity}
              className="h-6 w-6 p-0"
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <span className="font-medium text-ocean-deep">${item.price * item.quantity}</span>
        </div>
      </div>
    </div>
  );
}