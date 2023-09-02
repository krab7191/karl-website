<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    Skeleton,
    ImagePlaceholder,
    TextPlaceholder,
  } from "flowbite-svelte";
</script>

<div class="">
  <Navbar
    navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
    let:hidden
    let:toggle
  >
    <NavBrand href="/">
      <img
        src="/flying.jpg"
        class="mr-3 h-6 sm:h-9"
        alt="Flowbite Logo"
      />
      <span
        class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
        >Meta Mind Works</span
      >
    </NavBrand>
    <NavHamburger on:click={toggle} />
    <NavUl {hidden}>
      <NavLi href="/" active={true}>Home</NavLi>
      <NavLi href="/projects">Projects</NavLi>
      <NavLi href="/gallery">Gallery</NavLi>
    </NavUl>
  </Navbar>
</div>

<slot />


<style>
</style>
