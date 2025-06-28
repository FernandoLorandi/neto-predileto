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
                                Cuidado e companhia para{" "}
                                <AuroraText>idosos</AuroraText>
                                , com todo o carinho.
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
                                Quero meu orçamento
                                <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="border-2 border-orange-200 text-orange-700 hover:bg-orange-50 text-lg px-8 py-6"
                            >
                                Seja um profissional
                            </Button>
                        </div>

                        {/* Social proof */}
                        <p className="text-sm text-gray-500">
                            <span className="font-semibold text-orange-600">22.000 idosos</span> em Ponta Grossa precisam de atenção especial.
                            Junte-se às famílias que já confiam no nosso cuidado.
                        </p>
                    </div>

                    {/* Image/Visual */}
                    <div className="relative hidden lg:block">
                        <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 lg:p-12">
                            <div className="bg-white rounded-2xl shadow-lg">
                                <img src="src/assets/imagem_hero.jpg"  alt="Imagem de um idoso feliz com seu acompanhante" className="w-full h-auto rounded-lg" />
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