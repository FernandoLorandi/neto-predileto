import { Heart, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">
                                <span className="text-blue-400">Neto</span>{" "}
                                <span className="text-orange-400">Predileto</span>
                            </h3>
                            <p className="text-gray-300 leading-relaxed">
                                Companhia e cuidado para idosos com carinho genuíno.
                                Conectamos famílias a acompanhantes especiais em Ponta Grossa.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-orange-400">
                            <Heart className="w-5 h-5" />
                            <span className="text-sm">Feito com amor para nossos idosos</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Serviços</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Companhia Domiciliar</li>
                            <li>Acompanhamento Hospitalar</li>
                            <li>Acompanhamento Externo</li>
                            <li>Atendimento 24h</li>
                            <li>Plantões Especiais</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Planos</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>Básico - R$ 500/mês</li>
                            <li>Intermediário - R$ 1.200/mês</li>
                            <li>Intensivo - R$ 2.200/mês</li>
                            <li>Atendimento Avulso</li>
                            <li>Pacotes Personalizados</li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold">Contato</h4>
                        <div className="space-y-3 text-gray-300">
                            <div className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-orange-400" />
                                <span>(42) 99999-9999</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-orange-400" />
                                <span>contato@netopredileto.com.br</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <MapPin className="w-4 h-4 text-orange-400" />
                                <span>Ponta Grossa, PR</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Clock className="w-4 h-4 text-orange-400" />
                                <span>24 horas por dia</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-400 text-sm">
                            © 2024 Neto Predileto. Todos os direitos reservados.
                        </div>

                        <div className="flex items-center gap-6 text-sm text-gray-400">
                            <span>Política de Privacidade</span>
                            <span>Termos de Uso</span>
                            <span>FAQ</span>
                        </div>
                    </div>

                    <div className="text-center mt-6 text-gray-500 text-sm">
                        <p>
                            Cuidamos de quem você mais ama com o carinho que eles merecem.
                            <span className="text-orange-400"> ❤️ Família é tudo!</span>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
