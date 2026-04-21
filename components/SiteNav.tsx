import { Button } from "./button";

const SiteNav = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-start">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="/lovable-uploads/dbf79a37-c86d-49c9-af90-9fe7b44058fc.jpg"
            alt="ShoreDrop logo"
            className="w-12 h-12"
          />
          <h1 className="text-2xl font-light text-ocean-deep">ShoreDrop</h1>
        </a>
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          <a href="/#features" className="text-sm font-medium text-muted-foreground hover:text-ocean-deep transition-colors">Features</a>
          <a href="/#services" className="text-sm font-medium text-muted-foreground hover:text-ocean-deep transition-colors">Services</a>
          <Button
            variant="default"
            size="sm"
            className="rounded-full bg-ocean-light hover:bg-ocean-deep text-white transition-colors"
          >
            Download App
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default SiteNav;
