import Logo from "./Logo";

export default function Effectiveness() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-8">
              A <span className="bg-black text-white px-2 py-1">TERAPIA ONLINE</span> SE TORNOU CADA VEZ MAIS POPULAR COM O PASSAR DOS ANOS.
            </p>
            
            <p className="mb-8">
              MAS MUITA GENTE AINDA SE PERGUNTA: SERÁ QUE ELA É REALMENTE{" "}
              <span className="bg-black text-white px-2 py-1">EFICAZ</span>?
            </p>
            
            <div className="text-2xl md:text-3xl font-light mb-8">
              A RESPOSTA É <span className="bg-black text-white px-2 py-1">SIM!</span>
            </div>
            
            <div className="text-xl md:text-2xl font-light">
              E A CIÊNCIA PROVA:
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
