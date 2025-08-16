"use client";

import { useEffect, useRef, useState } from "react";

export default function ModernAbout() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="sobre" className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-amber-50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-200 to-blue-200 rounded-3xl blur-2xl opacity-30"></div>
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d36ea667-b35a-45f4-a88a-e8e8307350c4.png"
                alt="Matheus Rocha em seu consultório"
                className="relative w-full h-auto rounded-3xl shadow-2xl object-cover"
              />
              
              {/* Floating quote */}
              <div className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-6 shadow-xl max-w-xs border border-green-100">
                <p className="font-dancing text-lg text-gray-700 italic">
                  "Cada pessoa tem seu próprio ritmo de cura"
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="space-y-4">
              <p className="text-amber-600 font-medium text-lg tracking-wide">
                Sobre Mim
              </p>
              <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
                Uma abordagem
                <span className="block text-green-600">acolhedora</span>
              </h2>
            </div>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Sou psicólogo clínico especializado em <strong className="text-gray-800">Terapia Cognitivo-Comportamental (TCC)</strong>, 
                com mais de 5 anos de experiência ajudando pessoas a superarem desafios emocionais e comportamentais.
              </p>
              
              <p>
                Acredito que cada pessoa possui recursos internos únicos para promover mudanças positivas em sua vida. 
                Meu papel é criar um ambiente seguro e acolhedor onde você possa explorar seus pensamentos, 
                emoções e comportamentos de forma colaborativa.
              </p>

              <p>
                Trabalho com uma abordagem focada no <strong className="text-gray-800">"aqui e agora"</strong>, 
                ajudando você a identificar padrões disfuncionais e desenvolver estratégias práticas para o bem-estar emocional.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-100">
                <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">CRP</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Registro Profissional</h3>
                <p className="text-gray-600 text-sm">Psicólogo registrado no Conselho Regional de Psicologia</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-100">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold">TCC</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Especialização</h3>
                <p className="text-gray-600 text-sm">Formação em Terapia Cognitivo-Comportamental</p>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center space-x-2 text-amber-600 font-medium hover:text-amber-700 transition-colors duration-200"
              >
                <span>Vamos conversar sobre seu bem-estar</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
