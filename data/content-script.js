let head = document.getElementsByTagName("head")[0];

// Inject a css file into the webpage
function injectCSS(url) {
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("href", url);
  head.appendChild(link);
}

// Add mobile <meta> tag
let meta = document.createElement("meta");
meta.setAttribute("name", "viewport");
meta.setAttribute("content", "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;");
head.appendChild(meta);
