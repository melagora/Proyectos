export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Brownie Clásico Belga",
    price: 4.5,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c",
    description:
      "Chocolate belga intenso con centro húmedo y textura delicadamente crujiente en la superficie.",
  },
  {
    id: 2,
    name: "Cheesecake Frutos Rojos",
    price: 6.0,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad",
    description:
      "Base crocante artesanal con crema suave y coulis de frutos rojos naturales.",
  },
  {
    id: 3,
    name: "Tarta de Pistacho",
    price: 6.5,
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7",
    description:
      "Crema de pistacho tostado sobre base de mantequilla francesa, equilibrada y elegante.",
  },
  {
    id: 4,
    name: "Macarons Selection",
    price: 8.0,
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b",
    description:
      "Selección artesanal de macarons con rellenos suaves y colores sutiles.",
  },
  {
    id: 5,
    name: "Tiramisú Tradicional",
    price: 5.5,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
    description:
      "Capas delicadas de mascarpone y café espresso con cacao puro espolvoreado.",
  },
  {
    id: 6,
    name: "Croissant Almendra",
    price: 3.75,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff",
    description:
      "Hojaldre artesanal relleno de crema de almendra con acabado dorado perfecto.",
  },
];

export default products;
