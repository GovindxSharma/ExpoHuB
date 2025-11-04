import mango from "../assets/freezedfruits/packet/mango.png"
import mango2 from "../assets/freezedfruits/raw/mango.jpg"
import strawberry from "../assets/freezedfruits/packet/strawberry.png";
import strawberry2 from "../assets/freezedfruits/raw/strawberry.jpg";
import pomegranate from "../assets/freezedfruits/packet/pomogranate.png";
import pomegranate2 from "../assets/freezedfruits/raw/pomogranate.jpg";
import pineapple from "../assets/freezedfruits/packet/pineapple.png";
import pineapple2 from "../assets/freezedfruits/raw/pineapple.jpg"
import custardapple from "../assets/freezedfruits/packet/custardapple.png"
import custardapple2 from "../assets/freezedfruits/raw/custardapple.jpg"
import chikoo from "../assets/freezedfruits/packet/chikoo.png";
import chikoo2 from "../assets/freezedfruits/raw/chikoo.jpg";
import blackjamun from "../assets/freezedfruits/packet/blackjamun.png";
import blackjamun2 from "../assets/freezedfruits/raw/blackjamun.jpg";
import banana from "../assets/freezedfruits/packet/banana.png";
import banana2 from "../assets/freezedfruits/raw/banana.jpg";
import apple from "../assets/freezedfruits/packet/apple.png";
import apple2 from "../assets/freezedfruits/raw/apple.jpg";




const products = [
  {
    id: 1,
    name: "Mango Snacks",
    description:
      "Delicious sun-dried mango slices packed with natural sweetness and nutrients.",
    images: [mango,mango2 ],
  },
  {
    id: 2,
    name: "Strawberry Slices",
    description:
      "Crispy freeze-dried strawberry slices bursting with real fruity flavor.",
    images: [ strawberry,strawberry2],
  },
  {
    id: 3,
    name: "Pomegranate Kernel",
    description:
      "Crunchy and tangy dried pomegranate kernels rich in antioxidants and fiber.",
    images: [ pomegranate,pomegranate2],
  },
  {
    id: 4,
    name: "Pineapple Slices",
    description:
      "Tropical, tangy pineapple slices dried to perfection for a sweet and zesty snack.",
    images: [ pineapple, pineapple2  ],
  },
  {
    id: 5,
    name: "Custard Apple Snacks",
    description:
      "Naturally sweet custard apple bites packed with creamy flavor and nutrients.",
    images: [  custardapple,custardapple2  ],
  },
  {
    id: 6,
    name: "Chikoo Slices",
    description:
      "Wholesome dried chikoo slices offering a rich, caramel-like sweetness.",
    images: [  chikoo,chikoo2  ],
  },
  {
    id: 7,
    name: "Black Jamun Snacks",
    description:
      "Tangy-sweet black jamun snacks packed with natural goodness and antioxidants.",
    images: [ blackjamun,blackjamun2   ],
  },
  {
    id: 8,
    name: "Banana Slices",
    description:
      "Crispy and naturally sweet banana chips made from ripe, handpicked bananas.",
    images: [ banana,banana2   ],
  },
  {
    id: 9,
    name: "Apple Slices",
    description:
      "Light, crunchy apple slices that retain the natural sweetness of fresh apples.",
    images: [apple,apple2   ],
  },
];

export default products;
