import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriFit - Tu plataforma de bienestar integral",
  description: "Plataforma integral para un estilo de vida saludable con nutrición personalizada, entrenamientos efectivos y seguimiento completo.",
  keywords: "nutrición, fitness, salud, bienestar, entrenamiento, dieta",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Navigation Header */}
        <header className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="text-2xl">🥗</div>
                <div className="text-xl font-bold">
                  <span className="text-blue-600">Nutri</span>
                  <span className="text-green-600">Fit</span>
                </div>
              </Link>

              {/* Main Navigation */}
              <div className="hidden md:flex items-center gap-8">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  🏠 Inicio
                </Link>
                <Link 
                  href="/users" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  👥 Equipo
                </Link>
                <Link 
                  href="/dashboard" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  📊 Dashboard
                </Link>
                <Link 
                  href="/nutrition" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
                >
                  🍎 Nutrición
                </Link>
              </div>

              {/* User Actions */}
              <div className="flex items-center gap-4">
                <button className="hidden md:block text-gray-600 hover:text-blue-600 transition-colors">
                  🔔
                </button>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                  CT
                </div>
                
                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-600 hover:text-blue-600 transition-colors">
                  ☰
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden mt-4 pt-4 border-t border-gray-100">
              <div className="flex flex-col gap-3">
                <Link 
                  href="/" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  🏠 Inicio
                </Link>
                <Link 
                  href="/users" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  👥 Equipo
                </Link>
                <Link 
                  href="/dashboard" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  📊 Dashboard
                </Link>
                <Link 
                  href="/nutrition" 
                  className="text-gray-600 hover:text-blue-600 transition-colors font-medium py-2"
                >
                  🍎 Nutrición
                </Link>
              </div>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">🥗</div>
                  <div className="text-xl font-bold">
                    <span className="text-blue-400">Nutri</span>
                    <span className="text-green-400">Fit</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 max-w-md">
                  Tu plataforma integral para un estilo de vida saludable. 
                  Nutrición personalizada, entrenamientos efectivos y seguimiento completo.
                </p>
                <div className="flex gap-4">
                  <button className="text-gray-300 hover:text-white transition-colors">📘</button>
                  <button className="text-gray-300 hover:text-white transition-colors">📷</button>
                  <button className="text-gray-300 hover:text-white transition-colors">🐦</button>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/about" className="text-gray-300 hover:text-white transition-colors">Sobre Nosotros</Link>
                  <Link href="/services" className="text-gray-300 hover:text-white transition-colors">Servicios</Link>
                  <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contacto</Link>
                  <Link href="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link>
                </div>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold mb-4">Soporte</h3>
                <div className="flex flex-col gap-2">
                  <Link href="/help" className="text-gray-300 hover:text-white transition-colors">Centro de Ayuda</Link>
                  <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacidad</Link>
                  <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">Términos</Link>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</Link>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 NutriFit. Todos los derechos reservados.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
