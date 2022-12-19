<script>
  import { goto } from '$app/navigation';
  import Product from '../Product.svelte';
  import StoreModal from '../Modals/StoreModal.svelte';

  export let products;
  let BASE_URL = 'https://chosen1-9510.myshopify.com/collections/all';

  // Cristian somehow said this shit would work and it fucking did
  let productNum = [];

  let outerWidth;
  let modalOpen = false;
  let currentProduct = $products[0];

  function toggleModal(index) {
    modalOpen = !modalOpen;
    currentProduct = $products[index];
    console.log(outerWidth);
    if (outerWidth < 960) {
      goto('/#store');
    }
  }

  function gotoProductsPage() {
    window.open(BASE_URL, '_blank');
  }

  function incrementProductNum() {
    productNum.push(1);
    return '';
  }
</script>

<svelte:window bind:outerWidth />

<section id="store" class="relative bg-black overflow-hidden">
  <div class="p-8 text-[#fff]">
    <p class="text-2xl">Store</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $products as product, index}
      {#if productNum.length < 4}
        <Product {product} on:click={() => toggleModal(index)} />
        {incrementProductNum()}
      {/if}
    {/each}
  </div>
  <div class="p-12">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p class="text-lg text-center text-white underline cursor-pointer" on:click={gotoProductsPage}>
      Browse store...
    </p>
  </div>
  {#if modalOpen}
    <StoreModal {currentProduct} on:closeModal={() => toggleModal(0)} />
  {/if}
</section>
