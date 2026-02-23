import { Link } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <>
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe. Descubre postres artesanales elaborados con pasión y detalle."
        canonical="https://brownlesboutique.com/"
      />

      <div className="min-h-screen flex items-center justify-center px-6">
        <ScrollReveal>
          <div className="text-center space-y-10">
            <h1 className="font-display text-[120px] md:text-[160px] font-light text-[#6A1E55] leading-none">
              404
            </h1>

            <div className="w-24 h-[1px] bg-[#6A1E55] mx-auto opacity-40" />

            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2C2C2C]">
                Esta página no existe
              </h2>

              <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                Pero podemos crear algo especial para ti.
              </p>
            </div>

            <div className="pt-6">
              <Link
                to="/"
                className="inline-block bg-[#2C2C2C] text-white px-10 py-4 rounded-full hover:bg-[#3E3E3E] transition duration-300"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </>
  );
};

export default NotFound;
