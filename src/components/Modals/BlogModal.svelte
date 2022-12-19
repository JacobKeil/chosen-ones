<script>
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let currentBlog;

  function toggle() {
    dispatch('closeModal');
  }
</script>

<div
  in:fly={{ x: 2000, duration: 300 }}
  out:fly={{ x: 2000, duration: 300 }}
  class="absolute z-10 top-0 right-0 left-0 bottom-0 text-black bg-white/100"
>
  <div class="h-16 px-6 flex justify-between items-center">
    <h1 class="font-semibold">{currentBlog.title}</h1>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <box-icon class="fill-black cursor-pointer" name="x" on:click={toggle} />
  </div>
  <div
    class="p-6 space-y-8 flex flex-col justify-center items-center tablet:flex-row tablet:h-[calc(100%-64px)]"
  >
    {#if currentBlog.image.src}
      <img class="aspect-video object-cover w-[500px] h-56" src={currentBlog.image.src} alt="" />
    {/if}
    <div class="w-full px-6 tablet:w-2/3">
      {@html currentBlog.body_html}
    </div>
  </div>
</div>
