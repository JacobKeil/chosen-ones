<script>
  function backToTop() {
    scrollY = 0;
  }

  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="absolute right-4 top-5 h-8 w-8 bg-white rounded-full flex justify-center items-center">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <box-icon class="fill-black cursor-pointer"  name='chevron-up' on:click={backToTop}></box-icon>
</div>
