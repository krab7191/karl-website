<script>
  import ImageContainer from "../components/ImageContainer.svelte";
  import Card from "../components/Card.svelte";
  import { cardData } from "../data/cardData";
</script>

<div class="gallery">
  <h1 class="text-center">Gallery</h1>
  <hr />
  <!-- Old, using new layout -->
  <!-- <ImageContainer /> -->
  <div class="card-container">
    {#each cardData as cd}
      <Card
        imgSrc={cd.imgSrc}
        slug={cd.slug}
        heading={cd.heading}
        text={cd.text}
      />
    {/each}
  </div>
</div>

<style>
  .gallery {
    max-width: 112rem;
    margin: 0 auto;
  }
  hr {
    max-width: 48rem;
    margin: 1rem auto;
  }
  .card-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
</style>
