const { Cc, Ci } = require("chrome");
require("hackernews-mob-mod/main");

exports.testByOpeningHN = function (test) {
  test.waitUntilDone(60000);
  
  let win = Cc["@mozilla.org/appshell/window-mediator;1"]
            .getService(Ci.nsIWindowMediator)
            .getMostRecentWindow("navigator:browser");

  win.Browser.selectedTab = win.Browser.addTab("http://news.ycombinator.com/");
  
  require("timer").setTimeout(function () {
    test.pass("ok");
    test.done();
  },50000);
  
}