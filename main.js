const PageMod = require("page-mod");
const Url = require("self").data.url;

PageMod.PageMod({
  include: "http://news.ycombinator.com/*",
  contentScriptWhen: "ready",
  contentScriptFile: Url("content-script.js"),
  contentScript: 'injectCSS("' + Url("stylesheet.css") + '")'
});
