# speedlify

After you make a fast web site, keep it fast by measuring it over time. Inspired (& forked) by [Use Speedlify to Continuously Measure Site Performance](https://www.zachleat.com/web/speedlify/)  y [@zachleat](https://www.zachleat.com/).

* Requires Node 12+
* Modify `_data/sites.js` with your list of URLs.

## Run locally

```
npm install
npm run test-pages
npm run start
```

## Deploy to Netlify

Can run directly on Netlify (including your tests) and will save the results to a local cache (via Netlify Build Plugins, see `plugins/keep-data-cache/`).

<a href="https://app.netlify.com/start/deploy?repository=https://github.com/cowboyhq/speedlify"><img src="https://www.netlify.com/img/deploy/button.svg" width="146" height="32"></a>

Speedlify will also save your data to `/results.zip` so that you can download later. This serves as a fallback backup mechanism in case your Netlify cache gets blown away. Just look up your previous build URL and download the data to restore.

[![Netlify Status](https://api.netlify.com/api/v1/badges/842a6fc1-d0dc-43fe-8c17-c550230e106a/deploy-status)](https://app.netlify.com/sites/reverent-allen-ff1eca/deploys)
