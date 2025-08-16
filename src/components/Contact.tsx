import Logo from "./Logo";

export default function Contact() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Logo className="w-24 h-12 mx-auto mb-12" />
        
        <div className="text-center space-y-12">
          {/* Social Media Call to Action */}
          <div className="border-2 border-black rounded-lg p-8 max-w-md mx-auto">
            <Logo className="w-16 h-8 mx-auto mb-6" />
            
            <h3 className="text-xl font-medium mb-6">
              AGUARDO SUA MENSAGEM!
            </h3>
            
            <div className="space-y-4 text-left">
              <div className="flex items-center space-x-3">
                <span className="text-xl">👍</span>
                <span>CURTA O POST</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-xl">💬</span>
                <span>COMENTE</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <span className="text-xl">📤</span>
                <span>COMPARTILHE</span>
              </div>
            </div>
            
            <div className="mt-6 text-lg font-medium">
              @PSICOMROCHA
            </div>
          </div>

          {/* Contact Methods */}
          <div className="text-lg md:text-xl text-black leading-relaxed space-y-8">
            <p className="mb-6">
              EXISTEM <span className="bg-black text-white px-2 py-1">TRÊS</span> FORMAS:
            </p>
            
            <div className="space-y-6">
              <div>
                <p className="mb-2">
                  ENTRE NO LINK DO MEU PERFIL E CLIQUE EM AGENDAR
                </p>
                <div className="w-24 h-0.5 bg-black mx-auto"></div>
              </div>
              
              <div>
                <p className="mb-2">
                  ENTRE EM CONTATO COMIGO PELO WHATSAPP NO NÚMERO
                </p>
                <div className="flex items-center justify-center space-x-2 text-xl font-medium">
                  <span>📱</span>
                  <span>(12) 99239-9676</span>
                </div>
                <div className="w-24 h-0.5 bg-black mx-auto mt-2"></div>
              </div>
              
              <div>
                <p>
                  ENTRE EM CONTATO PELA <span className="bg-black text-white px-2 py-1">DM</span> DE QUALQUER UM DOS MEUS PERFIS
                </p>
              </div>
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-lg md:text-xl text-black leading-relaxed">
            <p className="mb-4">
              SE <span className="bg-black text-white px-2 py-1">INTERESSOU</span> PELO MEU TRABALHO E QUER{" "}
              <span className="bg-black text-white px-2 py-1">AGENDAR</span> UMA SESSÃO COMIGO MAS NÃO SABE COMO?
            </p>
            
            <div className="text-2xl md:text-3xl font-light mb-8">
              DEIXA COMIGO!
            </div>
            
            {/* Decorative thought bubble */}
            <div className="flex justify-end">
              <div className="w-32 h-20 border-2 border-black rounded-full relative">
                <Logo className="w-12 h-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
