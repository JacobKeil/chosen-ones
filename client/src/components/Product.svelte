<script>
  export let product;
  let textColor = product.variants[0].inventory_quantity <= 5 ? 'text-red' : 'text-green';
</script>

<div class="text-black rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1">
  <img class="aspect-video object-cover w-full rounded-t-md" src={product.images[0].src} alt="" />
  <div class="p-4 bg-white rounded-b-md">
    <h2>{product.title}</h2>
    <div class="flex justify-between items-center pt-1">
      <h3 class={textColor}>
        {product.variants[0].inventory_quantity} in stock
      </h3>
      <h3 class="py-1 px-2 bg-[#4b9257] text-white font-bold rounded-md">
        ${product.variants[0].price}
      </h3>
    </div>
  </div>
</div>
