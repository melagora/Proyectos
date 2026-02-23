import ScrollReveal from "../components/ScrollReveal";
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import SEO from "../components/SEO";

const Contact = () => {
  return (
    <>
      <SEO
        title="Contacto"
        description="Contáctanos para crear momentos especiales con nuestros postres artesanales. Síguenos en redes sociales."
        canonical="https://brownlesboutique.com/"
      />
      <div className="space-y-28">
        {/* HERO */}
        <section className="text-center py-24 space-y-8">
          <ScrollReveal>
            <div className="space-y-6">
              <p className="text-sm tracking-[0.4em] uppercase text-[#6A1E55]">
                Contacto
              </p>

              <h1 className="font-display text-4xl md:text-5xl font-light text-[#2C2C2C] dark:text-[#F5F5F5] leading-relaxed">
                Hablemos de tu próximo momento especial
              </h1>

              <div className="w-16 h-[1px] bg-[#6A1E55] mx-auto mt-6" />
            </div>
          </ScrollReveal>
        </section>

        {/* INFORMACIÓN */}
        <section className="max-w-4xl mx-auto px-6 text-center space-y-12">
          <ScrollReveal>
            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
              Estamos listos para crear una propuesta personalizada. Escríbenos
              o síguenos en nuestras redes sociales para ver nuestras últimas
              creaciones.
            </p>
          </ScrollReveal>

          {/* REDES SOCIALES */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-12">
              {/* Instagram */}
              <a
                href="https://instagram.com/TU_USUARIO"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3"
              >
                <div
                  className="
                w-14 h-14 flex items-center justify-center 
                rounded-full border 
                border-[#2C2C2C] dark:border-[#E8DFD1]
                group-hover:bg-[#2C2C2C] 
                dark:group-hover:bg-[#E8DFD1]
                transition duration-300
              "
                >
                  <FaInstagram
                    className="
                  text-[#2C2C2C] 
                  dark:text-[#E8DFD1]
                  group-hover:text-white 
                  dark:group-hover:text-[#111111]
                  text-xl transition
                "
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 tracking-wide">
                  Instagram
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com/TU_PAGINA"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center space-y-3"
              >
                <div
                  className="
                w-14 h-14 flex items-center justify-center 
                rounded-full border 
                border-[#2C2C2C] dark:border-[#E8DFD1]
                group-hover:bg-[#2C2C2C] 
                dark:group-hover:bg-[#E8DFD1]
                transition duration-300
              "
                >
                  <FaFacebookF
                    className="
                  text-[#2C2C2C] 
                  dark:text-[#E8DFD1]
                  group-hover:text-white 
                  dark:group-hover:text-[#111111]
                  text-xl transition
                "
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 tracking-wide">
                  Facebook
                </span>
              </a>
            </div>
          </ScrollReveal>
        </section>

        {/* CTA WHATSAPP */}
        <section className="text-center py-24 space-y-10">
          <ScrollReveal>
            <div className="space-y-8">
              <h2 className="font-display text-3xl md:text-4xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                ¿Prefieres atención directa?
              </h2>

              <a
                href="https://wa.me/50300000000"
                target="_blank"
                rel="noopener noreferrer"
                className="
                inline-flex items-center gap-3 
                bg-[#2C2C2C] text-white 
                px-10 py-4 rounded-full 
                hover:bg-[#3E3E3E]
                dark:bg-[#E8DFD1] 
                dark:text-[#111111] 
                dark:hover:bg-[#d6ccbf]
                transition duration-300
              "
              >
                <FaWhatsapp />
                Escribir por WhatsApp
              </a>
            </div>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
};

export default Contact;
