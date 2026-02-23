import products from "../data/products";
import ProductCard from "../components/ProductCard";
import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const Products = () => {
  return (
    <>
      <SEO
        title="Nuestros Productos"
        description="Descubre la exquisita variedad de postres artesanales de Brownles Boutique. Desde pasteles personalizados hasta galletas decoradas, cada creación es una obra maestra de sabor y diseño. Perfectos para cualquier ocasión especial o simplemente para consentirte."
        canonical="https://brownlesboutique.com/"
      />

      <div className="space-y-20">
        {/* HERO EDITORIAL */}
        <section className="text-center py-20 space-y-6">
          <ScrollReveal>
            <>
              <p className="text-sm tracking-[0.4em] uppercase text-[#6A1E55]">
                Colección
              </p>

              <h1 className="font-display text-4xl md:text-5xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                Creaciones Artesanales
              </h1>

              <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">
                Cada postre es elaborado con precisión, ingredientes
                seleccionados y una dedicación absoluta al detalle.
              </p>

              <div className="w-16 h-[1px] bg-[#6A1E55] mx-auto mt-6" />
            </>
          </ScrollReveal>
        </section>

        {/* GRID DE PRODUCTOS */}
        <section className="pb-16">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.15}>
                <ProductCard product={product} />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA INFERIOR */}
        <section className="text-center py-28 -mt-20">
          <ScrollReveal>
            <div className="space-y-10">
              <div className="w-24 h-[1px] bg-[#6A1E55] mx-auto opacity-40" />

              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2C2C2C] dark:text-[#F5F5F5] leading-relaxed">
                ¿Buscas algo personalizado?
              </h2>

              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed text-lg">
                Podemos crear una propuesta especial adaptada a tu ocasión.
              </p>

              <div className="pt-4">
                <a
                  href="https://wa.me/50300000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block 
                    bg-[#2C2C2C] text-white 
                    px-10 py-4 rounded-full 
                    hover:bg-[#3E3E3E] 
                    dark:bg-[#E8DFD1] dark:text-[#111111] dark:hover:bg-[#d6ccbf]
                    transition duration-300
                  "
                >
                  Solicitar Propuesta
                </a>
              </div>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default Products;
