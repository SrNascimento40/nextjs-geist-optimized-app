import Logo from "./Logo";

export default function Approach() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-6">
              Para melhor visualização: Nossos{" "}
              <span className="bg-black text-white px-2 py-1">PENSAMENTOS</span>{" "}
              influenciam nossas{" "}
              <span className="bg-black text-white px-2 py-1">EMOÇÕES</span>
            </p>
            <p className="mb-8">
              e <span className="bg-black text-white px-2 py-1">COMPORTAMENTO</span>
            </p>
            
            <p className="text-lg md:text-xl mb-8">
              Dessa forma, como agimos pode afetar diretamente
            </p>
            
            <div className="bg-black text-white px-6 py-4 text-xl md:text-2xl font-medium mb-8">
              NOSSOS PADRÕES DE PENSAMENTOS E EMOÇÕES
            </div>
            
            <p className="text-lg md:text-xl mb-6">
              Fazendo da relação pensamento x comportamento uma via de mão dupla
            </p>
            
            {/* Arrows indicating bidirectional relationship */}
            <div className="flex justify-center items-center space-x-4 text-2xl">
              <span>←</span>
              <span>→</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
