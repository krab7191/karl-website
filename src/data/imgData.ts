
export type Category = "All" | "Forex" | "Speakers" | "Amplifiers" | "Mechanical" | '';

export type Img = {
  id: number;
  alt?: string;
  attribution: string;
  src?: string;
  imgurl: string
  category?: Category;
};

const img1: Img = {
  id: 0,
  alt: "flying",
  attribution: "flying",
  src: "/flying.webp",
  imgurl: "/flying.webp",
  category: '',
};
const img2: Img = {
  id: 1,
  alt: "speakers",
  attribution: "speakers",
  src: "/speakers.webp",
  imgurl: "/speakers.webp",
  category: "Speakers",
};
const img3: Img = {
  id: 2,
  alt: "tube amp",
  attribution: "tube amp",
  src: "/tube_amp.webp",
  imgurl: "/tube_amp.webp",
  category: "Amplifiers",
};
const img4: Img = {
  id: 3,
  alt: "forex",
  attribution: "forex",
  src: "/forex.webp",
  imgurl: "/forex.webp",
  category: "Forex",
};
const img5: Img = {
  id: 4,
  alt: "tube amp 2",
  attribution: 'tube amp 2',
  src: "/tube_amp_1.webp",
  imgurl: '/tube_amp_1.webp',
  category: "Amplifiers",
};
const img6: Img = {
  id: 5,
  alt: "engine",
  attribution: "engine",
  src: "/engine.webp",
  imgurl: '/engine.webp',
  category: "Mechanical",
};
const img7: Img = {
  id: 6,
  alt: "soft start board",
  attribution: "soft start board",
  src: "/soft_start_board.webp",
  imgurl: "/soft_start_board.webp",
  category: "Amplifiers",
};
const img8: Img = {
  id: 7,
  alt: "forex 2",
  attribution: "forex 2",
  src: "/forex_1.webp",
  imgurl: '/forex_1.webp',
  category: "Forex",
};

export const imgCols: Array<Array<Img>> = [[img1, img2], [img3, img4], [img5, img6], [img7, img8]];
export const images: Array<Img> = [img1, img2, img3, img4, img5, img6, img7, img8];
