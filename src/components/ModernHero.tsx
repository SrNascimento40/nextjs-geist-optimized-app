"use client";

import { useEffect, useState } from "react";

export default function ModernHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="inicio" className="min-h-screen relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-rose-200/25 rounded-full blur-xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            <div className="space-y-4">
              <p className="text-amber-600 font-medium text-lg tracking-wide">
                Psicólogo Clínico
              </p>
              <h1 className="font-playfair text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                Matheus
                <span className="block text-amber-600">Rocha</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Especialista em Terapia Cognitivo-Comportamental, oferecendo um espaço acolhedor para seu bem-estar emocional.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-4 rounded-full font-medium hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
              >
                Agendar Consulta
              </a>
              <a
                href="#sobre"
                className="border-2 border-amber-500 text-amber-600 px-8 py-4 rounded-full font-medium hover:bg-amber-500 hover:text-white transition-all duration-300 text-center"
              >
                Saiba Mais
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600 text-sm">Disponível para consultas online</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}>
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl blur-2xl opacity-20 animate-pulse"></div>
              
              {/* Main image */}
              <div className="relative bg-white rounded-3xl p-2 shadow-2xl">
                <img
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/42c8d08a-309a-43ee-be81-0c3179e40e7d.png"
                  alt="Matheus Rocha - Psicólogo especializado em TCC"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-amber-100">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">5+</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Anos de</p>
                    <p className="text-amber-600 font-medium">Experiência</p>
                  </div>
                </div>
              </div>

              {/* Contact info card */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-amber-100">
                <div className="text-center">
                  <p className="text-sm text-gray-600">Contato</p>
                  <p className="font-semibold text-gray-800">(12) 99239-9676</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
