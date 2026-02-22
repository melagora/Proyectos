import { Link } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const featuredProducts = products.slice(0, 3);

const Home = () => {
  return (
    <>
      <SEO
        title="Brownles Boutique | Postres Artesanales Premium"
        description="Descubre postres artesanales elaborados con ingredientes seleccionados. Brownles Boutique transforma momentos simples en experiencias memorables."
        canonical="https://brownlesboutique.com/"
        ogImage="https://brownlesboutique.com/og-home.jpg"
      />

      <div className="space-y-20">
        {/* HERO */}
        <ScrollReveal>
          <section className="relative overflow-hidden">
            <div className="grid md:grid-cols-2 items-center gap-16">
              {/* Texto */}
              <div className="space-y-6">
                <p className="text-sm tracking-[0.3em] uppercase text-[#6A1E55]">
                  Brownles Boutique
                </p>

                <h1 className="font-display text-4xl md:text-6xl font-light leading-tight text-[#2C2C2C] dark:text-[#F5F5F5]">
                  Arte en cada
                  <span className="block font-semibold">creación dulce</span>
                </h1>

                <p className="text-gray-600 dark:text-gray-300 text-lg max-w-lg">
                  Postres artesanales elaborados con ingredientes seleccionados,
                  diseñados para transformar momentos simples en experiencias
                  memorables.
                </p>

                <div className="flex gap-4 pt-4">
                  <Link
                    to="/productos"
                    className="bg-[#2C2C2C] text-white px-8 py-3 rounded-full 
                    hover:bg-[#3E3E3E] 
                    dark:bg-[#E8DFD1] dark:text-[#111111] dark:hover:bg-[#d6ccbf]
                    transition duration-300"
                  >
                    Explorar Colección
                  </Link>

                  <a
                    href="https://wa.me/50300000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#2C2C2C] px-8 py-3 rounded-full 
                    hover:bg-[#2C2C2C] hover:text-white 
                    dark:border-[#E8DFD1] dark:text-[#E8DFD1] 
                    dark:hover:bg-[#E8DFD1] dark:hover:text-[#111111]
                    transition duration-300"
                  >
                    Ordenar Ahora
                  </a>
                </div>
              </div>

              {/* Imagen */}
              <div className="relative group">
                <img
                  src="https://images.unsplash.com/photo-1559620192-032c4bc4674e"
                  alt="Pastelería Premium artesanal de Brownles Boutique"
                  className="rounded-3xl shadow-2xl transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* El resto de tu código queda EXACTAMENTE igual */}
        {/* PRODUCTOS DESTACADOS */}
        {/* NUESTRA FILOSOFÍA */}
        {/* TESTIMONIOS */}
        {/* CTA FINAL */}
      </div>
    </>
  );
};

export default Home;
