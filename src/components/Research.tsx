import Logo from "./Logo";

export default function Research() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-8 uppercase tracking-wide">
              UMA REVISÃO DE 2021 PUBLICADA NA REVISTA BRASILEIRA DE TERAPIAS COGNITIVAS MOSTROU:
            </p>
            
            <div className="mb-8">
              <p className="mb-4">
                A terapia feita pela internet funciona muito bem em problemas como{" "}
                <span className="bg-black text-white px-2 py-1">ansiedade</span>,
              </p>
              <p className="mb-8">
                <span className="bg-black text-white px-2 py-1">depressão</span> e até mesmo a sensação de{" "}
                <span className="bg-black text-white px-2 py-1">solidão</span>
              </p>
            </div>
            
            <div className="bg-black text-white px-6 py-4 text-sm md:text-base font-medium max-w-3xl mx-auto">
              REVISÃO É UMA ANÁLISE CRÍTICA DA LITERATURA CIENTÍFICA ACERCA DE ALGUM TEMA, JUNTANDO DIVERSOS ESTUDOS EM APENAS UM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
