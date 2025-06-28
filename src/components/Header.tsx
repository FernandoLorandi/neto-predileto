import { useState } from "react";
import {Menu, X, Heart} from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    const navLinks = [
        { label: "Início", href: "#hero" },
        { label: "Sobre", href: "#sobre" },
        { label: "Como funciona", href: "#funcionamento" },
        { label: "Serviços", href: "#servicos" },
        { label: "Depoimentos", href: "#depoimentos" },
        { label: "Contato", href: "#contato" }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                            <Heart className="w-6 h-6 text-white" />
                        </div>
                        <div className="text-xl font-bold">
                            <span className="text-blue-600">Neto</span>{" "}
                            <span className="text-orange-600">Predileto</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.label}
                                onClick={() => scrollToSection(link.href.substring(1))}
                                className="cursor-pointer text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium"
                            >
                                {link.label}
                            </button>
                        ))}
                    </nav>

                    {/* Desktop CTA Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button
                            variant="outline"
                            className="border-orange-200 text-orange-600 hover:bg-orange-50"
                        >
                            Seja um profissional
                        </Button>
                        <Button
                            onClick={() => scrollToSection("funcionamento")}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                        >
                            Fazer orçamento
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 rounded-md text-gray-700 hover:text-orange-600"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg">
                        <nav className="px-4 py-6 space-y-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.label}
                                    onClick={() => scrollToSection(link.href.substring(1))}
                                    className="block w-full text-left text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="pt-4 space-y-3">
                                <Button
                                    variant="outline"
                                    className="w-full border-orange-200 text-orange-600 hover:bg-orange-50"
                                >
                                    Seja um profissional
                                </Button>
                                <Button
                                    onClick={() => scrollToSection("funcionamento")}
                                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
                                >
                                    Fazer orçamento
                                </Button>
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;