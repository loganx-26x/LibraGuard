// List of websites to redirect
const blockedSites = [
    "instagram",
    "yandex",
    "dzen",
    ".ru"
  ];
  
  chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      if (details.type === "main_frame") {
        for (let site of blockedSites) {
          if (details.url.includes(site)) {
            return { redirectUrl: "https://forum.nofap.com/index.php?threads/how-do-you-fight-cravings-to-pmo.311524/" };
          }
        }
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );
  