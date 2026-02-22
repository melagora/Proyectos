import type { Product } from "../data/products";

interface Props {
  product: Product;
  featured?: boolean;
}

const ProductCard = ({ product, featured = false }: Props) => {
  const message = `Hola, quiero ordenar el producto: ${product.name}`;

  return (
    <div
      className="
      animate-fadeUp
      bg-white/80 dark:bg-[#1E1E1E]/80
      backdrop-blur-sm
      rounded-2xl
      shadow-md dark:shadow-lg
      hover:shadow-2xl dark:hover:shadow-black/40
      transition duration-500
      overflow-hidden
      group
      flex flex-col
      border border-white/40 dark:border-white/5
    "
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-64 object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="p-6 space-y-3 flex flex-col flex-grow">
        <h3 className="font-display text-xl text-[#2C2C2C] dark:text-[#F5F5F5]">
          {product.name}
        </h3>

        <p className="text-gray-500 dark:text-gray-300 text-sm flex-grow">
          {product.description}
        </p>

        <p className="text-[#6A1E55] font-medium text-lg">
          ${product.price.toFixed(2)}
        </p>

        {/* BOTÓN PREMIUM PRO */}
        <a
          href={`https://wa.me/50300000000?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`
            mt-6 relative group overflow-hidden 
            text-white text-center py-3 rounded-full 
            transition-all duration-500 
            hover:shadow-xl hover:-translate-y-1
            ${
              featured
                ? "bg-[#6A1E55] dark:bg-[#7A2565]"
                : "bg-[#2C2C2C] dark:bg-[#E8DFD1] dark:text-[#111111]"
            }
          `}
        >
          {/* Overlay */}
          <span
            className="
              absolute inset-0 
              bg-gradient-to-r 
              from-[#6A1E55] to-[#3E3E3E]
              dark:from-[#6A1E55] dark:to-[#1A1A1A]
              opacity-0 group-hover:opacity-100 
              
              transition-opacity duration-500
            "
          ></span>

          {/* Contenido */}
          <span
            className="
              relative z-10 
              flex items-center justify-center gap-2 
              text-sm tracking-wide
              dark:group-hover:text-white
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-4 h-4 fill-current transition-transform duration-500 group-hover:rotate-6"
            >
              <path d="M16.04 3C9.41 3 4 8.41 4 15.04c0 2.65.86 5.1 2.33 7.1L4 29l7.05-2.3a12 12 0 0 0 4.99 1.06h.01c6.63 0 12.04-5.41 12.04-12.04S22.68 3 16.04 3zm6.97 17.06c-.29.82-1.71 1.57-2.35 1.66-.6.09-1.36.13-2.2-.13-.51-.16-1.16-.38-2-.74-3.51-1.52-5.8-5.04-5.98-5.27-.18-.23-1.43-1.9-1.43-3.63 0-1.73.91-2.58 1.23-2.94.32-.36.7-.45.93-.45h.67c.22 0 .51-.08.8.63.29.71.98 2.45 1.07 2.63.09.18.15.4.03.63-.12.23-.18.36-.36.55-.18.18-.38.4-.55.54-.18.14-.36.29-.16.57.2.29.9 1.49 1.94 2.42 1.33 1.18 2.46 1.55 2.8 1.73.35.18.55.16.76-.1.2-.26.87-1.02 1.1-1.37.23-.35.47-.29.8-.18.32.11 2.04.96 2.39 1.13.35.18.58.26.67.4.09.14.09.82-.2 1.64z" />
            </svg>
            Ordenar por WhatsApp
          </span>
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
