<script>
  export let article;
  const tags = article.tags.split(', ');
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class="text-[#fff] rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1"
  on:click
>
  <img
    class="aspect-video object-cover object-top w-full rounded-t-md"
    src={article.image.src}
    alt=""
  />
  <div class="p-4 bg-[#fff] text-black rounded-b-md">
    <h2 class="text-green font-semibold">{article.title}</h2>
    <p class="text-[14px]">
      {article.body_html.slice(0, 80)}... <a class="underline" href="/">Read more</a>
    </p>
  </div>
</div>
