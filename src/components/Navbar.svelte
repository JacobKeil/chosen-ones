<script>
  import { goto } from '$app/navigation';
  import { createEventDispatcher } from 'svelte';
  import logo from '$lib/ChosenOnes.svg';

  const dispatch = createEventDispatcher();

  function toggle() {
    dispatch('toggleMenu');
  }

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div
  id="navbar"
  class="bg-black transition ease-in-out duration-200 h-12 px-6 w-full flex justify-between items-center"
>
  <div class="font-bold flex text-white items-center space-x-2">
    <img class="w-8 h-8" src={logo} alt="Chosen Ones" />
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p id="brand" class="text-xl cursor-pointer" on:click={() => goto('/')}>Chosen Ones</p>
  </div>
  <div class="hidden text-white text-xs space-x-3 cursor-pointer tablet:flex">
    <a class="font-bold" href="/#mission">MISSION</a>
    <a class="font-bold" href="/#store">STORE</a>
    <a class="font-bold" href="/#blog">BLOG</a>
    <div class="border-l-2 border-white/25 cursor-default" />
    <box-icon class="fill-white" type="logo" name="instagram" />
    <box-icon class="fill-white" type="logo" name="twitter" />
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <box-icon class="fill-white cursor-pointer tablet:hidden" name="menu" on:click={toggle} />
</div>
