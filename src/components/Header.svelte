<script lang="ts">
  // Dependency imports
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavUl,
    NavLi,
    DarkMode,
  } from "flowbite-svelte";
  import { afterPageLoad } from "@roxi/routify";

  const links = ["Home", "Gallery"];
  let active = "";
  let hidden = true;

  $afterPageLoad((page) => {
    const path = page?.path as string;
    setActiveLink(path);
  });

  // Fns
  const setActiveLink = (path: string) => {
    if (path === "/index") {
      active = "/";
    } else {
      active = path;
    }
  };

  const linkHandler = (e: any) => {
    const { innerText } = e.target;
    if (innerText) {
      if (innerText === "Home") {
        active = "/";
      } else {
        active = `/${innerText.toLowerCase()}`;
      }
    }
    hidden = true;
  };

  const toggle = () => {
    hidden = !hidden;
  };

  // Tailwinds classes
  let activeLiClass =
    "mt-3 text-white bg-purple-700 md:bg-transparent md:text-purple-700 md:dark:text-white dark:bg-purple-600 md:dark:bg-transparent dark:hover:text-white";
  let nonActiveLiClass =
    "mt-3 text-gray-700 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-purple-700 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent";
</script>

<Navbar
  navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
  color="form"
  on:toggle={toggle}
>
  <NavBrand href="/">
    <img src="/flying_small.webp" height='36px' width='42px' class="mr-3 h-6 sm:h-9" alt="Flying" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white ml-3"
      >Meta Mind Works</span
    >
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden} activeUrl={active}>
    {#each links as link}
      <NavLi
        href={link === "Home" ? "/" : `/${link.toLowerCase()}`}
        on:click={linkHandler}
        activeClass={activeLiClass}
        nonActiveClass={nonActiveLiClass}
      >
        {link}
      </NavLi>
    {/each}
    <NavLi on:click={linkHandler}>
      <DarkMode />
    </NavLi>
  </NavUl>
</Navbar>

<style>
</style>
