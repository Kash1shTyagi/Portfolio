import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: 'Home', type: 'scroll' },
    { href: '#about', label: 'About', type: 'scroll' },
    { href: '#skills', label: 'Skills', type: 'scroll' },
    { href: '#projects', label: 'Projects', type: 'scroll' },
    { href: '#contact', label: 'Contact', type: 'scroll' },
    // { href: '/password-generator', label: 'Password Gen', type: 'route' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.type === 'scroll') {
      scrollToSection(item.href);
    } else {
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl sm:text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity">
            Portfolio
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              item.type === 'route' ? (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group text-sm lg:text-base"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full" />
                </button>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg">
            <div className="px-4 sm:px-6 py-4 space-y-3">
              {navItems.map((item) => (
                item.type === 'route' ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;