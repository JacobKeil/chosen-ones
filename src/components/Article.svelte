<script>
  export let article;
  const tags = article.tags.split(', ');
</script>

<div class="max-h-[500px] text-[#fff] rounded-sm cursor-pointer transition hover:-translate-y-1">
  <img class="aspect-video object-cover w-full rounded-t-md" src={article.image.src} alt="" />
  <div class="p-4 bg-black rounded-b-md">
    <h2>{article.title}</h2>
    <h3 class="text-teal pb-3">
      By {article.author} - <span class="text-green">{article.published_at.split('T')[0]}</span>
    </h3>
    <div class="flex space-x-2">
      {#each tags as tag}
        <p class="bg-lightBlue text-black rounded-full py-1 px-2">{tag}</p>
      {/each}
    </div>
  </div>
</div>
