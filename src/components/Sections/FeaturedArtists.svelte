<script>
  import { goto } from '$app/navigation';
  import ArtistModal from '../Modals/ArtistModal.svelte';
  import Artist from '../Artist.svelte';
  export let articles;

  // Cristian somehow said this shit would work and it fucking did
  let artistNum = [];

  let outerWidth;
  let modalOpen = false;
  let currentArticle = $articles[0];

  function toggleModal(index) {
    modalOpen = !modalOpen;
    currentArticle = $articles[index];
    if (outerWidth < 960) {
      goto('/#artists');
    }
  }

  function incrementArtistNum() {
    artistNum.push(1);
    console.log(artistNum);
    return '';
  }
</script>

<svelte:window bind:outerWidth />

<section id="artists" class="relative bg-black overflow-hidden">
  <div class="p-8 text-[#fff]">
    <p class="text-2xl">Featured Artists</p>
  </div>
  <div class="px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4">
    {#each $articles as article, index}
      {#if article.tags.includes('Artist') && artistNum.length < 4}
        <Artist {article} on:click={() => toggleModal(index)} />
        {incrementArtistNum()}
      {/if}
    {/each}
  </div>
  <div class="p-6" />
  {#if modalOpen}
    <ArtistModal {currentArticle} on:closeModal={() => toggleModal(0)} />
  {/if}
</section>
