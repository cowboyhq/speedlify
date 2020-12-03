module.exports = {
	name: "competitors", // optional, falls back to object key
	description: "E-bikes Competitors",
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		// and we can reset chrome with each run instead of
		// each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "run"
	},
	urls: [
		"https://cowboy.com/",
		"https://www.vanmoof.com/en-BE",
		"https://angell.bike/fr-fr",
		"https://www.cube.eu/cube-bikes",
		"https://amplerbikes.com/",
	]
};
