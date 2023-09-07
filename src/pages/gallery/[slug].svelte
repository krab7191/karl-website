<script lang="ts">
  // Dependency imports
  import { Breadcrumb, BreadcrumbItem, Gallery } from "flowbite-svelte";

  // Local imports
  import { capitalize } from "../../utils";
  import { cardData, type CardData } from "../../data/cardData";
  import type { Img } from "../../data/imgData";

  // Get dynamic url path
  export let slug: string;
  const capSlug = capitalize(slug);

  const content = cardData.filter(
    (card) => card.slug === `/gallery/${slug}`
  )[0];

  const images = content.images as Array<Img>;
  let currImageObj = content.images ? (content.images as any)[0] : undefined;

  const changeImage = (dir: "back" | "next") => {
    if (dir === "back") {
      if (currImageObj.id === 0) {
        currImageObj = images[images.length - 1];
      } else {
        currImageObj = images[currImageObj.id - 1];
      }
    } else {
      if (currImageObj.id === images.length - 1) {
        currImageObj = images[0];
      } else {
        currImageObj = images[currImageObj.id + 1];
      }
    }
  };
</script>

<div class="container">
  <h1>{capSlug}</h1>
  <hr />
  <Breadcrumb aria-label="Default breadcrumb example">
    <BreadcrumbItem home href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/gallery">Gallery</BreadcrumbItem>
    <BreadcrumbItem>{capSlug}</BreadcrumbItem>
  </Breadcrumb>
  <div class="details">
    <h2>{content.heading}</h2>
    {#if typeof content.text === "string"}
      <p>{content.text}</p>
    {:else}
      {#each content.text as txt}
        <p class={txt.slice(0, 8) === "<center>" ? "text-center" : ""}>
          {txt.replace("<center>", "")}
        </p>
      {/each}
    {/if}
    {#if content.images}
      <div class="imgContainer">
        <button
          class="dark:bg-gray-700 bg-white dark:text-white text-black"
          on:click={() => changeImage("back")}>Back</button
        >
        <img src={currImageObj.imgurl} alt={currImageObj.imgurl} />
        <button
          class="dark:bg-gray-700 bg-white dark:text-white text-black"
          on:click={() => changeImage("next")}>Next</button
        >
      </div>
    {:else}
      <Gallery class="gap-4 mt-8">
        <img
          src={content.imgSrc}
          alt={content.imgSrc}
          class="h-auto max-w-full rounded-lg single-image"
        />
      </Gallery>
    {/if}
  </div>
</div>

<style>
  .container {
    max-width: 48rem;
    margin: 0 auto;
  }
  h1 {
    text-align: center;
  }
  hr {
    max-width: 48rem;
    margin: 1rem auto;
  }
  .details {
    margin: 2rem auto;
    max-width: 48rem;
  }
  h2,
  p {
    margin-top: 1rem;
  }
  h2 {
    text-align: center;
  }
  .imgContainer {
    margin-top: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .imgContainer > img,
  .single-image {
    max-width: calc(100vw - 10rem);
    max-height: calc(100vh - 170px);
  }
  .single-image {
    margin: 0 auto;
  }
</style>
