import Logo from "./Logo";

export default function Services() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-6">
              Ferramentas como a <span className="bg-black text-white px-2 py-1">comodidade</span> e a{" "}
              <span className="bg-black text-white px-2 py-1">flexibilidade</span> fazem com que seja
            </p>
            <p className="mb-8">
              mais acessível realizar o atendimento
            </p>
            
            <div className="mb-8">
              <div className="flex justify-center mb-4">
                <span className="text-2xl">↘</span>
              </div>
              <div className="bg-black text-white px-6 py-4 text-xl md:text-2xl font-medium">
                GERANDO ASSIM MAIOR REGULARIDADE NAS SESSÕES
              </div>
            </div>
            
            <div className="mb-8">
              <p className="mb-4">
                a revisão afirma ainda que a{" "}
                <span className="bg-black text-white px-2 py-1">terapia cognitiva online</span> possui
              </p>
              <p className="mb-8">
                resultados comprovados em diversos tipos de fenômenos, população e contexto
              </p>
            </div>
            
            <div className="bg-black text-white px-6 py-4 text-lg md:text-xl font-medium">
              reduzindo sintomas de ansiedade, depressão, estresse, solidão e até traumas
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
