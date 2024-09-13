import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, XIcon, HomeIcon, UserIcon, WrenchIcon, ImageIcon, PhoneIcon } from 'lucide-react'
import DentistProfile from "@/assets/images/profile/profile_HD.png"

const menuItems = [
  { name: 'Inicio', href: '#home', icon: HomeIcon },
  { name: 'Sobre Mí', href: '#about', icon: UserIcon },
  { name: 'Servicios', href: '#skills-and-services', icon: WrenchIcon },
  { name: 'Casos Clínicos', href: '#projects', icon: ImageIcon },
  { name: 'Contacto', href: '#contact', icon: PhoneIcon },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isHome, setIsHome] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home')
      
      // Verifica si el homeSection existe antes de acceder a sus propiedades
      if (homeSection) {
        const homeBottom = homeSection.offsetTop + homeSection.offsetHeight
        setIsScrolled(window.scrollY > 50)
        setIsHome(window.scrollY < homeBottom - 50)
      }
    }
  
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const smoothScroll = (event: MouseEvent) => {
      const target = event.target as HTMLAnchorElement; // Cast para asegurar que es un <a>
      if (target.tagName === 'A' && target.hash) {
        event.preventDefault();
        const targetId = target.hash.slice(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth',
          });
        }
      }
    };
  
    document.addEventListener('click', smoothScroll);
  
    return () => {
      document.removeEventListener('click', smoothScroll);
    };
  }, []);
  

  

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : isHome ? 'bg-transparent' : 'bg-white shadow-md'
      }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={DentistProfile.src}
              alt="Dr. Jair Trujillo V."
              className="w-10 h-10 rounded-full border-2 border-blue-500"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.5 }}
            />
            <span className={`text-xl font-bold ${isScrolled || !isHome ? 'text-gray-800' : 'text-black'}`}>
              Dr. Jair Trujillo V.
            </span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul
            className="hidden md:flex space-x-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {menuItems.map((item, index) => (
              <motion.li key={item.name} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${isScrolled || !isHome ? 'text-gray-600 hover:text-blue-600' : 'text-black hover:text-blue-600'
                    }`}
                >
                  {item.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden"
                aria-label="Menu"
              >
                <MenuIcon className={`h-6 w-6 ${isScrolled || !isHome ? 'text-gray-800' : 'text-black'}`} />
              </Button>
            </SheetTrigger>

            {/* Fondo oscuro al abrir el menú */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  className="fixed inset-0 bg-black bg-opacity-50 z-40"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>

            <SheetContent side="right" className="w-full sm:w-[400px] bg-white backdrop-blur-md p-0 z-50">
              <motion.nav
                initial={{ x: 400 }}
                animate={{ x: 0 }}
                exit={{ x: 400 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="flex flex-col h-full p-6"
              >
                {/* Header del menú */}
                <div className="flex justify-between items-center mb-10">
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src={DentistProfile.src}
                      alt="Dr. Jair Trujillo V."
                      className="w-12 h-12 rounded-full border-2 border-blue-500"
                    />
                    <span className="text-2xl font-bold text-black">Dr. Jair Trujillo V.</span>
                  </motion.div>
                  {/* Botón de cierre */}
                  <Button variant="ghost" onClick={() => setIsMenuOpen(false)}>
                    <XIcon className="h-6 w-6 text-black" />
                  </Button>
                </div>

                {/* Elementos del menú */}
                <ul className="space-y-6">
                  {menuItems.map((item, index) => (
                    <motion.li
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      <a
                        href={item.href}
                        className="flex items-center space-x-4 text-xl font-medium text-black hover:text-blue-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <item.icon className="h-6 w-6" />
                        <span>{item.name}</span>
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Pie de página */}
                <motion.div
                  className="mt-auto pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <p className="text-black text-sm">&copy; {currentYear} Dr. Jair Trujillo V. Todos los derechos reservados.</p>
                </motion.div>
              </motion.nav>
            </SheetContent>
          </Sheet>

        </div>
      </nav>
    </header>
  )
}