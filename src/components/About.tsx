import { Heart, Users, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card.tsx";

const About = () => {
    const features = [
        {
            icon: Heart,
            title: "Carinho Genuíno",
            description: "Nossos 'Netos' são selecionados pelo perfil afetuoso e capacidade de criar vínculos verdadeiros com os idosos."
        },
        {
            icon: Shield,
            title: "Segurança Total",
            description: "Todos os acompanhantes passam por verificação de antecedentes e treinamento profissional completo."
        },
        {
            icon: Clock,
            title: "Flexibilidade",
            description: "Atendimento por hora, plantões ou pacotes mensais. Adaptamos nosso serviço às suas necessidades."
        },
        {
            icon: Users,
            title: "Suporte Familiar",
            description: "Apoiamos famílias que precisam de tranquilidade para trabalhar, sabendo que seus entes estão bem cuidados."
        }
    ];

    return (
        <section className="py-20 px-4" id="sobre">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-6 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Por que o <span className="text-orange-600">Neto Predileto</span>?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Criamos uma ponte entre famílias preocupadas e idosos que precisam de companhia.
                        Nossa missão é proporcionar não apenas cuidado, mas carinho verdadeiro.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <CardContent className="p-8 text-center space-y-4">
                                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto">
                                    <feature.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-3xl p-12 text-white text-center">
                    <h3 className="text-3xl font-bold mb-4">22.000 idosos em Ponta Grossa</h3>
                    <p className="text-xl opacity-90 max-w-2xl mx-auto">
                        Uma população que cresce e merece atenção especial. Estamos aquí para fazer a diferença
                        na vida de cada família da nossa cidade.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;