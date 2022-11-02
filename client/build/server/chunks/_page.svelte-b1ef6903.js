import { c as create_ssr_component, v as validate_component, b as add_attribute, d as subscribe, f as each, e as escape } from './index-74f9d4dd.js';
import { mdiChevronLeft, mdiChevronRight, mdiFormatQuoteOpen, mdiFormatQuoteClose, mdiMapMarkerRadius } from '@mdi/js';
import { w as writable } from './index2-424249a2.js';

const products = writable([]);
const articles = writable([]);
const image1 = "/_app/immutable/assets/banner2-85fbb9c4.jpg";
const image2 = "/_app/immutable/assets/banner3-7ac48cc7.jpg";
const image3 = "/_app/immutable/assets/banner4-e0eda3e5.jpg";
const image4 = "/_app/immutable/assets/banner5-e45d50c4.jpg";
const Banner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [image1, image2, image3, image4];
  let currentImage = 0;
  return `<section id="${"banner"}" class="${"relative h-md text-black bg-[#fff]"}">
  <div id="${"carousel-left"}" class="${"absolute flex justify-center items-center top-[47%] left-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"}"><svg class="${"h-6 w-6 fill-black"}"><path${add_attribute("d", mdiChevronLeft, 0)}></path></svg></div>
  
  <div id="${"carousel-right"}" class="${"absolute flex justify-center items-center top-[47%] right-4 p-1 z-10 rounded-full bg-white/75 cursor-pointer"}"><svg class="${"h-6 w-6 fill-black"}"><path${add_attribute("d", mdiChevronRight, 0)}></path></svg></div>
  <div id="${"image"}" class="${"object-cover h-full w-full"}"><img class="${"object-cover h-full w-full"}"${add_attribute("src", images[currentImage], 0)} alt="${""}"></div></section>`;
});
const Mission = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<section id="${"mission"}" class="${"text-xl px-8 py-4 bg-white"}"><div class="${"py-4 text-black"}"><p class="${"text-2xl"}">Our Mission</p></div>
  <svg class="${"inline h-6 w-6 fill-black"}"><path${add_attribute("d", mdiFormatQuoteOpen, 0)}></path></svg>
  Help others realize their potential and purpose using our God given resources with a touch of creativity.
  Clothing, assisting, and inspiring our neighbors in aim to spark ambition and faith. ChosenOnes is
  within and we strive to bring it out of you.
  <svg class="${"inline h-6 w-6 fill-black"}"><path${add_attribute("d", mdiFormatQuoteClose, 0)}></path></svg>
  <div class="${"p-3"}"></div></section>`;
});
const Artist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  article.tags.split(", ");
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `<div class="${"text-[#fff] rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1"}"><img class="${"aspect-video object-cover object-top w-full rounded-t-md"}"${add_attribute("src", article.image.src, 0)} alt="${""}">
  <div class="${"p-4 bg-[#fff] text-black rounded-b-md"}"><div class="${"flex justify-left items-center space-x-1 text-green"}"><svg class="${"h-6 w-6 fill-green"}"><path${add_attribute("d", mdiMapMarkerRadius, 0)}></path></svg>
      <h2>Tampa</h2></div>
    <h2>${escape(article.title)}</h2></div></div>`;
});
const FeaturedArtists = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  let { articles: articles2 } = $$props;
  $$unsubscribe_articles = subscribe(articles2, (value) => $articles = value);
  if ($$props.articles === void 0 && $$bindings.articles && articles2 !== void 0)
    $$bindings.articles(articles2);
  $$unsubscribe_articles();
  return `<section id="${"artists"}" class="${"bg-black"}"><div class="${"p-8 text-[#fff]"}"><p class="${"text-2xl"}">Featured Artists</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($articles, (article) => {
    return `${article.tags.includes("Artist") ? `${validate_component(Artist, "Artist").$$render($$result, { article }, {}, {})}` : ``}`;
  })}</div>
  <div class="${"p-6"}"></div></section>`;
});
const Product = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { product } = $$props;
  let textColor = product.variants[0].inventory_quantity <= 5 ? "text-red" : "text-green";
  if ($$props.product === void 0 && $$bindings.product && product !== void 0)
    $$bindings.product(product);
  return `<div class="${"text-black rounded-sm shadow-xl cursor-pointer transition hover:-translate-y-1"}"><img class="${"aspect-video object-cover w-full rounded-t-md"}"${add_attribute("src", product.images[0].src, 0)} alt="${""}">
  <div class="${"p-4 bg-white rounded-b-md"}"><h2>${escape(product.title)}</h2>
    <div class="${"flex justify-between items-center pt-1"}"><h3${add_attribute("class", textColor, 0)}>${escape(product.variants[0].inventory_quantity)} in stock
      </h3>
      <h3 class="${"py-1 px-2 bg-[#4b9257] text-white font-bold rounded-md"}">$${escape(product.variants[0].price)}</h3></div></div></div>`;
});
const Store = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $products, $$unsubscribe_products;
  let { products: products2 } = $$props;
  $$unsubscribe_products = subscribe(products2, (value) => $products = value);
  if ($$props.products === void 0 && $$bindings.products && products2 !== void 0)
    $$bindings.products(products2);
  $$unsubscribe_products();
  return `<section id="${"store"}" class="${"bg-black"}"><div class="${"p-8 text-[#fff]"}"><p class="${"text-2xl"}">Store</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($products, (product) => {
    return `${validate_component(Product, "Product").$$render($$result, { product }, {}, {})}`;
  })}</div>
  <div class="${"p-12"}"><p class="${"text-lg text-center text-white underline"}">Browse store...</p></div></section>`;
});
const Article = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { article } = $$props;
  const tags = article.tags.split(", ");
  if ($$props.article === void 0 && $$bindings.article && article !== void 0)
    $$bindings.article(article);
  return `<div class="${"max-h-[500px] text-[#fff] rounded-sm cursor-pointer transition hover:-translate-y-1"}"><img class="${"aspect-video object-cover w-full rounded-t-md"}"${add_attribute("src", article.image.src, 0)} alt="${""}">
  <div class="${"p-4 bg-black rounded-b-md"}"><h2>${escape(article.title)}</h2>
    <h3 class="${"text-teal pb-3"}">By ${escape(article.author)} - <span class="${"text-green"}">${escape(article.published_at.split("T")[0])}</span></h3>
    <div class="${"flex space-x-2"}">${each(tags, (tag) => {
    return `<p class="${"bg-lightBlue text-black rounded-full py-1 px-2"}">${escape(tag)}</p>`;
  })}</div></div></div>`;
});
const Blog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $articles, $$unsubscribe_articles;
  let { articles: articles2 } = $$props;
  $$unsubscribe_articles = subscribe(articles2, (value) => $articles = value);
  if ($$props.articles === void 0 && $$bindings.articles && articles2 !== void 0)
    $$bindings.articles(articles2);
  $$unsubscribe_articles();
  return `<section id="${"blog"}" class="${"bg-white"}"><div class="${"p-8"}"><p class="${"text-2xl"}">Blog</p></div>
  <div class="${"px-8 grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 gap-4"}">${each($articles, (article) => {
    return `${article.tags.includes("Article") ? `${validate_component(Article, "Article").$$render($$result, { article }, {}, {})}` : ``}`;
  })}</div>
  <div class="${"p-12"}"><p class="${"text-lg text-center text-black underline"}">Read more...</p></div></section>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  console.log(articles);
  return `${validate_component(Banner, "Banner").$$render($$result, {}, {}, {})}

${validate_component(FeaturedArtists, "FeaturedArtists").$$render($$result, { articles }, {}, {})}
${validate_component(Mission, "Mission").$$render($$result, {}, {}, {})}
${validate_component(Store, "Store").$$render($$result, { products }, {}, {})}
${validate_component(Blog, "Blog").$$render($$result, { articles }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-b1ef6903.js.map
