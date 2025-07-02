import {MessageCircle, Calendar, CheckCircle, Phone, ArrowRight, CircleDollarSignIcon} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const HowItWorks = () => {
    const steps = [
        {
            number: "1",
            title: "Entre em contato conosco",
            description: "Nos conte com quem vamos cuidar. Estamos aqui para ouvir sua história com atenção e acolhimento.",
            icon: MessageCircle,
            color: "bg-blue-500",
            detail: "WhatsApp, telefone ou formulário online"
        },
        {
            number: "2",
            title: "Seu orçamento sob medida",
            description: "Cada cuidado é único. Preparamos tudo de forma especial para atender às suas necessidades com carinho e respeito.",
            icon: CircleDollarSignIcon,
            color: "bg-green-500",
            detail: "Orçamento detalhado em até 2 horas"
        },
        {
            number: "3",
            title: "Agende com tranquilidade",
            description: "Você escolhe o melhor momento. Nós organizamos tudo para que sua única preocupação seja ficar em paz.",
            icon: Calendar,
            color: "bg-orange-500",
            detail: "Flexibilidade total de horários"
        }
    ];

    const handleWhatsAppClick = () => {
        const message = "Olá! Gostaria de saber mais sobre o Neto Predileto e como vocês podem ajudar nossa família. 😊";
        const whatsappUrl = `https://wa.me/5542999363576?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };


    return (
        <section className="py-24 px-4 bg-white" id="funcionamento">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-4 mb-12">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                        Proposta <span className="text-orange-600">personalizada</span>, sem compromisso
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed ">
                        Conectamos você com o carinho e cuidado que sua família merece em apenas 3 passos simples.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {steps.map((step) => (
                        <div key={step.number}>
                            <div className="h-full flex items-center justify-center">
                                <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center`}>
                                            <step.icon className="w-6 h-6 text-white" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-gray-500 font-medium">Passo {step.number}</div>
                                            <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed mb-4">
                                        {step.description}
                                    </p>

                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <CheckCircle className="w-4 h-4 text-green-500" />
                                        <span>{step.detail}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12 space-y-4">
                    <p className="text-lg text-gray-600">
                        Pronto para começar? Entre em contato e solicite seu orçamento agora mesmo!
                    </p>
                    <Button
                        onClick={handleWhatsAppClick}
                        size="lg"
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-lg px-8"
                    >
                        <Phone className="w-5 h-5 mr-2" />
                        Quero meu orçamento
                        <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;