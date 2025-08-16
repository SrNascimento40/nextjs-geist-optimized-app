import Logo from "./Logo";

export default function About() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-8">
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-6">
              Juntos o <span className="bg-black text-white px-2 py-1">TERAPEUTA</span> e o{" "}
              <span className="bg-black text-white px-2 py-1">PACIENTE</span> trabalham como
            </p>
            <p className="text-2xl md:text-3xl font-light">
              uma equipe investigativa
            </p>
          </div>

          <div className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto">
            <p className="mb-8">
              Buscando entender e modificar os padrões de pensamento e comportamentos{" "}
              <span className="bg-black text-white px-2 py-1">DISFUNCIONAIS</span>
            </p>
            
            <p className="mb-8">
              Realizando dessa forma um trabalho{" "}
              <span className="bg-black text-white px-2 py-1">colaborativo</span> que desenvolva um estilo
              mais saudável e funcional
            </p>
            
            <div className="bg-black text-white px-6 py-4 text-xl md:text-2xl font-medium">
              DE PENSAMENTO e HABILIDADES DE ENFRENTAMENTO
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
