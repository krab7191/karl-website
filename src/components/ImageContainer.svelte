<script lang="ts">
  // Dependency imports
  import { Gallery, Button, CarouselTransition } from "flowbite-svelte";
  import { CloseOutline } from "flowbite-svelte-icons";

  // Local imports
  import type { Category } from "../data/imgData";
  import { images, imgCols } from "../data/imgData";
  import { useState } from "../hooks/state";

  const [filteredImgs, setFilteredImgs]: any = useState(images);
  const [filteredCols, setFilteredCols]: any = useState(imgCols);

  const categories: Array<Category> = [
    "All",
    "Forex",
    "Speakers",
    "Amplifiers",
    "Mechanical",
  ];
  $: current = "All";
  let carouselOpen = false;

  const setFilter = (cat: Category) => {
    current = cat;
    if (cat === "All") {
      setFilteredImgs(images);
      setFilteredCols(imgCols);
    } else {
      setFilteredImgs(images.filter((img) => img.category === cat));
      const newCols: any = [];
      imgCols.forEach((col) => {
        newCols.push(col.filter((img) => img.category === cat));
      });
      setFilteredCols(newCols);
    }
  };

  const clickHandler = ({ target }: any) => {
    const { tagName } = target;
    if (tagName === "IMG") {
      carouselOpen = true;
    }
  };

</script>

{#if carouselOpen}
  <div class="max-w-4xl relative">
    <Button
      color="primary"
      pill={true}
      outline={true}
      class="!p-2 absolute z-40 -top-5 -right-5 bg-white"
      size="xl"
      on:click={() => {
        carouselOpen = false;
      }}
    >
      <CloseOutline />
    </Button>
    <CarouselTransition
      images={$filteredImgs}
      showCaptions={false}
      showThumbs={false}
      showIndicators={false}
      loop
      duration={5000}
      transitionType="blur"
      transitionParams={{ duration: 250 }}
    />
  </div>
{:else}
  <div
    class="flex items-center justify-center py-4 md:py-8 flex-wrap gap-3 mb-3 mx-auto"
  >
    {#each categories as category}
      <Button
        pill
        size="xl"
        outline={category === current}
        color={category === current ? undefined : "alternative"}
        on:click={() => setFilter(category)}
      >
        {category}
      </Button>
    {/each}
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div on:click={clickHandler}>
    <Gallery class="gap-4 grid-cols-2 md:grid-cols-4">
      {#each $filteredCols as imgs}
        {#if imgs.length > 0}
          <Gallery
            items={imgs}
            imgClass="cursor-pointer h-auto max-w-full rounded-lg"
          />
        {/if}
      {/each}
    </Gallery>
  </div>
{/if}
