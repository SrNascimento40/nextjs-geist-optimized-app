"use client";

import { useEffect, useRef, useState } from "react";

export default function ModernSpecialties() {
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

  const specialties = [
    {
      title: "Ansiedade",
      description: "Transtornos de ansiedade generalizada, síndrome do pânico, fobias e ansiedade social.",
      icon: "🧠",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50"
    },
    {
      title: "Depressão",
      description: "Episódios depressivos, distimia e transtornos do humor com abordagem compassiva.",
      icon: "🌱",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50"
    },
    {
      title: "Estresse",
      description: "Gestão do estresse cotidiano, burnout e técnicas de relaxamento e mindfulness.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
      bgColor: "from-yellow-50 to-orange-50"
    },
    {
      title: "Relacionamentos",
      description: "Dificuldades interpessoais, habilidades sociais e relacionamentos afetivos.",
      icon: "💝",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50"
    },
    {
      title: "Autoestima",
      description: "Desenvolvimento da autoconfiança, autoaceitação e crescimento pessoal.",
      icon: "✨",
      color: "from-purple-500 to-indigo-500",
      bgColor: "from-purple-50 to-indigo-50"
    },
    {
      title: "Traumas",
      description: "Processamento de experiências traumáticas com técnicas especializadas e cuidado.",
      icon: "🛡️",
      color: "from-gray-500 to-slate-500",
      bgColor: "from-gray-50 to-slate-50"
    }
  ];

  return (
    <section ref={sectionRef} id="especialidades" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-r from-green-200/20 to-blue-200/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <p className="text-amber-600 font-medium text-lg tracking-wide mb-4">
            Especialidades
          </p>
          <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Áreas de
            <span className="block text-blue-600">atuação</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Trabalho com diversas questões emocionais e comportamentais, sempre com uma abordagem 
            personalizada e baseada em evidências científicas.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`bg-gradient-to-br ${specialty.bgColor} rounded-3xl p-8 h-full border border-white/50 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}>
                {/* Icon */}
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {specialty.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="font-playfair text-2xl font-bold text-gray-800">
                    {specialty.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {specialty.description}
                  </p>

                  {/* Learn more link */}
                  <div className="pt-4">
                    <a
                      href="#contato"
                      className={`inline-flex items-center space-x-2 text-transparent bg-gradient-to-r ${specialty.color} bg-clip-text font-medium hover:underline transition-all duration-200`}
                    >
                      <span>Saiba mais</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Evidence-based section */}
        <div className={`mt-20 transition-all duration-1000 delay-600 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 lg:p-12 border border-amber-100">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                  Terapia baseada em evidências
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  A Terapia Cognitivo-Comportamental é uma das abordagens mais estudadas e eficazes 
                  da psicologia, com comprovação científica para o tratamento de diversos transtornos 
                  mentais e questões emocionais.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Eficácia comprovada cientificamente</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Resultados em curto e médio prazo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Técnicas práticas e aplicáveis</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/466c2311-f7d8-4d29-b1d3-938b4868c607.png"
                  alt="Pesquisa científica em psicologia"
                  className="w-full h-auto rounded-2xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
