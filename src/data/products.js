// ===== Import all product images =====

// Freeze-Dried Fruits
import mango from "../assets/freezedfruits/packet/mango.png";
import mango2 from "../assets/freezedfruits/raw/mango.jpg";
import strawberry from "../assets/freezedfruits/packet/strawberry.png";
import strawberry2 from "../assets/freezedfruits/raw/strawberry.jpg";
import pomegranate from "../assets/freezedfruits/packet/pomogranate.png";
import pomegranate2 from "../assets/freezedfruits/raw/pomogranate.jpg";
import pineapple from "../assets/freezedfruits/packet/pineapple.png";
import pineapple2 from "../assets/freezedfruits/raw/pineapple.jpg";
import custardapple from "../assets/freezedfruits/packet/custardapple.png";
import custardapple2 from "../assets/freezedfruits/raw/custardapple.jpg";
import chikoo from "../assets/freezedfruits/packet/chikoo.png";
import chikoo2 from "../assets/freezedfruits/raw/chikoo.jpg";
import blackjamun from "../assets/freezedfruits/packet/blackjamun.png";
import blackjamun2 from "../assets/freezedfruits/raw/blackjamun.jpg";
import banana from "../assets/freezedfruits/packet/banana.png";
import banana2 from "../assets/freezedfruits/raw/banana.jpg";
import apple from "../assets/freezedfruits/packet/apple.png";
import apple2 from "../assets/freezedfruits/raw/apple.jpg";

// Muesli & Bars
import fruitandnut from "../assets/mueslibars/fruitandnut.png";
import fruitandnut2 from "../assets/mueslibars/fruitandnut2.png";
import chocolateMuesli from "../assets/mueslibars/chocolate.png";
import chocolateMuesli2 from "../assets/mueslibars/chocolate2.png";
import masalaoats from "../assets/mueslibars/masalaoats.png";
import masalaoats2 from "../assets/mueslibars/masalaoats2.png";
import proteinmuesli from "../assets/mueslibars/protein.png";
import proteinmuesli2 from "../assets/mueslibars/protein2.png";
import fudgebars from "../assets/mueslibars/fudgebars.png";
import fudgebars2 from "../assets/mueslibars/fudgebars2.png";
import milletbars from "../assets/mueslibars/milletbars.png";
import milletbars2 from "../assets/mueslibars/milletbars2.png";
import datebars from "../assets/mueslibars/datebars.png";
import datebars2 from "../assets/mueslibars/datebars2.png";
import granolabars from "../assets/mueslibars/gbar.png";
import granolabars2 from "../assets/mueslibars/gbar2.png";
import brownieproteinbars from "../assets/mueslibars/browniebar.png";
import brownieproteinbars2 from "../assets/mueslibars/browniebar2.png";
import fruitbars from "../assets/mueslibars/fruitbars.png";
import fruitbars2 from "../assets/mueslibars/fruitbars2.png";

// Nut Butters
import peanut from "../assets/nutbutters/peanut.png";
import peanut2 from "../assets/nutbutters/peanut2.png";
import chocoPeanut from "../assets/nutbutters/chocolate.png";
import chocoPeanut2 from "../assets/nutbutters/chocolate2.png";
import almond from "../assets/nutbutters/almond.png";
import almond2 from "../assets/nutbutters/almond2.png";
import hazelnut from "../assets/nutbutters/hazelnut.png";
import hazelnut2 from "../assets/nutbutters/hazelnut2.png";
import cashew from "../assets/nutbutters/cashew.png";
import cashew2 from "../assets/nutbutters/cashew2.png";

// ===== Unified Product Array =====
const products = [
  // 🍍 Freeze-Dried Fruits
  {
    id: 1,
    category: "Freeze-Dried Fruits",
    name: "Mango Chunks",
    description: "Delicious sun-dried mango slices packed with natural sweetness and nutrients.",
    images: [mango, mango2],
  },
  {
    id: 2,
    category: "Freeze-Dried Fruits",
    name: "Strawberry Slices",
    description: "Crispy freeze-dried strawberry slices bursting with real fruity flavor.",
    images: [strawberry, strawberry2],
  },
  {
    id: 3,
    category: "Freeze-Dried Fruits",
    name: "Pomegranate Kernel Chunks",
    description: "Crunchy and tangy dried pomegranate kernels rich in antioxidants and fiber.",
    images: [pomegranate, pomegranate2],
  },
  {
    id: 4,
    category: "Freeze-Dried Fruits",
    name: "Pineapple Slices",
    description: "Tropical, tangy pineapple slices dried to perfection for a sweet and zesty snack.",
    images: [pineapple, pineapple2],
  },
  {
    id: 5,
    category: "Freeze-Dried Fruits",
    name: "Custard Apple Chunks",
    description: "Naturally sweet custard apple bites packed with creamy flavor and nutrients.",
    images: [custardapple, custardapple2],
  },
  {
    id: 6,
    category: "Freeze-Dried Fruits",
    name: "Chikoo Slices",
    description: "Wholesome dried chikoo slices offering a rich, caramel-like sweetness.",
    images: [chikoo, chikoo2],
  },
  {
    id: 7,
    category: "Freeze-Dried Fruits",
    name: "Black Jamun Chunks",
    description: "Tangy-sweet black jamun snacks packed with natural goodness and antioxidants.",
    images: [blackjamun, blackjamun2],
  },
  {
    id: 8,
    category: "Freeze-Dried Fruits",
    name: "Banana Chunks",
    description: "Crispy and naturally sweet banana chips made from ripe, handpicked bananas.",
    images: [banana, banana2],
  },
  {
    id: 9,
    category: "Freeze-Dried Fruits",
    name: "Apple Chunks",
    description: "Light, crunchy apple slices that retain the natural sweetness of fresh apples.",
    images: [apple, apple2],
  },

  // 🥣 Muesli & Bars
  {
    id: 10,
    category: "Muesli & Bars",
    name: "Fruit & Nut Muesli",
    description: "A wholesome blend of crunchy nuts, seeds, and dried fruits — packed with natural fiber and energy.",
    images: [fruitandnut, fruitandnut2],
  },
  {
    id: 11,
    category: "Muesli & Bars",
    name: "Chocolate Muesli",
    description: "Indulge in the goodness of whole grains and cocoa — a perfect balance of health and chocolatey taste.",
    images: [chocolateMuesli, chocolateMuesli2],
  },
  {
    id: 12,
    category: "Muesli & Bars",
    name: "Masala Oats",
    description: "A savory twist on traditional oats — spiced with aromatic Indian flavors for a hearty, healthy meal.",
    images: [masalaoats, masalaoats2],
  },
  {
    id: 13,
    category: "Muesli & Bars",
    name: "Protein Muesli & Oats",
    description: "High-protein blend of oats, seeds, and nuts designed for muscle recovery and sustained energy.",
    images: [proteinmuesli, proteinmuesli2],
  },
  {
    id: 14,
    category: "Muesli & Bars",
    name: "Fudge Bars",
    description: "Soft, chewy bars with rich cocoa and nuts — a satisfying snack that fuels your day.",
    images: [fudgebars, fudgebars2],
  },
  {
    id: 15,
    category: "Muesli & Bars",
    name: "Millet Bars",
    description: "Power-packed bars made with millets, honey, and nuts — perfect for healthy snacking on the go.",
    images: [milletbars, milletbars2],
  },
  {
    id: 16,
    category: "Muesli & Bars",
    name: "Date Bars",
    description: "Naturally sweet bars made with dates, oats, and nuts — no added sugar, just pure energy.",
    images: [datebars, datebars2],
  },
  {
    id: 17,
    category: "Muesli & Bars",
    name: "Granola Bars",
    description: "Crunchy and nutritious granola bars loaded with oats, honey, and nuts — ideal for quick bites.",
    images: [granolabars, granolabars2],
  },
  {
    id: 18,
    category: "Muesli & Bars",
    name: "Brownie Protein Bars",
    description: "Rich, fudgy brownie bars packed with protein — a delicious way to fuel workouts and recovery.",
    images: [brownieproteinbars, brownieproteinbars2],
  },
  {
    id: 19,
    category: "Muesli & Bars",
    name: "Fruit Bars",
    description: "Delicious fruit-based bars made from real berries and tropical fruits — chewy, vibrant, and nutritious.",
    images: [fruitbars, fruitbars2],
  },

  // 🥜 Nut Butters
  {
    id: 20,
    category: "Nut Butters",
    name: "Natural Peanut Butter",
    description: "Smooth and creamy peanut butter made from 100% roasted peanuts — no added sugar, salt, or preservatives.",
    images: [peanut, peanut2],
  },
  {
    id: 21,
    category: "Nut Butters",
    name: "Chocolate Peanut Butter",
    description: "A delicious fusion of rich cocoa and roasted peanuts — perfect for spreads, shakes, or desserts.",
    images: [chocoPeanut, chocoPeanut2],
  },
  {
    id: 22,
    category: "Nut Butters",
    name: "Natural Almond Butter",
    description: "Pure almond butter made from slow-roasted almonds — rich in protein, fiber, and natural energy.",
    images: [almond, almond2],
  },
  {
    id: 23,
    category: "Nut Butters",
    name: "Hazelnut Spread",
    description: "Smooth and indulgent hazelnut spread with a hint of cocoa — your go-to for guilt-free snacking.",
    images: [hazelnut, hazelnut2],
  },
  {
    id: 24,
    category: "Nut Butters",
    name: "Natural Cashew Butter",
    description: "Creamy cashew butter made from premium roasted cashews — naturally sweet and full of flavor.",
    images: [cashew, cashew2],
  },
];

export default products;
