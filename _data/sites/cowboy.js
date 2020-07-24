module.exports = {
	name: "cowboy", // optional, falls back to object key
	description: "Cowboy website (excl. homepage)",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		// and we can reset chrome with each run instead of
		// each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
        "https://cowboy.com/pages/e-bike-app/",
        "https://cowboy.com/pages/easy-rider/",
        "https://cowboy.com/pages/business/",
        "https://cowboy.com/blogs/reviews/",
        "https://cowboy.com/blogs/stories/",
        "https://cowboy.com/pages/test-ride/",
        "https://cowboy.com/cart/",
	]
};