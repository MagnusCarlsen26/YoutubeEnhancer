chrome.commands.onCommand.addListener((command) => {

    if (command === "history") {
        chrome.tabs.update({
            url: "https://www.youtube.com/feed/history"
        });
    } else if (command === "downloads") {
        chrome.tabs.update({
            url: "https://www.youtube.com/feed/downloads"
        });
    }
  });
  