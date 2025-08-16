import Logo from "./Logo";

export default function Methodology() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-8">
              ELA É UMA ABORDAGEM DE PSICOTERAPIA QUE TEM COMO FOCO O{" "}
              <span className="bg-black text-white px-2 py-1">"AQUI E AGORA"</span>
            </p>
            
            <div className="mb-8">
              <p className="mb-4">
                A <span className="bg-black text-white px-2 py-1">TCC</span> tem o objetivo de ajudar o indivíduo a
              </p>
              <p className="mb-4">
                <span className="bg-black text-white px-2 py-1">identificar</span> e{" "}
                <span className="bg-black text-white px-2 py-1">desenvolver</span>
              </p>
              <p className="mb-8">
                padrões de pensamento e comportamentos funcionais
              </p>
            </div>
            
            <div className="text-xl md:text-2xl font-light">
              É "PENSAR SOBRE O PENSAMENTO"
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
