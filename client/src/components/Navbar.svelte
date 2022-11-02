<script>
  import { createEventDispatcher } from 'svelte';
  import { mdiInstagram, mdiTwitter, mdiMenu } from '@mdi/js';
  import logo from '$lib/ChosenOnes.svg';

  const dispatch = createEventDispatcher();

  function toggle() {
    dispatch('toggleMenu');
  }

  let scrollY = 0;
  $: isScrolled = scrollY > 0;
</script>

<svelte:window bind:scrollY />

<div
  id="navbar"
  class="bg-black transition ease-in-out duration-200 h-12 px-6 w-full flex justify-between items-center"
>
  <div class="font-bold flex text-white items-center space-x-2">
    <img class="w-8 h-8" src={logo} alt="Chosen Ones" />
    <p id="brand" class="text-xl">Chosen Ones</p>
  </div>
  <div class="hidden text-white text-xs space-x-4 cursor-pointer tablet:flex">
    <a class="font-bold" href="/#mission">MISSION</a>
    <a class="font-bold" href="/#store">STORE</a>
    <a class="font-bold" href="/#blog">BLOG</a>
    <div class="border-l-2 border-white/25 cursor-default" />
    <svg class="h-6 w-6 fill-white transition-colors duration-300 hover:fill-teal">
      <path d={mdiInstagram} />
    </svg>
    <svg class="h-6 w-6 fill-white transition-colors duration-300 hover:fill-teal">
      <path d={mdiTwitter} />
    </svg>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <svg class="h-6 w-6 fill-white hover:orange block cursor-pointer tablet:hidden" on:click={toggle}>
    <path d={mdiMenu} />
  </svg>
</div>
