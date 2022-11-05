<script>
  import image1 from '$lib/images/banner2.jpg';
  import image2 from '$lib/images/banner3.jpg';
  import image3 from '$lib/images/banner4.jpg';
  import image4 from '$lib/images/banner5.jpg';

  let images = [image1, image2, image3, image4];
  let currentImage = 0;

  function forwardSlide() {
    if (currentImage == images.length - 1) {
      currentImage = 0;
      return;
    }

    currentImage = currentImage + 1;
  }

  function backwardSlide() {
    if (currentImage == 0) {
      currentImage = images.length - 1;
      return;
    }

    currentImage = currentImage - 1;
  }
</script>

<section id="banner" class="relative h-md text-black bg-[#fff]">
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="carousel-left"
    class="absolute flex justify-center items-center top-[47%] left-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"
    on:click={backwardSlide}
  >
  <box-icon class="fill-black cursor-pointer" name='chevron-left'></box-icon>
  </div>
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    id="carousel-right"
    class="absolute flex justify-center items-center top-[47%] right-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"
    on:click={forwardSlide}
  >
  <box-icon class="fill-black cursor-pointer"  name='chevron-right'></box-icon>
  </div>
  <div id="image" class="object-cover h-full w-full">
    <img class="object-cover h-full w-full" src={images[currentImage]} alt="" />
  </div>
</section>
