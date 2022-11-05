<script>
  import Product from '../Product.svelte';
  export let products;
</script>

<section id="store" class="bg-black">
  <div class="p-8 text-[#fff]">
    <p class="text-2xl">Store</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $products as product}
      <Product {product} />
    {/each}
  </div>
  <div class="p-12">
    <p class="text-lg text-center text-white underline">Browse store...</p>
  </div>
</section>
