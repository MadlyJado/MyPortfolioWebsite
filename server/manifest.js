const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.abb5f0f9.js","imports":["_app/immutable/entry/start.abb5f0f9.js","_app/immutable/chunks/index.842d4b01.js","_app/immutable/chunks/singletons.76fbc53d.js","_app/immutable/chunks/paths.9adb1419.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.59469486.js","imports":["_app/immutable/entry/app.59469486.js","_app/immutable/chunks/index.842d4b01.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./chunks/0-1e691981.js'),
			() => import('./chunks/1-622f9ee4.js'),
			() => import('./chunks/2-7adcf880.js'),
			() => import('./chunks/3-093b6ee2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			},
			{
				id: "/works",
				pattern: /^\/works\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
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
