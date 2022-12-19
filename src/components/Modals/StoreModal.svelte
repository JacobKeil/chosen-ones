<script>
  // import { goto } from '$app/navigation';
  import { fly } from 'svelte/transition';
  import { createEventDispatcher } from 'svelte';
  const dispatch = createEventDispatcher();

  export let currentProduct;
  let BASE_URL = 'https://chosen1-9510.myshopify.com/products';

  function toggle() {
    dispatch('closeModal');
  }

  function gotoProductPage() {
    window.open(`${BASE_URL}/${currentProduct.handle}`, '_blank');
  }
</script>

<div
  in:fly={{ x: 2000, duration: 300 }}
  out:fly={{ x: 2000, duration: 300 }}
  class="absolute z-10 top-0 right-0 left-0 bottom-0 text-white bg-black/100"
>
  <div class="h-16 px-6 flex justify-between items-center">
    <h1 class="font-semibold">{currentProduct.title}</h1>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <box-icon class="fill-white cursor-pointer" name="x" on:click={toggle} />
  </div>
  <div class="p-6 flex justify-center items-center">
    <div class="text-center">
      <img class="aspect-video object-cover w-[500px] h-56" src={currentProduct.image.src} alt="" />
    </div>
  </div>
  <p class="text-[14px] p-4 text-center">
    {currentProduct.body_html}
  </p>
  <div class="flex justify-center">
    <button class="bg-[#4b9257] px-3 py-2 rounded-sm" on:click={gotoProductPage}>
      Buy on Shopify
    </button>
  </div>
</div>
