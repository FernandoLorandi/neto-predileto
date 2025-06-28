import {Phone, Clock, Heart, MessageCircle, Mail, LucideMail} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
    const handleWhatsAppClick = () => {
        const message = "Olá! Gostaria de saber mais sobre o Neto Predileto e como vocês podem ajudar nossa família. 😊";
        const whatsappUrl = `https://wa.me/5542999363576?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleEmailAppClick = () => {
        const email = "netoprediletopg@gmail.com";
        const subject = "Quero saber mais sobre o Neto Predileto";
        const body = "Olá! Gostaria de saber mais sobre o Neto Predileto e como vocês podem ajudar nossa família. 😊";
        const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoUrl, '_blank');
    };

    return (
        <section className="py-24 px-4 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white relative overflow-hidden" id="contato">
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-white/20 blur-xl"></div>
                <div className="absolute bottom-32 right-16 w-48 h-48 rounded-full bg-orange-300/20 blur-2xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-yellow-300/20 blur-lg"></div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center space-y-6 mb-20">
                    <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
                        Vamos <span className="text-orange-300">Conversar</span>?
                    </h2>

                    <p className="text-xl opacity-90 max-w-4xl mx-auto leading-relaxed">
                        Sua família merece cuidado especial e atenção personalizada. Entre em contato
                        e vamos encontrar juntos a melhor forma de proporcionar carinho, companhia
                        e tranquilidade para vocês.
                    </p>

                    <div className="flex flex-wrap justify-center gap-4 pt-4">
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                            <Clock className="w-4 h-4 text-orange-300" />
                            <span className="text-sm">Resposta rápida</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                            <Heart className="w-4 h-4 text-orange-300" />
                            <span className="text-sm">Atendimento humanizado</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-full">
                            <Phone className="w-4 h-4 text-orange-300" />
                            <span className="text-sm">Consulta gratuita</span>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto mb-16">
                    <Card className="bg-white/10 border-white/20 text-white backdrop-blur-sm py-3">
                        <CardContent>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 bg-blue-500/20 rounded-full flex items-center justify-center mt-1">
                                        <Mail className="w-5 h-5 text-blue-300" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg">netoprediletopg@gmail.com</div>
                                        <div className="text-sm opacity-75 mb-2">E-mail para dúvidas e orçamentos</div>
                                        <div className="text-xs bg-blue-500/40 text-blue-200 px-2 py-1 rounded-full inline-block">
                                            Resposta em até 2 horas
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                                    <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center mt-1">
                                        <Phone className="w-5 h-5 text-green-300" />
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold text-lg">(42) 99936-3576</div>
                                        <div className="text-sm opacity-75 mb-2">WhatsApp e ligações</div>
                                        <div className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full inline-block">
                                            Disponível 24h para emergências
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-2 gap-6 pt-4">
                                <Button
                                    onClick={handleEmailAppClick}
                                    variant="outline"
                                    size="lg"
                                    className="border-2 border-orange-200 text-orange-700 hover:bg-orange-50 text-lg px-8 py-6"
                                >
                                    <LucideMail className="w-6 h-6 mr-2" />
                                    Enviar e-mail
                                </Button>
                                <Button
                                    onClick={handleWhatsAppClick}
                                    className="border-2 border-green-600 bg-green-600 hover:bg-green-700 text-white py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                                    size="lg"
                                >
                                    <MessageCircle className="w-6 h-6 mr-2" />
                                    WhatsApp
                                </Button>

                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Trust indicators */}
                <div className="pt-12 border-t border-white/10">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                                <Heart className="w-8 h-8 text-orange-300" />
                            </div>
                            <h3 className="font-semibold text-lg">Cuidado Personalizado</h3>
                            <p className="text-white/70 text-sm">Cada família é única e merece atenção especial</p>
                        </div>

                        <div className="space-y-2">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                                <Clock className="w-8 h-8 text-blue-300" />
                            </div>
                            <h3 className="font-semibold text-lg">Resposta Rápida</h3>
                            <p className="text-white/70 text-sm">Retornamos seu contato em até 2 horas</p>
                        </div>

                        <div className="space-y-2">
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto">
                                <Phone className="w-8 h-8 text-green-300" />
                            </div>
                            <h3 className="font-semibold text-lg">Suporte 24h</h3>
                            <p className="text-white/70 text-sm">Emergências atendidas a qualquer hora</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;