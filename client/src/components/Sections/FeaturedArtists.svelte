<script>
  import Artist from '../Artist.svelte';
  export let articles;
</script>

<section id="artists" class="bg-black">
  <div class="p-8 text-[#fff]">
    <p class="text-2xl">Featured Artists</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $articles as article}
      {#if article.tags.includes('Artist')}
        <Artist {article} />
      {/if}
    {/each}
  </div>
  <div class="p-6" />
</section>
