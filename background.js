chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [] // Empty array if no rules to remove
  });

  const blockedSites = [
   "instagram",
    "yandex",
    "dzen",
    ".ru"
  ];

  const rules = blockedSites.map((site, index) => ({
    id: index + 1, // Ensure the ID is an integer
    priority: 100,
    action: {
      type: "redirect",
      redirect: {
        regexSubstitution: "https://forum.nofap.com/index.php?threads/how-do-you-fight-cravings-to-pmo.311524/"
      }
    },
    condition: {
      regexFilter: `.*${site}.*`, // Ensure the regex matches the full URL
      resourceTypes: ["main_frame"]
    }
  }));

  chrome.declarativeNetRequest.updateDynamicRules({ removeRuleIds: [], addRules: rules });
});
  
