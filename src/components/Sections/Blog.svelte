<script>
  import { goto } from '$app/navigation';
  import Article from '../Article.svelte';
  import BlogModal from '../Modals/BlogModal.svelte';
  export let articles;

  // Cristian somehow said this shit would work and it fucking did
  let blogNum = [];

  let outerWidth;
  let modalOpen = false;
  let currentBlog = $articles[0];

  function toggleModal(index) {
    modalOpen = !modalOpen;
    currentBlog = $articles[index];
    if (outerWidth < 960) {
      goto('/#blog');
    }
  }

  function incrementBlogNum() {
    blogNum.push(1);
    console.log(blogNum);
    return '';
  }
</script>

<svelte:window bind:outerWidth />

<section id="blog" class="relative bg-white overflow-hidden">
  <div class="p-8">
    <p class="text-2xl">Blog</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $articles as article, index}
      {#if article.tags.includes('Article') && blogNum.length < 4}
        <Article {article} on:click={() => toggleModal(index)} />
        {incrementBlogNum()}
      {/if}
    {/each}
  </div>
  <div class="p-12">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <p
      class="text-lg text-center text-black underline cursor-pointer"
      on:click={() => goto('/blogs')}
    >
      Read more...
    </p>
  </div>
  {#if modalOpen}
    <BlogModal {currentBlog} on:closeModal={() => toggleModal(0)} />
  {/if}
</section>
