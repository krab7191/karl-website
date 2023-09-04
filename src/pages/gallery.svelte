<script>
  import ImageContainer from "../components/ImageContainer.svelte";
</script>

<div class="gallery">
  <h1 class="text-center">Gallery</h1>
  <hr />
  <ImageContainer />
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
</style>
