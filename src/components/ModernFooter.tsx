export default function ModernFooter() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 right-20 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-24 h-24 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4">
              Matheus Rocha
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Psicólogo clínico especializado em Terapia Cognitivo-Comportamental, 
              oferecendo um espaço seguro e acolhedor para seu crescimento pessoal.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://wa.me/5512992399676"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors duration-200"
              >
                <span className="text-sm">📱</span>
              </a>
              <a
                href="https://instagram.com/psicomrocha"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors duration-200"
              >
                <span className="text-sm">📸</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors duration-200">
                  Terapia Individual
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors duration-200">
                  Terapia Online
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-amber-400 transition-colors duration-200">
                  Acompanhamento Intensivo
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center space-x-2">
                <span>📱</span>
                <span>(12) 99239-9676</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📸</span>
                <span>@psicomrocha</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>✉️</span>
                <span>contato@matheusrocha.psi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Matheus Rocha - Psicólogo. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-amber-400 text-sm transition-colors duration-200">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
