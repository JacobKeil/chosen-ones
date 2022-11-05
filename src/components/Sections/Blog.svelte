<script>
  import Article from '../Article.svelte';
  export let articles;
</script>

<section id="blog" class="bg-white">
  <div class="p-8">
    <p class="text-2xl">Blog</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $articles as article}
      {#if article.tags.includes('Article')}
        <Article {article} />
      {/if}
    {/each}
  </div>
  <div class="p-12">
    <p class="text-lg text-center text-black underline">Read more...</p>
  </div>
</section>
