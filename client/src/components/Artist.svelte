<script>
  import { mdiMapMarkerRadius } from '@mdi/js';

  export let article;
  const tags = article.tags.split(', ');
</script>

<div class="text-[#fff] rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1">
  <img
    class="aspect-video object-cover object-top w-full rounded-t-md"
    src={article.image.src}
    alt=""
  />
  <div class="p-4 bg-[#fff] text-black rounded-b-md">
    <div class="flex justify-left items-center space-x-1 text-green">
      <svg class="h-6 w-6 fill-green">
        <path d={mdiMapMarkerRadius} />
      </svg>
      <h2>Tampa</h2>
    </div>
    <h2>{article.title}</h2>
  </div>
</div>
