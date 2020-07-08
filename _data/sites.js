module.exports = {
	ebikes: {
		name: "E-bikes", // optional, falls back to object key
		description: "Competitors",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site",
		},
		urls: [
			"https://cowboy.com/",
			"https://www.vanmoof.com/",
			"https://amplerbikes.com/",
			"https://angell.bike/",
			"https://www.trekbikes.com/",
			"https://www.raleigh.co.uk/",
		]
	},
	cowboy: {
		name: "cowboy.com", // optional, falls back to object key
		description: "Cowboy",
		options: {
			frequency: 60 * 24, // 24 hours
			freshChrome: "site"
		},
		urls: [
			"https://cowboy.com/",
			"https://cowboy.com/pages/e-bike-app/",
			"https://cowboy.com/pages/easy-rider/",
			"https://cowboy.com/blogs/reviews/",
			"https://cowboy.com/pages/business/",
			"https://cowboy.com/pages/test-ride/",
			"https://cowboy.com/cart/",
		]
	}
};