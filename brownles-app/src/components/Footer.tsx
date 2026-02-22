import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F] text-white py-20 px-8 mt-24">
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
        {/* Marca */}
        <div className="space-y-6">
          <h3 className="font-display text-2xl font-light">Brownles</h3>

          <p className="text-white/60 leading-relaxed text-sm">
            Repostería artesanal creada con precisión, detalle y pasión.
            Transformamos momentos simples en experiencias memorables.
          </p>
        </div>

        {/* Navegación */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
            Navegación
          </p>

          <ul className="space-y-3 text-white/70">
            <li>
              <Link to="/" className="hover:text-white transition">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/productos" className="hover:text-white transition">
                Productos
              </Link>
            </li>
            <li>
              <Link to="/nosotros" className="hover:text-white transition">
                Nosotros
              </Link>
            </li>
            <li>
              <Link to="/contacto" className="hover:text-white transition">
                Contacto
              </Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <p className="uppercase tracking-[0.3em] text-white/50 text-xs">
            Contacto
          </p>

          <div className="space-y-3 text-white/70 text-sm">
            <p>Santa Ana, El Salvador</p>
            <p>+503 0000-0000</p>
            <p>contacto@brownles.com</p>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-16 pt-8 border-t border-white/10 text-center text-white/40 text-xs">
        © {new Date().getFullYear()} Brownles. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
