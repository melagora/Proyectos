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
        {/* PRODUCTOS DESTACADOS */}{" "}
        <section className="relative bg-[#E8DFD1] dark:bg-[#181818] py-24 rounded-3xl px-8 overflow-hidden">
          {" "}
          <ScrollReveal>
            {" "}
            <div className="text-center mb-16 space-y-4">
              {" "}
              <p className="text-sm tracking-[0.3em] uppercase text-[#6A1E55]">
                {" "}
                Selección Especial{" "}
              </p>{" "}
              <h2 className="font-display text-4xl md:text-5xl text-[#2C2C2C] dark:text-[#F5F5F5] font-light">
                {" "}
                Nuestros Destacados{" "}
              </h2>{" "}
              <div className="w-16 h-[1px] bg-[#6A1E55] mx-auto mt-4" />{" "}
            </div>{" "}
          </ScrollReveal>{" "}
          <div className="grid md:grid-cols-3 gap-10">
            {" "}
            {featuredProducts.map((product, index) => (
              <ScrollReveal key={product.id} delay={index * 0.15}>
                {" "}
                <ProductCard product={product} />{" "}
              </ScrollReveal>
            ))}{" "}
          </div>{" "}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-white dark:to-[#111111] pointer-events-none" />{" "}
        </section>{" "}
        {/* NUESTRA FILOSOFÍA */}{" "}
        <ScrollReveal delay={0.2}>
          {" "}
          <section className="py-24 -mt-24">
            {" "}
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {" "}
              <div className="relative">
                {" "}
                <img
                  src="https://images.unsplash.com/photo-1509440159596-0249088772ff"
                  alt="Proceso artesanal"
                  className="rounded-3xl shadow-xl object-cover w-full h-[450px]"
                />{" "}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl" />{" "}
              </div>{" "}
              <div className="space-y-8">
                {" "}
                <p className="text-sm tracking-[0.3em] uppercase text-[#6A1E55]">
                  {" "}
                  Nuestra Filosofía{" "}
                </p>{" "}
                <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2C2C] dark:text-[#F5F5F5] leading-snug">
                  {" "}
                  Tradición, detalle y{" "}
                  <span className="block font-semibold">
                    {" "}
                    excelencia artesanal{" "}
                  </span>{" "}
                </h2>{" "}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {" "}
                  En Brownles creemos que cada postre debe contar una historia.
                  Seleccionamos ingredientes de calidad, respetamos los tiempos
                  de preparación y cuidamos cada acabado para ofrecer una
                  experiencia que trasciende el sabor.{" "}
                </p>{" "}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {" "}
                  Nuestro compromiso es transformar momentos cotidianos en
                  recuerdos memorables a través de la repostería artesanal.{" "}
                </p>{" "}
                <div className="w-20 h-[1px] bg-[#6A1E55]" />{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </ScrollReveal>{" "}
        {/* TESTIMONIOS */}{" "}
        <section className="py-24 -mt-24 bg-[#FAF7F2] dark:bg-[#151515] rounded-3xl px-8">
          {" "}
          <ScrollReveal>
            {" "}
            <div className="text-center mb-20 space-y-4">
              {" "}
              <p className="text-sm tracking-[0.3em] uppercase text-[#6A1E55]">
                {" "}
                Experiencias Reales{" "}
              </p>{" "}
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#2C2C2C] dark:text-[#F5F5F5]">
                {" "}
                Lo que dicen nuestros clientes{" "}
              </h2>{" "}
              <div className="w-16 h-[1px] bg-[#6A1E55] mx-auto mt-4" />{" "}
            </div>{" "}
          </ScrollReveal>{" "}
          <div className="grid md:grid-cols-3 gap-10">
            {" "}
            {[
              {
                text: "La presentación es impecable y el sabor simplemente espectacular. Se nota el cuidado en cada detalle.",
                name: "María González",
                role: "Cliente frecuente",
              },
              {
                text: "Pedí para un cumpleaños especial y superó todas mis expectativas. Definitivamente volveré a ordenar.",
                name: "Carlos Ramírez",
                role: "Evento privado",
              },
              {
                text: "No es solo un postre, es una experiencia. Cada creación tiene personalidad y elegancia.",
                name: "Andrea López",
                role: "Cliente verificada",
              },
            ].map((item, index) => (
              <ScrollReveal key={index}>
                {" "}
                <div className="bg-white dark:bg-[#1E1E1E] p-8 rounded-2xl shadow-sm hover:shadow-md transition duration-500 space-y-6">
                  {" "}
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {" "}
                    “{item.text}”{" "}
                  </p>{" "}
                  <div>
                    {" "}
                    <p className="font-medium text-[#2C2C2C] dark:text-white">
                      {" "}
                      {item.name}{" "}
                    </p>{" "}
                    <p className="text-sm text-gray-400">{item.role}</p>{" "}
                  </div>{" "}
                </div>{" "}
              </ScrollReveal>
            ))}{" "}
          </div>{" "}
        </section>{" "}
        {/* CTA FINAL */}{" "}
        <ScrollReveal delay={0.2}>
          {" "}
          <section className="relative py-30 -mt-4 text-center overflow-hidden rounded-3xl">
            {" "}
            <div className="absolute inset-0 bg-[#2C2C2C]" />{" "}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6A1E55]/30 to-black/40" />{" "}
            <div className="relative z-10 max-w-3xl mx-auto space-y-10 px-6">
              {" "}
              <p className="text-sm tracking-[0.4em] uppercase text-white/70">
                {" "}
                Momento Especial{" "}
              </p>{" "}
              <h2 className="font-display text-4xl md:text-6xl font-light text-white leading-tight">
                {" "}
                Convierte lo cotidiano en{" "}
                <span className="block font-semibold">
                  algo inolvidable
                </span>{" "}
              </h2>{" "}
              <p className="text-white/70 text-lg leading-relaxed">
                {" "}
                Cada creación está pensada para transformar un instante común en
                una experiencia que permanece en la memoria.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
                {" "}
                <a
                  href="https://wa.me/50300000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#2C2C2C] px-10 py-4 rounded-full hover:bg-[#E8DFD1] transition duration-300 font-medium"
                >
                  {" "}
                  Ordenar por WhatsApp{" "}
                </a>{" "}
                <Link
                  to="/productos"
                  className="bg-white text-[#2C2C2C] px-10 py-4 rounded-full hover:bg-[#E8DFD1] transition duration-300 font-medium"
                >
                  {" "}
                  Ver Colección Completa{" "}
                </Link>{" "}
              </div>{" "}
            </div>{" "}
          </section>{" "}
        </ScrollReveal>{" "}
      </div>
    </>
  );
};

export default Home;
