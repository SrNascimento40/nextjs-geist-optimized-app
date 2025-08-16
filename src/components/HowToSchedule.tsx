import Logo from "./Logo";

export default function HowToSchedule() {
  return (
    <section className="bg-[#F5F1EB] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative mb-12">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/dfc0ecd0-4fa2-4a31-8a3a-c8d2775079b9.png"
            alt="Matheus Rocha sorrindo, psicólogo em ambiente acolhedor"
            className="w-80 h-96 object-cover rounded-lg mx-auto shadow-lg"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-75 text-white px-8 py-4 text-2xl md:text-3xl font-light">
              COMO AGENDAR?
            </div>
          </div>
        </div>

        <Logo className="w-24 h-12 mx-auto mb-8" />
        
        <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-black">
          <span>📞</span>
          <span>(12) 99239-9676</span>
        </div>
      </div>
    </section>
  );
}
