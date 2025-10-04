import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

interface HeaderProps {
  onConsultationClick: () => void;
  onServicesClick: () => void;
  onUniversitiesClick: () => void;
  onStoriesClick: () => void;
  onContactClick: () => void;
  onHomeClick: () => void;
  onExpensesClick: () => void; // Umumiy Xarajat bo'limiga scroll qilish uchun
  isHomeInView: boolean;
  isServicesInView: boolean;
  isExpensesInView: boolean;
  isUniversitiesInView: boolean;
  isStoriesInView: boolean;
  isContactInView: boolean;
}

const Header = ({
  onConsultationClick,
  onServicesClick,
  onUniversitiesClick,
  onStoriesClick,
  onContactClick,
  onHomeClick,
  onExpensesClick,
  isHomeInView,
  isServicesInView,
  isExpensesInView,
  isUniversitiesInView,
  isStoriesInView,
  isContactInView,
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isContactInView) setActiveSection("contact");
    else if (isStoriesInView) setActiveSection("success");
    else if (isUniversitiesInView) setActiveSection("universities");
    else if (isExpensesInView) setActiveSection("expenses");
    else if (isServicesInView) setActiveSection("packages");
    else if (isHomeInView) setActiveSection("home");
  }, [
    isHomeInView,
    isServicesInView,
    isExpensesInView,
    isUniversitiesInView,
    isStoriesInView,
    isContactInView,
  ]);

  const menuItems = [
    { name: "Bosh Sahifa", id: "home", onClick: onHomeClick },
    { name: "Xizmat Paketlari", id: "packages", onClick: onServicesClick },
    {
      name: "Umumiy Xarajat",
      id: "expenses",
      onClick: onExpensesClick,
    },
    { name: "Universitetlar", id: "universities", onClick: onUniversitiesClick },
    { name: "Muvaffaqiyati talabalar", id: "success", onClick: onStoriesClick },
    { name: "Aloqa", id: "contact", onClick: onContactClick },
  ];

  const handleNavLinkClick = (onClickFunc: () => void) => {
    onClickFunc();
    setIsMenuOpen(false); // Mobil menyuni yopish
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => handleNavLinkClick(onHomeClick)}
          >
            <img
              src="/lovable-uploads/24db456f-da99-445e-b0ec-7647b18b86de.png"
              alt="Go Korea"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-xl font-heading font-bold text-foreground">
              Go Korea
            </span>
          </div>

          {}
          <div className="hidden lg:flex items-center **space-x-12**"> {}
            {/* Desktop Navigation */}
            <nav className="flex items-center **space-x-7**"> {}
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleNavLinkClick(item.onClick)}
                  // O'ZGARISH: Navigatsiya elementlariga button stilini berdik
                  className={`px-3 py-2 rounded-md border border-transparent transition-all duration-300 font-inter text-base font-medium cursor-pointer relative group
                            ${activeSection === item.id
                                ? "text-primary-custom font-bold"
                                : "hover:text-red-500 hover:border-blue-700 hover:border-opacity-50" 
                            }`}
                >
                  {item.name}
                  {/* Aktiv link uchun chiroyli pastki chiziq */}
                  {activeSection === item.id && (
                    <span className="absolute bottom-[-7px] left-0 w-full h-0.5 bg-primary-custom rounded-full animate-fade-in"></span>
                  )}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div>
              <Button
                variant="korea-red"
                size="lg"
                onClick={() => handleNavLinkClick(onConsultationClick)}
                className="font-inter font-bold bg-red-600 hover:bg-red-700 text-white border-2 border-red-800 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                ONLINE KONSULTATSIYA
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground hover:text-primary-custom transition-all duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 glass rounded-lg p-4 border border-border/20 shadow-lg">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  onClick={() => handleNavLinkClick(item.onClick)}
                  className={`text-foreground transition-all duration-300 font-inter font-medium cursor-pointer px-3 py-2 rounded-md
                              ${activeSection === item.id ? "text-primary-custom font-bold" : "hover:text-red-500 hover:bg-gray-800/50"}`}
                >
                  {item.name}
                </a>
              ))}
              <Button
                variant="korea-red"
                size="lg"
                onClick={() => handleNavLinkClick(onConsultationClick)}
                className="mt-4 font-inter font-bold bg-red-600 hover:bg-red-700 text-white border-2 border-red-800 shadow-lg"
              >
                <Phone className="w-4 h-4 mr-2" />
                ONLINE KONSULTATSIYA
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;