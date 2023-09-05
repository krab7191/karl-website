<script lang="ts">
  // Dependency imports
  import {
    Breadcrumb,
    BreadcrumbItem,
    CarouselTransition,
    Gallery,
  } from "flowbite-svelte";

  // Local imports
  import { capitalize } from "../../utils";
  import { cardData } from "../../data/cardData";

  // Get dynamic url path
  export let slug: string;
  const capSlug = capitalize(slug);

  const content = cardData.filter(
    (card) => card.slug === `/gallery/${slug}`
  )[0];
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
    {#if content.images}
      <CarouselTransition
        images={content.images}
        loop
        showCaptions={false}
        showThumbs={false}
        showIndicators={false}
        duration={5000}
        transitionType="blur"
        transitionParams={{ duration: 750 }}
      />
    {:else}
      <Gallery class="gap-4">
        <img
          src={content.imgSrc}
          alt={content.imgSrc}
          class="h-auto max-w-full rounded-lg"
        />
      </Gallery>
    {/if}
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
</style>
