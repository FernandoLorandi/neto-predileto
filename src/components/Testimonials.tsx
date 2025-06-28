import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Maria Helena, 78 anos",
            location: "Uvaranas",
            text: "A Júlia virou minha neta do coração. Ela me escuta, joga cartas comigo e me faz rir todos os dias. Minha família fica tranquila sabendo que tenho uma companhia tão especial.",
            rating: 5,
            service: "Companhia Domiciliar"
        },
        {
            name: "Carlos Eduardo",
            location: "Filho de paciente",
            text: "Quando meu pai ficou internado, o Pedro foi um anjo. Ficou com ele durante a noite, conversou, deu carinho. Pai melhorou muito mais rápido tendo essa companhia carinhosa.",
            rating: 5,
            service: "Acompanhamento Hospitalar"
        },
        {
            name: "Dona Rosa, 82 anos",
            location: "Vila Estrela",
            text: "A Ana me acompanha nas consultas médicas e no mercado. É como ter uma neta que sempre está disponível. Me sinto segura e acompanhada em todos os momentos.",
            rating: 5,
            service: "Acompanhamento Externo"
        }
    ];

    return (
        <section className="py-20 px-4" id="depoimentos">
            <div className="max-w-6xl mx-auto">
                <div className="text-center space-y-6 mb-16">
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800">
                        Histórias que <span className="text-orange-600">aquecem o coração</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Cada sorriso, cada momento especial compartilhado. Veja como nossos "Netos"
                        fazem a diferença na vida dos nossos idosos queridos.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <CardContent className="p-8 space-y-6">
                                <div className="flex items-center gap-4">
                                    <Quote className="w-8 h-8 text-orange-400" />
                                    <div className="flex">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                                        ))}
                                    </div>
                                </div>

                                <p className="text-gray-700 leading-relaxed italic">
                                    "{testimonial.text}"
                                </p>

                                <div className="space-y-2">
                                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.location}</div>
                                    <div className="inline-block bg-orange-100 text-orange-800 text-xs px-3 py-1 rounded-full">
                                        {testimonial.service}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
