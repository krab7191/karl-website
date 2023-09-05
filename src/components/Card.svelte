<script lang="ts">
  import { Card } from "flowbite-svelte";
  export let imgSrc: string;
  export let slug: string;
  export let heading: string;
  export let text: string | Array<string>;

  if (typeof text === "string" && text.length > 250) {
    text = (text as string).substring(0, 250) + "...";
  } else if (typeof text === "object") {
    text = text.join().replace(",", "").substring(0, 250) + "...";
  }
</script>

<div class="card">
  <Card img={imgSrc} href={slug} horizontal class="mb-4 mt-4 max-h-64 anchor-card text-ellipsis">
    <h5
      class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
    >
      {heading}
    </h5>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 leading-tight">
      {text}
    </p>
  </Card>
</div>

<style>
  .card {
    text-overflow: ellipsis;
    margin: 2rem;
  }
</style>
