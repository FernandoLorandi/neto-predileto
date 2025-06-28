import { Check, Heart, Crown} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Pricing = () => {
    const plans = [
        {
            name: "Básico",
            icon: Heart,
            price: "Gratuito",
            description: "Companhia leve para momentos especiais",
            features: [
                "8 horas de companhia/mês",
                "Atendimento domiciliar",
                "Conversas e jogos",
                "Suporte por WhatsApp",
                "Relatórios semanais para família"
            ],
            popular: true,
            color: "from-orange-500 to-orange-600"
        },
        {
            name: "Intermediário",
            icon: Crown,
            price: "R$ 499/mês",
            description: "Acompanhamento completo e flexível",
            features: [
                "20 horas de companhia/mês",
                "Atendimento domiciliar e externo",
                "Acompanhamento em consultas",
                "Suporte 24h por telefone",
                "Relatórios detalhados",
                "Desconto em horas extras"
            ],
            popular: false,
            color: "from-blue-500 to-blue-600"

        },
    ];

    const handlePlanSelect = (planName: string) => {
        const contactSection = document.getElementById('contato');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
        console.log(`Plano selecionado: ${planName}`);
    };

    return (
        <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-orange-50" id="planos">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-6 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Planos que <span className="text-orange-600">cabem no seu orçamento</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Escolha o plano ideal para sua família. Todos incluem carinho garantido,
                        segurança total e flexibilidade para suas necessidades.
                    </p>
                </div>

                <div className="grid lg:grid-cols-6 gap-8 mb-16">
                    {plans.map((plan, index) => (
                        <Card key={index} className={`col-span-3 border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden ${plan.popular ? 'ring-4 ring-orange-200' : ''}`}>
                            {plan.popular && (
                                <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center py-2 font-semibold">
                                    ⭐ Mais Escolhido
                                </div>
                            )}

                            <CardHeader className={`bg-gradient-to-br ${plan.color} text-white p-8 text-center`}>
                                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <plan.icon className="w-8 h-8 text-white" />
                                </div>
                                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                                <div className="space-y-2">
                                    <div className="text-4xl font-bold">{plan.price}</div>
                                </div>
                                <p className="text-white/90 mt-4">{plan.description}</p>
                            </CardHeader>

                            <CardContent className="p-8 space-y-6">
                                <div className="space-y-4">
                                    {plan.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-start gap-3">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white py-3 text-lg`}
                                    onClick={() => handlePlanSelect(plan.name)}
                                >
                                    Escolher {plan.name}
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
