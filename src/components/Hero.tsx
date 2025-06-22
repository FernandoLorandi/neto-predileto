import { Heart, Star, Shield, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {AuroraText} from "@/components/magicui/aurora-text.tsx";

const Hero = () => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative py-20 lg:py-32 px-4 overflow-hidden" id="hero">
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50"></div>
            <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-orange-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
            <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-blue-300 rounded-full opacity-30 animate-bounce"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-6">
                            <Badge className="bg-orange-100 text-orange-800 px-4 py-2 text-sm font-medium">
                                ❤️ Agora em Ponta Grossa
                            </Badge>

                            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                                Companhia e cuidado para{" "}
                                <AuroraText> idosos </AuroraText>
                                {" "}
                                com carinho
                            </h1>

                            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                                Conectamos famílias preocupadas a nossos "Netos" especiais:
                                acompanhantes carinhosos, treinados e de confiança que oferecem
                                companhia genuína para seus entes queridos.
                            </p>
                        </div>

                        {/* Trust indicators */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-blue-600" />
                                <span>Acompanhantes verificados</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Heart className="w-5 h-5 text-orange-600" />
                                <span>Carinho genuíno</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" />
                                <span>Atendimento 24h</span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8 py-6"
                                onClick={() => scrollToSection("contato")}
                            >
                                <Phone className="w-5 h-5 mr-2" />
                                Solicitar Atendimento
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-orange-200 text-orange-700 hover:bg-orange-50 text-lg px-8 py-6"
                                onClick={() => scrollToSection("planos")}
                            >
                                Ver Nossos Planos
                            </Button>
                        </div>

                        {/* Social proof */}
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold text-orange-600">22.000 idosos</span> em Ponta Grossa precisam de atenção especial.
                            Junte-se às famílias que já confiam no nosso cuidado.
                        </p>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative">
                        <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 lg:p-12">
                            <div className="bg-white rounded-2xl p-8 shadow-lg">
                                <div className="text-center space-y-6">
                                    <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full mx-auto flex items-center justify-center">
                                        <Heart className="w-12 h-12 text-white" />
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-2xl font-bold text-gray-800">
                                            Nossos "Netos"
                                        </h3>
                                        <p className="text-gray-600">
                                            Acompanhantes especiais que tratam seus entes queridos
                                            com o mesmo carinho de um neto verdadeiro.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 pt-4">
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-blue-600">100%</div>
                                            <div className="text-sm text-gray-500">Verificados</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-2xl font-bold text-orange-600">24h</div>
                                            <div className="text-sm text-gray-500">Disponível</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            ⭐ Novo em PG!
                        </div>
                        <div className="absolute -bottom-4 -left-4 bg-green-400 text-green-900 px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                            💚 Confiável
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;