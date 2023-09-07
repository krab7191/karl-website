<script>
  // Local imports
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
</script>

<Header />
<main class="overflow-auto dark:bg-gray-800 dark:text-white">
  <!-- Page content rendered in here -->
  <slot />
</main>
<Footer />

<style>
  main {
    padding: 5rem 1.5rem;
    height: calc(100vh - 50px);
    width: 100vw;
  }
  @media (min-width: 640px) {
    main {
      padding: 5.5rem 2rem;
    }
  }
  @media (min-width: 768px) {
    main {
      padding: 7rem 2rem;
    }
  }
</style>
