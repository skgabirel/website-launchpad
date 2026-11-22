import heroMain from "@/assets/hero-main.jpg";
import storyDesign from "@/assets/story-design.jpg";
import storyArchitecture from "@/assets/story-architecture.jpg";
import productTeaset from "@/assets/product-teaset.jpg";
import productTote from "@/assets/product-tote.jpg";
import productAudio from "@/assets/product-audio.jpg";
import productLinen from "@/assets/product-linen.jpg";
import catModa from "@/assets/cat-moda.jpg";
import catCasa from "@/assets/cat-casa.jpg";
import catTech from "@/assets/cat-tech.jpg";
import catBeleza from "@/assets/cat-beleza.jpg";
import catCha from "@/assets/cat-cha.jpg";
import catPapelaria from "@/assets/cat-papelaria.jpg";
import aboutShopper from "@/assets/about-shopper.jpg";

// Placeholder editorial content — replaced by real data in a later phase.

export const hero = {
  main: {
    image: heroMain,
    alt: "Mulher caminhando diante de um edifício de concreto e vidro em Xangai",
    caption: "Xangai, distrito de Xuhui",
  },
  stories: [
    {
      kicker: "Design",
      title: "Os pequenos ateliês que redesenham Shenzhen",
      image: storyDesign,
      alt: "Loja de design com cerâmicas em prateleiras de madeira clara",
    },
    {
      kicker: "Arquitetura",
      title: "Escadas, luz e silêncio nos novos museus chineses",
      image: storyArchitecture,
      alt: "Escadaria curva de concreto branco em um museu contemporâneo",
    },
  ],
};

export type Product = {
  brand: string;
  name: string;
  price: string;
  image: string;
};

export const products: Product[] = [
  { brand: "Atelier Qing", name: "Conjunto de chá em celadon", price: "R$ 640", image: productTeaset },
  { brand: "Hai Studio", name: "Bolsa tote em couro taupe", price: "R$ 1.180", image: productTote },
  { brand: "Lumen Audio", name: "Caixa de som portátil + fones", price: "R$ 890", image: productAudio },
  { brand: "Mu Linen", name: "Camisa oversized em linho", price: "R$ 520", image: productLinen },
];

export type Category = { title: string; note: string; image: string };

export const categories: Category[] = [
  { title: "Moda", note: "Marcas independentes", image: catModa },
  { title: "Casa & Design", note: "Objetos para viver", image: catCasa },
  { title: "Tecnologia", note: "Do lançamento ao essencial", image: catTech },
  { title: "Beleza", note: "Cuidados e rituais", image: catBeleza },
  { title: "Chá & Rituais", note: "Cerâmica e folhas", image: catCha },
  { title: "Papelaria", note: "Papel, livros, escrita", image: catPapelaria },
];

export const about = {
  image: aboutShopper,
  alt: "Mãos segurando uma tigela de cerâmica artesanal em um mercado de design",
};
