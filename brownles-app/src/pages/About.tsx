import ScrollReveal from "../components/ScrollReveal";
import SEO from "../components/SEO";

const About = () => {
  return (
    <>
      <SEO
        title="Nuestra Historia | Brownles Boutique"
        description="Conoce la esencia de Brownles Boutique: pasión por el detalle, dedicación artesanal y compromiso con la excelencia en cada creación dulce."
        canonical="https://tudominio.com/about"
        ogImage="https://tudominio.com/og-about.jpg"
      />

      <div className="space-y-28">
        {/* HERO EDITORIAL */}
        <section className="text-center py-24 space-y-8">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-sm tracking-[0.4em] uppercase text-[#6A1E55]">
                Nuestra Esencia
              </p>

              <h1 className="font-display text-4xl md:text-5xl font-light text-[#2C2C2C] dark:text-[#F5F5F5] leading-relaxed">
                Pasión por el detalle,
                <br />
                dedicación en cada creación.
              </h1>

              <div className="w-16 h-[1px] bg-[#6A1E55] mx-auto mt-6" />
            </div>
          </ScrollReveal>
        </section>

        {/* IMAGEN EDITORIAL */}
        <section className="relative h-[70vh] w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1559620192-032c4bc4674e"
            alt="Proceso artesanal"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay suave */}
          <div className="absolute inset-0 bg-black/40 dark:bg-black/50" />

          <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
            <ScrollReveal>
              <div className="space-y-6 text-white">
                <h2 className="font-display text-4xl md:text-5xl font-light leading-relaxed">
                  Donde la técnica
                  <br />
                  se encuentra con la pasión.
                </h2>

                <div className="w-20 h-[1px] bg-white/70 mx-auto" />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* HISTORIA */}
        <section className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                  Nuestra Historia
                </h2>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Nacimos con la intención de transformar momentos cotidianos en
                  experiencias memorables. Cada receta surge de la búsqueda
                  constante por equilibrio, textura y armonía visual.
                </p>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                  Creemos que un postre no es solo sabor, es emoción, detalle y
                  dedicación absoluta al proceso.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-[#F8F6F4] dark:bg-[#1E1E1E] p-12 rounded-2xl border border-transparent dark:border-white/5">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg italic">
                  “La excelencia no está en lo complejo, sino en la precisión
                  con la que se ejecuta lo simple.”
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* VALORES */}
        <section className="max-w-6xl mx-auto px-6 space-y-16">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                Nuestros Valores
              </h2>
              <div className="w-24 h-[1px] bg-[#6A1E55] mx-auto opacity-40" />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Calidad",
                text: "Seleccionamos ingredientes con estándares rigurosos para garantizar excelencia en cada creación.",
              },
              {
                title: "Detalle",
                text: "Cada acabado es tratado con precisión artesanal y sensibilidad estética.",
              },
              {
                title: "Compromiso",
                text: "Entendemos que cada pedido representa un momento importante para nuestros clientes.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.15}>
                <div className="space-y-4">
                  <h3 className="text-xl font-medium text-[#2C2C2C] dark:text-[#F5F5F5]">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* PROCESO */}
        <section className="max-w-5xl mx-auto px-6 py-28 space-y-20">
          <ScrollReveal>
            <div className="text-center space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                Nuestro Proceso
              </h2>
              <div className="w-24 h-[1px] bg-[#6A1E55] mx-auto opacity-40" />
            </div>
          </ScrollReveal>

          <div className="space-y-24">
            {[
              {
                step: "01",
                title: "Selección",
                text: "Elegimos cuidadosamente cada ingrediente asegurando frescura, calidad y equilibrio en sabor.",
              },
              {
                step: "02",
                title: "Elaboración",
                text: "Aplicamos técnica precisa y tiempos controlados para lograr textura y armonía.",
              },
              {
                step: "03",
                title: "Presentación",
                text: "Cada detalle visual es tratado como parte esencial de la experiencia.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.2}>
                <div className="grid md:grid-cols-3 gap-8 items-start">
                  <div className="text-[#6A1E55] text-5xl font-light">
                    {item.step}
                  </div>

                  <div className="md:col-span-2 space-y-4">
                    <h3 className="text-2xl font-medium text-[#2C2C2C] dark:text-[#F5F5F5]">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                      {item.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="text-center py-28 space-y-10">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                Creamos experiencias, no solo postres.
              </h2>

              <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed text-lg">
                Permítenos formar parte de tu próximo momento especial.
              </p>

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
                Contáctanos
              </a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};
export default About;
