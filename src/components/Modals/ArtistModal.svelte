<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let currentArticle;

  function toggle() {
    dispatch('closeModal');
  }
</script>

<div
  in:fly={{ x: 2000, duration: 300 }}
  out:fly={{ x: 2000, duration: 300 }}
  class="absolute z-10 top-0 right-0 left-0 bottom-0 text-white bg-black/100"
>
  <div class="h-16 px-6 flex justify-between items-center">
    <h1 class="font-semibold">{currentArticle.title}</h1>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <box-icon class="fill-white cursor-pointer" name="x" on:click={toggle} />
  </div>
  <div class="p-6 flex justify-center items-center">
    {#if currentArticle.image.src}
      <img
        class="aspect-video object-cover object-top w-[500px] h-56"
        src={currentArticle.image.src}
        alt=""
      />
    {/if}
  </div>
  <p class="text-[14px] p-4 text-center">
    {currentArticle.body_html}
  </p>
</div>
