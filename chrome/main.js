function getword(info,tab) {
  console.log("Word " + info.linkUrl + " was clicked.");
  chrome.tabs.create({
    url: "https://net.noahcodes.com/article?url=" + info.linkUrl,
  });
}
chrome.contextMenus.create({
  title: "View %s with BlogParser",
  contexts:["link"],
  onclick: getword,
});
