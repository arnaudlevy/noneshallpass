chrome.webRequest.onBeforeRequest.addListener(
  function (info) {
    var block = ' -site:amazon.*',
        url = new URL(info.url),
        query = url.searchParams.get("q");
    if (!query.includes(block)) {
      url.searchParams.set("q", query + block);
      return { redirectUrl: url.href };
    }
  },
  {
    urls: [
      "https://www.google.com/search*",
      "https://www.google.fr/search*"
    ]
  },
  ["blocking"]);
