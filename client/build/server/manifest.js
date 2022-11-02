const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-b0ce54b9.js","imports":["_app/immutable/start-b0ce54b9.js","_app/immutable/chunks/index-78c3ce3d.js","_app/immutable/chunks/singletons-a29fa7d2.js","_app/immutable/chunks/index-c48c5872.js"],"stylesheets":[]},
		nodes: [
			() => import('./chunks/0-7770f6a7.js'),
			() => import('./chunks/1-9097e23d.js'),
			() => import('./chunks/2-05159b88.js'),
			() => import('./chunks/3-08a0523b.js'),
			() => import('./chunks/4-ba75a39a.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "articles/[articleId]",
				pattern: /^\/articles\/([^/]+?)\/?$/,
				names: ["articleId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "products/[productId]",
				pattern: /^\/products\/([^/]+?)\/?$/,
				names: ["productId"],
				types: [null],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

export { manifest };
//# sourceMappingURL=manifest.js.map
