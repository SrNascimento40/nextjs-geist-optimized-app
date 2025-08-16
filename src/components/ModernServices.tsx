"use client";

import { useEffect, useRef, useState } from "react";

export default function ModernServices() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Terapia Individual",
      description: "Sessões personalizadas focadas em suas necessidades específicas, em um ambiente seguro e acolhedor.",
      features: ["50 minutos por sessão", "Abordagem TCC", "Plano personalizado"],
      price: "A partir de R$ 120",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50",
      delay: "delay-0"
    },
    {
      title: "Terapia Online",
      description: "Atendimento por videoconferência com a mesma qualidade do presencial, oferecendo flexibilidade e comodidade.",
      features: ["Plataforma segura", "Horários flexíveis", "Mesma eficácia"],
      price: "A partir de R$ 100",
      gradient: "from-green-500 to-teal-500",
      bgGradient: "from-green-50 to-teal-50",
      delay: "delay-200"
    },
    {
      title: "Acompanhamento Intensivo",
      description: "Para casos que necessitam de maior frequência, com sessões mais próximas e suporte contínuo.",
      features: ["2-3 sessões/semana", "Suporte via WhatsApp", "Plano estruturado"],
      price: "Consulte valores",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50",
      delay: "delay-400"
    }
  ];

  return (
    <section ref={sectionRef} id="servicos" className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-amber-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-200/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-amber-600 font-medium text-lg tracking-wide mb-4">
            Meus Serviços
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Como posso
            <span className="block text-green-600">te ajudar</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofereço diferentes modalidades de atendimento para atender suas necessidades específicas, 
            sempre com foco no seu bem-estar e crescimento pessoal.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${service.delay} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative h-full">
                {/* Card */}
                <div className={`bg-gradient-to-br ${service.bgGradient} rounded-3xl p-8 h-full border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2`}>
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="font-playfair text-2xl font-bold text-gray-800">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-lg font-semibold text-gray-800">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-amber-100 max-w-2xl mx-auto">
            <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">
              Não sabe qual serviço é ideal para você?
            </h3>
            <p className="text-gray-600 mb-6">
              Vamos conversar! Posso te ajudar a escolher a melhor abordagem para suas necessidades.
            </p>
            <a
              href="#contato"
              className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              Conversar Comigo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
