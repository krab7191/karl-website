<script lang="ts">
  // Dependency imports
  import { Gallery, Button } from "flowbite-svelte";

  type Category = "All" | "Forex" | "Speakers" | "Amplifiers" | "Mechanical";
  type Img = {
    alt: string;
    src: string;
    type: string;
  };

  const images = [
    { alt: "flying", src: "flying.jpg", type: "" },
    { alt: "speakers", src: "/speakers.jpg", type: "Speakers" },

    { alt: "tube amp", src: "tube_amp.jpg", type: "Amplifiers" },
    { alt: "forex", src: "forex.png", type: "Forex" },

    { alt: "tube amp 2", src: "tube_amp_1.jpg", type: "Amplifiers" },
    { alt: "engine", src: "/engine.jpg", type: "Mechanical" },

    {
      alt: "soft start board",
      src: "/soft_start_board.jpg",
      type: "Mechanical",
    },
    { alt: "forex 2", src: "/forex_1.png", type: "Forex" },
  ];

  let images1: Array<Img>;
  let images2: Array<Img>;
  let images3: Array<Img>;
  let images4: Array<Img>;

  const categories: Array<Category> = [
    "All",
    "Forex",
    "Speakers",
    "Amplifiers",
    "Mechanical",
  ];
  let current = "All";

  const reset = () => {
    images1 = [images[0], images[1]];
    images2 = [images[2], images[3]];
    images3 = [images[4], images[5]];
    images4 = [images[6], images[7]];
  };

  const setFilter = (cat: Category) => {
    current = cat;
    if (cat === "All") {
      reset();
    } else {
      reset();
      images1 = images1.filter((img) => img.type === cat);
      images2 = images2.filter((img) => img.type === cat);
      images3 = images3.filter((img) => img.type === cat);
      images4 = images4.filter((img) => img.type === cat);
    }
  };
  reset();
</script>

<div
  class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto"
>
  {#each categories as category}
    <Button
      pill
      size="xl"
      outline={category == current}
      color={category == current ? undefined : "alternative"}
      on:click={() => setFilter(category)}>{category}</Button
    >
  {/each}
</div>

<Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
  <Gallery items={images1} />
  <Gallery items={images2} />
  <Gallery items={images3} />
  <Gallery items={images4} />
</Gallery>
