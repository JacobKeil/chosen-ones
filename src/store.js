import { writable } from 'svelte/store';

export const products = writable([]);
export const articles = writable([]);

export async function getProducts() {
	const pResponse = await fetch('/products');
	const pData = await pResponse.json();
	products.set(pData.products.slice(0, 4));
}

export async function getArticles() {
	const aResponse = await fetch('/articles');
	const aData = await aResponse.json();
	articles.set(aData.articles);
}

// export const products = writable([
// 	{
// 		"id": 7801804882162,
// 		"title": "Hat",
// 		"body_html": "Hat",
// 		"vendor": "Chosen1",
// 		"product_type": "",
// 		"created_at": "2022-10-10T02:02:08-04:00",
// 		"handle": "hat",
// 		"updated_at": "2022-10-27T21:40:43-04:00",
// 		"published_at": "2022-10-10T02:02:09-04:00",
// 		"template_suffix": "",
// 		"status": "active",
// 		"published_scope": "web",
// 		"tags": "",
// 		"admin_graphql_api_id": "gid://shopify/Product/7801804882162",
// 		"variants": [
// 			{
// 				"id": 43733934899442,
// 				"product_id": 7801804882162,
// 				"title": "Default Title",
// 				"price": "20.00",
// 				"sku": "",
// 				"position": 1,
// 				"inventory_policy": "deny",
// 				"compare_at_price": null,
// 				"fulfillment_service": "manual",
// 				"inventory_management": "shopify",
// 				"option1": "Default Title",
// 				"option2": null,
// 				"option3": null,
// 				"created_at": "2022-10-10T02:02:08-04:00",
// 				"updated_at": "2022-10-10T02:04:10-04:00",
// 				"taxable": true,
// 				"barcode": "",
// 				"grams": 0,
// 				"image_id": null,
// 				"weight": 0.0,
// 				"weight_unit": "lb",
// 				"inventory_item_id": 45814801989874,
// 				"inventory_quantity": 5,
// 				"old_inventory_quantity": 5,
// 				"requires_shipping": true,
// 				"admin_graphql_api_id": "gid://shopify/ProductVariant/43733934899442"
// 			}
// 		],
// 		"options": [
// 			{
// 				"id": 9914986004722,
// 				"product_id": 7801804882162,
// 				"name": "Title",
// 				"position": 1,
// 				"values": [
// 					"Default Title"
// 				]
// 			}
// 		],
// 		"images": [
// 			{
// 				"id": 38949074501874,
// 				"product_id": 7801804882162,
// 				"position": 1,
// 				"created_at": "2022-10-27T21:40:34-04:00",
// 				"updated_at": "2022-10-27T21:40:42-04:00",
// 				"alt": null,
// 				"width": 783,
// 				"height": 767,
// 				"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/How-To-Wear-a-Baseball-Cap-3.jpg?v=1666921242",
// 				"variant_ids": [],
// 				"admin_graphql_api_id": "gid://shopify/ProductImage/38949074501874"
// 			}
// 		],
// 		"image": {
// 			"id": 38949074501874,
// 			"product_id": 7801804882162,
// 			"position": 1,
// 			"created_at": "2022-10-27T21:40:34-04:00",
// 			"updated_at": "2022-10-27T21:40:42-04:00",
// 			"alt": null,
// 			"width": 783,
// 			"height": 767,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/How-To-Wear-a-Baseball-Cap-3.jpg?v=1666921242",
// 			"variant_ids": [],
// 			"admin_graphql_api_id": "gid://shopify/ProductImage/38949074501874"
// 		}
// 	},
// 	{
// 		"id": 7801752682738,
// 		"title": "Long Sleeve T-Shirt",
// 		"body_html": "Long sleeve t-shirt",
// 		"vendor": "Chosen1",
// 		"product_type": "",
// 		"created_at": "2022-10-09T23:16:57-04:00",
// 		"handle": "long-sleeve-t-shirt",
// 		"updated_at": "2022-10-27T21:43:21-04:00",
// 		"published_at": "2022-10-09T23:16:58-04:00",
// 		"template_suffix": "",
// 		"status": "active",
// 		"published_scope": "web",
// 		"tags": "",
// 		"admin_graphql_api_id": "gid://shopify/Product/7801752682738",
// 		"variants": [
// 			{
// 				"id": 43733628879090,
// 				"product_id": 7801752682738,
// 				"title": "Default Title",
// 				"price": "25.00",
// 				"sku": "",
// 				"position": 1,
// 				"inventory_policy": "deny",
// 				"compare_at_price": null,
// 				"fulfillment_service": "manual",
// 				"inventory_management": "shopify",
// 				"option1": "Default Title",
// 				"option2": null,
// 				"option3": null,
// 				"created_at": "2022-10-09T23:16:57-04:00",
// 				"updated_at": "2022-10-10T02:04:10-04:00",
// 				"taxable": true,
// 				"barcode": "",
// 				"grams": 0,
// 				"image_id": null,
// 				"weight": 0.0,
// 				"weight_unit": "lb",
// 				"inventory_item_id": 45814495969522,
// 				"inventory_quantity": 4,
// 				"old_inventory_quantity": 4,
// 				"requires_shipping": true,
// 				"admin_graphql_api_id": "gid://shopify/ProductVariant/43733628879090"
// 			}
// 		],
// 		"options": [
// 			{
// 				"id": 9914903920882,
// 				"product_id": 7801752682738,
// 				"name": "Title",
// 				"position": 1,
// 				"values": [
// 					"Default Title"
// 				]
// 			}
// 		],
// 		"images": [
// 			{
// 				"id": 38949095801074,
// 				"product_id": 7801752682738,
// 				"position": 1,
// 				"created_at": "2022-10-27T21:43:18-04:00",
// 				"updated_at": "2022-10-27T21:43:20-04:00",
// 				"alt": null,
// 				"width": 1500,
// 				"height": 1000,
// 				"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/best-long-sleeve-shirts-men.jpg?v=1666921400",
// 				"variant_ids": [],
// 				"admin_graphql_api_id": "gid://shopify/ProductImage/38949095801074"
// 			}
// 		],
// 		"image": {
// 			"id": 38949095801074,
// 			"product_id": 7801752682738,
// 			"position": 1,
// 			"created_at": "2022-10-27T21:43:18-04:00",
// 			"updated_at": "2022-10-27T21:43:20-04:00",
// 			"alt": null,
// 			"width": 1500,
// 			"height": 1000,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/best-long-sleeve-shirts-men.jpg?v=1666921400",
// 			"variant_ids": [],
// 			"admin_graphql_api_id": "gid://shopify/ProductImage/38949095801074"
// 		}
// 	},
// 	{
// 		"id": 7801802129650,
// 		"title": "Pants",
// 		"body_html": "Pants",
// 		"vendor": "Chosen1",
// 		"product_type": "",
// 		"created_at": "2022-10-10T01:44:01-04:00",
// 		"handle": "sweat-pants",
// 		"updated_at": "2022-10-30T16:56:37-04:00",
// 		"published_at": "2022-10-10T01:44:02-04:00",
// 		"template_suffix": "",
// 		"status": "active",
// 		"published_scope": "web",
// 		"tags": "",
// 		"admin_graphql_api_id": "gid://shopify/Product/7801802129650",
// 		"variants": [
// 			{
// 				"id": 43733927788786,
// 				"product_id": 7801802129650,
// 				"title": "Default Title",
// 				"price": "45.00",
// 				"sku": "",
// 				"position": 1,
// 				"inventory_policy": "deny",
// 				"compare_at_price": null,
// 				"fulfillment_service": "manual",
// 				"inventory_management": "shopify",
// 				"option1": "Default Title",
// 				"option2": null,
// 				"option3": null,
// 				"created_at": "2022-10-10T01:44:01-04:00",
// 				"updated_at": "2022-10-10T02:04:10-04:00",
// 				"taxable": true,
// 				"barcode": "",
// 				"grams": 0,
// 				"image_id": null,
// 				"weight": 0.0,
// 				"weight_unit": "lb",
// 				"inventory_item_id": 45814794879218,
// 				"inventory_quantity": 7,
// 				"old_inventory_quantity": 7,
// 				"requires_shipping": true,
// 				"admin_graphql_api_id": "gid://shopify/ProductVariant/43733927788786"
// 			}
// 		],
// 		"options": [
// 			{
// 				"id": 9914982793458,
// 				"product_id": 7801802129650,
// 				"name": "Title",
// 				"position": 1,
// 				"values": [
// 					"Default Title"
// 				]
// 			}
// 		],
// 		"images": [
// 			{
// 				"id": 38969194479858,
// 				"product_id": 7801802129650,
// 				"position": 1,
// 				"created_at": "2022-10-30T16:54:06-04:00",
// 				"updated_at": "2022-10-30T16:54:06-04:00",
// 				"alt": null,
// 				"width": 1000,
// 				"height": 1286,
// 				"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/250291531.jpg?v=1667163246",
// 				"variant_ids": [],
// 				"admin_graphql_api_id": "gid://shopify/ProductImage/38969194479858"
// 			}
// 		],
// 		"image": {
// 			"id": 38969194479858,
// 			"product_id": 7801802129650,
// 			"position": 1,
// 			"created_at": "2022-10-30T16:54:06-04:00",
// 			"updated_at": "2022-10-30T16:54:06-04:00",
// 			"alt": null,
// 			"width": 1000,
// 			"height": 1286,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/250291531.jpg?v=1667163246",
// 			"variant_ids": [],
// 			"admin_graphql_api_id": "gid://shopify/ProductImage/38969194479858"
// 		}
// 	},
// 	{
// 		"id": 7799903322354,
// 		"title": "Shoes",
// 		"body_html": "Nice running shoes",
// 		"vendor": "Chosen1",
// 		"product_type": "",
// 		"created_at": "2022-10-06T03:16:24-04:00",
// 		"handle": "shoes",
// 		"updated_at": "2022-10-27T21:41:41-04:00",
// 		"published_at": "2022-10-06T03:16:25-04:00",
// 		"template_suffix": "",
// 		"status": "active",
// 		"published_scope": "web",
// 		"tags": "",
// 		"admin_graphql_api_id": "gid://shopify/Product/7799903322354",
// 		"variants": [
// 			{
// 				"id": 43724266307826,
// 				"product_id": 7799903322354,
// 				"title": "Default Title",
// 				"price": "50.00",
// 				"sku": "",
// 				"position": 1,
// 				"inventory_policy": "deny",
// 				"compare_at_price": null,
// 				"fulfillment_service": "manual",
// 				"inventory_management": "shopify",
// 				"option1": "Default Title",
// 				"option2": null,
// 				"option3": null,
// 				"created_at": "2022-10-06T03:16:24-04:00",
// 				"updated_at": "2022-10-10T02:04:10-04:00",
// 				"taxable": true,
// 				"barcode": "",
// 				"grams": 0,
// 				"image_id": null,
// 				"weight": 0.0,
// 				"weight_unit": "lb",
// 				"inventory_item_id": 45805123502322,
// 				"inventory_quantity": 10,
// 				"old_inventory_quantity": 10,
// 				"requires_shipping": true,
// 				"admin_graphql_api_id": "gid://shopify/ProductVariant/43724266307826"
// 			}
// 		],
// 		"options": [
// 			{
// 				"id": 9912194040050,
// 				"product_id": 7799903322354,
// 				"name": "Title",
// 				"position": 1,
// 				"values": [
// 					"Default Title"
// 				]
// 			}
// 		],
// 		"images": [
// 			{
// 				"id": 38949083382002,
// 				"product_id": 7799903322354,
// 				"position": 1,
// 				"created_at": "2022-10-27T21:41:40-04:00",
// 				"updated_at": "2022-10-27T21:41:40-04:00",
// 				"alt": null,
// 				"width": 800,
// 				"height": 800,
// 				"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/Allbirds_Shoes.png?v=1666921300",
// 				"variant_ids": [],
// 				"admin_graphql_api_id": "gid://shopify/ProductImage/38949083382002"
// 			}
// 		],
// 		"image": {
// 			"id": 38949083382002,
// 			"product_id": 7799903322354,
// 			"position": 1,
// 			"created_at": "2022-10-27T21:41:40-04:00",
// 			"updated_at": "2022-10-27T21:41:40-04:00",
// 			"alt": null,
// 			"width": 800,
// 			"height": 800,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/products/Allbirds_Shoes.png?v=1666921300",
// 			"variant_ids": [],
// 			"admin_graphql_api_id": "gid://shopify/ProductImage/38949083382002"
// 		}
// 	}
// ]);

// export const articles = writable([
// 	{
// 		"id": 588042797298,
// 		"title": "GlassesUSA Review",
// 		"created_at": "2022-10-30T16:37:28-04:00",
// 		"body_html": "<p>In the past 10 years, there's been an explosion of places to buy glasses online. Rather than head to a department store or specialty eyewear shop, you can find pretty much any style of prescription or non-prescription glasses you want online.</p>\n<p>GlassesUSA was one of the early players in the direct-to-consumer eyewear game, and they've done a good job of making a specific niche for themselves.</p>\n<p>I went ahead and ordered a pair of glasses from them to see how their system works, and in this GlassesUSA review, I'll share my pros and cons to using their service before giving a final verdict on whether they're worth buying from.</p>",
// 		"blog_id": 89021022450,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-30T16:37:28-04:00",
// 		"updated_at": "2022-10-30T16:42:15-04:00",
// 		"summary_html": "On the plus side, GlassesUSA has a deep catalog of name brands. This is a great place to start if you're looking for a pair of glasses with some street cred.",
// 		"template_suffix": "",
// 		"handle": "glassesusa-review-are-their-glasses-actually-cheaper",
// 		"tags": "Article, Glasses",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588042797298",
// 		"image": {
// 			"created_at": "2022-10-30T16:37:28-04:00",
// 			"alt": "",
// 			"width": 1400,
// 			"height": 1050,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/Ray-Ban-Frank.jpg?v=1667162249"
// 		}
// 	},
// 	{
// 		"id": 588042764530,
// 		"title": "Bradley Mayfield",
// 		"created_at": "2022-10-30T16:30:44-04:00",
// 		"body_html": "Bradley is a local Tampa artist who specializes in sculptures.",
// 		"blog_id": 89130664178,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-30T16:32:03-04:00",
// 		"updated_at": "2022-10-30T16:32:03-04:00",
// 		"summary_html": "",
// 		"template_suffix": "",
// 		"handle": "bradley-mayfield",
// 		"tags": "Artist",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588042764530",
// 		"image": {
// 			"created_at": "2022-10-30T16:30:44-04:00",
// 			"alt": "",
// 			"width": 3543,
// 			"height": 2362,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/david-altmejd-courtesy-white-cube-photo-vincent-dillo.webp?v=1667161844"
// 		}
// 	},
// 	{
// 		"id": 588040601842,
// 		"title": "Lily Tran",
// 		"created_at": "2022-10-29T01:40:03-04:00",
// 		"body_html": "Lily is a local Tampa artist who specializes in contemporary Japanese murals and history.",
// 		"blog_id": 89130664178,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-29T01:40:03-04:00",
// 		"updated_at": "2022-10-30T16:31:06-04:00",
// 		"summary_html": "",
// 		"template_suffix": "",
// 		"handle": "lily-tran",
// 		"tags": "Artist",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588040601842",
// 		"image": {
// 			"created_at": "2022-10-29T01:40:03-04:00",
// 			"alt": "",
// 			"width": 612,
// 			"height": 344,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/istockphoto-1207479094-612x612.jpg?v=1667022003"
// 		}
// 	},
// 	{
// 		"id": 588040569074,
// 		"title": "Cory Trafer",
// 		"created_at": "2022-10-29T01:37:10-04:00",
// 		"body_html": "Cory is a local Tampa artist who specializes in spray paint art and murals.",
// 		"blog_id": 89130664178,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-29T01:37:10-04:00",
// 		"updated_at": "2022-10-30T16:30:56-04:00",
// 		"summary_html": "",
// 		"template_suffix": "",
// 		"handle": "bradley-trafer",
// 		"tags": "Artist",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588040569074",
// 		"image": {
// 			"created_at": "2022-10-29T02:14:35-04:00",
// 			"alt": "",
// 			"width": 612,
// 			"height": 392,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/windsor_6bbcd168-ce40-46a9-b1ca-a20670fee9a6.jpg?v=1667024076"
// 		}
// 	},
// 	{
// 		"id": 588039323890,
// 		"title": "Megan Damon",
// 		"created_at": "2022-10-28T03:45:30-04:00",
// 		"body_html": "Megan is a local Tampa artist who specializes in portrait and landscape paintings.",
// 		"blog_id": 89130664178,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-28T22:50:56-04:00",
// 		"updated_at": "2022-10-28T23:02:49-04:00",
// 		"summary_html": "",
// 		"template_suffix": "",
// 		"handle": "megan-damon",
// 		"tags": "Artist",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588039323890",
// 		"image": {
// 			"created_at": "2022-10-28T03:45:30-04:00",
// 			"alt": "",
// 			"width": 1000,
// 			"height": 667,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/artist.jpg?v=1666943131"
// 		}
// 	},
// 	{
// 		"id": 588039258354,
// 		"title": "Warm Winter Coats for Men",
// 		"created_at": "2022-10-28T02:02:03-04:00",
// 		"body_html": "<p>The coats in this article should keep you warm enough in places like New York and the Midwest, but if you're living in a place that experiences extremely cold temperatures, you may only benefit from suggestion #1 during your coldest days.</p>\n<p>If you're in, say, northern Minnesota, it might not be a great idea to wear a quilted jacket over a T-shirt on the coldest day of winter. But most of these coats will be fine with multiple layers on those non-record breaking days.</p>\n<p>So now that we've absolved ourselves of the responsibility for any fashionable hypothermia, let's dive into our four favorite winter coats!</p>",
// 		"blog_id": 89021022450,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-28T02:02:02-04:00",
// 		"updated_at": "2022-10-28T23:21:55-04:00",
// 		"summary_html": "Yes, if you've got the right winter coats, it's actually<em> so </em>easy to look great all season long.",
// 		"template_suffix": "",
// 		"handle": "warm-winter-coats-for-men",
// 		"tags": "Article, Clothing, Coats",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588039258354",
// 		"image": {
// 			"created_at": "2022-10-28T02:02:03-04:00",
// 			"alt": "",
// 			"width": 1000,
// 			"height": 750,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/coat.webp?v=1666936923"
// 		}
// 	},
// 	{
// 		"id": 588036800754,
// 		"title": "Product idea: Talking discs",
// 		"created_at": "2022-10-27T02:52:58-04:00",
// 		"body_html": "<div class=\"has-content-area\" data-url=\"https://seths.blog/2022/10/product-idea-talking-discs/\" data-title=\"Product idea: Talking discs\" data-hashtags=\"\" title=\"Product idea: Talking discs\">\n<p>Many offices and public settings are putting up clear plexiglass barriers to insulate staff from the spread of disease. While we can easily see through these partitions, it ends up creating a lot of yelling.</p>\n<p>What if there were a disc, about the size of a hockey puck and the thickness of a few coasters… it would come in pairs, be low-powered and Bluetooth enabled. Stick one on one side of the glass, one on the other. It's a microphone and a speaker… boom. At scale, they'd probably be really cheap.</p>\n<p>One extension: allow the disc to also hook up to a wifi router or laptop. Now, you can have a disc at your home office and your colleague can have one too. Tap it to turn it on, and if the other person chooses to unmute, you can have a casual conversation the way we might in the old office-bound days.</p>\n<p>It's pretty easy to imagine creating a simple app that could record and create a transcript of every transaction, which could be useful for bureaucracies and public records.</p>\n<p>Another extension: Integrate it with real-time translation and now the disk allows you to talk to anyone in any language…</p>\n</div>",
// 		"blog_id": 89021022450,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-27T02:52:57-04:00",
// 		"updated_at": "2022-10-29T00:49:58-04:00",
// 		"summary_html": "This is the excerpt of the product idea about talking discs.",
// 		"template_suffix": "",
// 		"handle": "product-idea-talking-discs",
// 		"tags": "Article, Scifi, Tech",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/588036800754",
// 		"image": {
// 			"created_at": "2022-10-29T00:49:58-04:00",
// 			"alt": "",
// 			"width": 296,
// 			"height": 170,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/images_d6c46124-e2d2-421e-8ea1-1dddc0ba270d.jpg?v=1667018998"
// 		}
// 	},
// 	{
// 		"id": 587994923250,
// 		"title": "How to Tie A Half Windsor Knot",
// 		"created_at": "2022-10-06T03:43:23-04:00",
// 		"body_html": "<p>If you're looking for a neat-looking tie knot that shows the world you mean business, then the Half Windsor Knot is one you need to know. But just how difficult is the Half Windsor knot to tie? And what else do you need to be aware of before attempting this necktie knot? Read on to find out everything you could ever want to know about the Half Windsor tie knot.</p>\n<p>Even though it's one of the most popular tie knots out there, the Half Windsor is often confused with the Full Windsor Knot, otherwise known as the Double Windsor, or simply just the Windsor Knot. This is understandable for a couple of reasons; firstly, the Double Windsor repeats steps 5 and 6 of our tutorial (therefore using double the length of the tie). Secondly, the Windsor knot is called so after the Duke of Windsor, who supposedly favored this method of knotting his neckties–though some sources have suggested he merely tied a four-in-hand knot and favored ties with a thick interlining, resulting in larger knots.</p>",
// 		"blog_id": 89021022450,
// 		"author": "Jacob Keil",
// 		"user_id": 85945614578,
// 		"published_at": "2022-10-06T03:43:23-04:00",
// 		"updated_at": "2022-10-28T23:21:47-04:00",
// 		"summary_html": "Getting this knot right can be done in ten easy steps, so we've broken the process down in simple steps. Take some time to practice this knot, and you'll be tying the Half Windsor Knot like a pro!",
// 		"template_suffix": "",
// 		"handle": "this-is-a-cool-blog-post",
// 		"tags": "Article, Clothing, Guide",
// 		"admin_graphql_api_id": "gid://shopify/OnlineStoreArticle/587994923250",
// 		"image": {
// 			"created_at": "2022-10-28T01:59:54-04:00",
// 			"alt": "",
// 			"width": 1030,
// 			"height": 515,
// 			"src": "https://cdn.shopify.com/s/files/1/0665/0449/1250/articles/windsor.jpg?v=1666936795"
// 		}
// 	}
// ]);