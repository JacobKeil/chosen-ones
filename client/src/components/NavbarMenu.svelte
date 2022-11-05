<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';

  export let menuOpen;
  const dispatch = createEventDispatcher();

  let yScroll;

  function toggle() {
    dispatch('toggleMenu');
  }
</script>

<svelte:window bind:scrollY={yScroll} />

{#if menuOpen}
  <div
    in:fly={{ y: -10, duration: 400 }}
    out:fly={{ y: -10, duration: 100 }}
    class="bg-[#fff] border-black fixed z-20 w-full top-0 right-0 h-full mobile:rounded-md mobile:border-2 mobile:h-fit mobile:top-16 mobile:right-5 mobile:w-64 tablet:hidden"
  >
    <div class="h-16 px-3 flex justify-between items-center">
      <!-- svelte-ignore a11y-click-events-have-key-events -->
      <box-icon class="fill-black cursor-pointer" name='x' on:click={toggle}></box-icon>
      <div class="flex space-x-2">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <box-icon class="fill-black" type='logo' name='instagram'></box-icon>
        <box-icon class="fill-black" type='logo' name='twitter'></box-icon>
      </div>
    </div>
    <div class="border-none px-4">
      <hr class="border-b-1" />
    </div>
    <div class="p-4">
      <ul
        class="cursor-pointer font-bold text-center text-xl text-black mobile:text-sm mobile:text-left"
      >
        <li><a class="font-bold" href="/#mission" on:click={toggle}>MISSION</a></li>
        <li><a class="font-bold" href="/#store" on:click={toggle}>STORE</a></li>
        <li><a class="font-bold" href="/#blog" on:click={toggle}>BLOG</a></li>
      </ul>
    </div>
  </div>
{/if}
