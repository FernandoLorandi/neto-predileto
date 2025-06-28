import {Home, Hospital, Car, CheckCircle} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {Button} from "@/components/ui/button.tsx";

const Services = () => {
    const services = [
        {
            icon: Home,
            title: "Companhia Domiciliar",
            description: "Conversas, jogos, leitura, organização leve e principalmente muita companhia carinhosa no conforto do lar.",
            features: ["Escuta ativa", "Jogos e entretenimento", "Organização leve", "Companhia para refeições"]
        },
        {
            icon: Hospital,
            title: "Acompanhamento Hospitalar",
            description: "Presença reconfortante durante internações, exames ou procedimentos médicos.",
            features: ["Plantões noturnos", "Acompanhamento em exames", "Suporte emocional", "Comunicação com família"]
        },
        {
            icon: Car,
            title: "Acompanhamento Externo",
            description: "Suporte em consultas médicas, compras, farmácia e outras atividades externas.",
            features: ["Transporte acompanhado", "Compras no mercado", "Consultas médicas", "Atividades sociais"]
        }
    ];

    const handleWhatsAppClick = () => {
        const message = "Olá! Gostaria de saber mais sobre o Neto Predileto e como vocês podem ajudar nossa família. 😊";
        const whatsappUrl = `https://wa.me/5542999363576?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50" id="servicos">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-6 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Nossos <span className="text-blue-600">Serviços</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Oferecemos diferentes tipos de acompanhamento, sempre com foco no carinho,
                        segurança e bem-estar dos nossos idosos queridos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                            <CardHeader className="min-h-52 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 flex flex-col gap-y-2 justify-between">
                                <div className="space-y-4 h-[248px]">
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                    <div className="space-y-3">
                                        {service.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center gap-3">
                                                <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button
                                    onClick={handleWhatsAppClick}
                                    variant="outline"
                                    className="border-orange-200 text-orange-600 hover:bg-orange-50"
                                >
                                    Quero meu orçamento
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Services;
