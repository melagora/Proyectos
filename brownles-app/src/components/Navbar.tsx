import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkMode";

interface NavbarProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300
      bg-[#E8DFD1] dark:bg-[#1A1A1A]
      text-[#2C2C2C] dark:text-[#EAEAEA]
      ${scrolled ? "shadow-xl" : "shadow-md"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-xl font-bold tracking-wide">
          <Link to="/">Brownles 🍰</Link>
        </div>

        {/* Links Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Inicio
          </NavLink>

          <NavLink
            to="/productos"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Productos
          </NavLink>

          <NavLink
            to="/nosotros"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contacto"
            className={({ isActive }) =>
              isActive ? "underline" : "hover:underline"
            }
          >
            Contacto
          </NavLink>

          {/* Toggle Dark Mode */}
          <button
            onClick={toggleTheme}
            className="ml-6 transition-transform duration-300 hover:"
          >
            {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </nav>

        {/* Botón Mobile */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Menú Mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-[#F5EFE6] dark:bg-[#222222] px-6 py-4 flex flex-col items-center gap-4 text-sm font-medium">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Inicio
          </NavLink>

          <NavLink
            to="/productos"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Productos
          </NavLink>

          <NavLink
            to="/nosotros"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Nosotros
          </NavLink>

          <NavLink
            to="/contacto"
            onClick={() => setIsOpen(false)}
            className="hover:underline"
          >
            Contacto
          </NavLink>

          {/* Toggle en Mobile */}
          <button
            onClick={toggleTheme}
            className="mt-4 transition duration-300"
          >
            {theme === "dark" ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
