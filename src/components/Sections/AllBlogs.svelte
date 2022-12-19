<script>
  import { goto } from '$app/navigation';
  import Article from '../Article.svelte';
  import BlogModal from '../Modals/BlogModal.svelte';
  export let articles;

  let outerWidth;
  let modalOpen = false;
  let currentBlog = $articles[0];

  function toggleModal(index) {
    modalOpen = !modalOpen;
    currentBlog = $articles[index];
    if (outerWidth < 960) {
      goto('/blogs/#allblogs');
    }
  }
</script>

<svelte:window bind:outerWidth />

<section id="allblogs" class="relative bg-white overflow-hidden">
  <div class="p-8">
    <p class="text-2xl">All Blogs</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $articles as article, index}
      {#if article.tags.includes('Article')}
        <Article {article} on:click={() => toggleModal(index)} />
      {/if}
    {/each}
  </div>
  <div class="p-12">
    <p class="text-lg text-center text-black" />
  </div>
  {#if modalOpen}
    <BlogModal {currentBlog} on:closeModal={() => toggleModal(0)} />
  {/if}
</section>
