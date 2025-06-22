import { Home, Hospital, Car, Heart, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Services = () => {
    const services = [
        {
            icon: Home,
            title: "Companhia Domiciliar",
            description: "Conversas, jogos, leitura, organização leve e principalmente muita companhia carinhosa no conforto do lar.",
            price: "R$ 25-30/hora",
            features: ["Escuta ativa", "Jogos e entretenimento", "Organização leve", "Companhia para refeições"]
        },
        {
            icon: Hospital,
            title: "Acompanhamento Hospitalar",
            description: "Presença reconfortante durante internações, exames ou procedimentos médicos.",
            price: "R$ 30-35/hora",
            features: ["Plantões noturnos", "Acompanhamento em exames", "Suporte emocional", "Comunicação com família"]
        },
        {
            icon: Car,
            title: "Acompanhamento Externo",
            description: "Suporte em consultas médicas, compras, farmácia e outras atividades externas.",
            price: "R$ 25-30/hora",
            features: ["Transporte acompanhado", "Compras no mercado", "Consultas médicas", "Atividades sociais"]
        }
    ];

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
                            <CardHeader className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-8">
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">{service.title}</CardTitle>
                                <Badge className="bg-white/20 text-white border-white/30 w-fit">
                                    {service.price}
                                </Badge>
                            </CardHeader>
                            <CardContent className="p-8 space-y-6">
                                <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                <div className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center gap-3">
                                            <Heart className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                        <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Atendimento 24h</h3>
                        <p className="text-gray-600">Emergências e plantões noturnos disponíveis</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                        <Shield className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Resposta Rápida</h3>
                        <p className="text-gray-600">Atendimento emergencial em até 2 horas</p>
                    </div>
                    <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
                        <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-gray-800 mb-2">Carinho Garantido</h3>
                        <p className="text-gray-600">Seleção criteriosa por perfil afetuoso</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
