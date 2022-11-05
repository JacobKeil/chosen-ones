<script>
  import '../app.css';
  import Navbar from '../components/Navbar.svelte';
  import NavbarMenu from '../components/NavbarMenu.svelte';
  import Footer from '../components/Footer.svelte';
  import logo from '$lib/logo.svg';
  import { getProducts, getArticles } from '../store';
  import { onMount } from 'svelte';

  let menuOpen = false;
  let loading = true;
  let yScroll;

  onMount(async () => {
    await getProducts();
    await getArticles();
    setTimeout(() => {
      loading = false;
    }, 3000);
  });

  function toggleMenu() {
    menuOpen = !menuOpen;
  }

  $: if (yScroll > 0 && menuOpen) {
    toggleMenu();
  }
</script>

<svelte:window bind:scrollY={yScroll} />

{#if loading}
  <div class="flex justify-center items-center h-screen bg-[#fff]">
    <object class="w-2/3 mobile:max-w-xs" type="image/svg+xml" data={logo} title="logo">
      <h1>hello</h1>
    </object>
  </div>
{:else}
  <Navbar on:toggleMenu={toggleMenu} />

  <div class="flex justify-center">
    <section id="layout" class="bg-white min-h-screen max-w-big">
      <NavbarMenu {menuOpen} on:toggleMenu={toggleMenu} />
      <div class="relative">
        <slot />
      </div>
      <Footer />
    </section>
  </div>
{/if}
