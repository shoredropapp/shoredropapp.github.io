import { ShoppingBag } from 'lucide-react';
import { Button } from '../components/button';

interface EmptyCartProps {
  onClose: () => void;
}

export default function EmptyCart({ onClose }: EmptyCartProps) {
  const scrollToServices = () => {
    onClose();
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <div className="w-16 h-16 bg-sand-warm rounded-full flex items-center justify-center mb-4">
        <ShoppingBag className="h-8 w-8 text-ocean-light" />
      </div>
      <h3 className="text-lg font-medium text-ocean-deep mb-2">Your cart is empty</h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-sm">
        Add some beach packages or individual items to get started with your perfect beach day.
      </p>
      <Button 
        onClick={scrollToServices}
        className="bg-ocean-light hover:bg-ocean-deep"
      >
        Browse Packages
      </Button>
    </div>
  );
}