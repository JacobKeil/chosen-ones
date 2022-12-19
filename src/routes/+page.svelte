<script>
  import Banner from '../components/Sections/Banner.svelte';
  import Mission from '../components/Sections/Mission.svelte';
  import FeaturedArtists from '../components/Sections/FeaturedArtists.svelte';
  import Store from '../components/Sections/Store.svelte';
  import Blog from '../components/Sections/Blog.svelte';
  import { articles, products } from '../store';

  // console.log(articles);
</script>

<Banner />
<FeaturedArtists {articles} />
<Mission />
<Store {products} />
<Blog {articles} />
