<script lang="ts">
  import {
    Footer,
    FooterCopyright,
    FooterIcon,
    FooterLinkGroup,
    FooterLink,
  } from "flowbite-svelte";
  import { GithubSolid } from "flowbite-svelte-icons";
</script>

<Footer
  class="absolute bottom-0 left-0 z-20 w-full dark:bg-gray-600 rounded-none flex"
>
  <div class="container flex flex-wrap justify-center content-center max-w-22 leading-4">
    <FooterCopyright href="/" by="Meta Mind Works™" year={2023} />
    &nbsp; &nbsp;
    <FooterLinkGroup
      ulClass="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mt-0"
    >
      <FooterLink target="_blank" href="https:///github.com/krabew">
        <GithubSolid />
      </FooterLink>
    </FooterLinkGroup>
  </div>
</Footer>

<style>
  .container {
    margin: 0 auto;
  }
</style>
