import Logo from "./Logo";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#F5F1EB] flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <Logo className="w-32 h-16 mx-auto mb-8" />
        
        <div className="relative mb-12">
          <img 
            src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d17dd99b-833f-422f-a229-9b9999bcdb11.png"
            alt="Matheus Rocha - Psicólogo especializado em Terapia Cognitivo-Comportamental"
            className="w-80 h-96 object-cover rounded-lg mx-auto shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-light text-black mb-4">
          MATHEUS ROCHA
        </h1>
        
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-black mb-2">
            O QUE É A
          </p>
          <div className="bg-black text-white px-6 py-3 inline-block text-xl md:text-2xl font-medium">
            TERAPIA COGNITIVO-COMPORTAMENTAL?
          </div>
        </div>

        <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-black">
          <span>📞</span>
          <span>(12) 99239-9676</span>
        </div>
      </div>
    </section>
  );
}
