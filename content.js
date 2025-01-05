function deleteElement(element, name) {
    if (element) {
        element.remove()
    } else {
        console.log(name, "Not found")
    }
}

const elementsToMonitor = [
    { selector: "#chips", name: "header" },
    { selector: "#buttons > ytd-button-renderer > yt-button-shape", name: "touchFeedbackElement" },
    { selector: "[aria-label='Notifications']", name: "buttonByAttribute" },
    { selector : "#buttons > ytd-button-renderer", name : "notificationButton" },
    { selector: "#content > ytd-mini-guide-renderer", name: "sidebar" },
    { selector: "#items > yt-related-chip-cloud-renderer", name: "videoChip" },
    { selector: "#top-level-buttons-computed > yt-button-view-model", name: "shareButton" },
    { selector: "#flexible-item-buttons > ytd-download-button-renderer > ytd-button-renderer > yt-button-shape > button > div.yt-spec-button-shape-next__button-text-content", name: "downloadButton" },
    { selector: "#button-shape", name: "saveButton" },
    { selector: "#description-inline-expander > div.style-scope.ytd-watch-metadata", name: "showTranscript" },
    { selector : "#flexible-item-buttons > yt-button-view-model:nth-child(2)", name : "clipButton" },
    { selector : "#flexible-item-buttons > yt-button-view-model:nth-child(3)", name : "saveButton" },
    { selector : "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-miniplayer-button.ytp-button", name : "miniplayer" },
    { selector : "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-size-button.ytp-button", name : "defaultView" },
    { selector : "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button", name : "fullScreen" },
    { selector : "#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-subtitles-button.ytp-button", name : "cc" },
    { selector : "#contents > ytd-reel-shelf-renderer", name : "shorts" },
    { selector : "#sponsor-button", name : "joinButton" },
    { selector : "#header > ytd-feed-filter-chip-bar-renderer", name : "chips" },
    { selector : "#movie_player > div.ytp-chrome-top > div.ytp-chrome-top-buttons > button.ytp-watch-later-button.ytp-button", name : "watchLater" },
    { selector : "#movie_player > div.ytp-chrome-top > div.ytp-chrome-top-buttons > button.ytp-button.ytp-share-button.ytp-share-button-visible", name : "shareButton" },
    // { selector : "", name : "" },
    // { selector : "", name : "" },
    // { selector : "", name : "" },
]

function monitorAndDeleteElements() {
    const observer = new MutationObserver(() => {
        elementsToMonitor.forEach(({ selector, name }) => {
            const element = document.querySelector(selector)
            deleteElement(element, name)
        })
    })

    const pageManager = document.querySelector("#page-manager");

    if (pageManager) {
        const parentApp = document.querySelector("ytd-app");
        
        const observer = new MutationObserver(() => {
            if (parentApp?.hasAttribute("mini-guide-visible")) {
                console.log("sidebar margin removed")
                pageManager.style.marginLeft = "unset";
            } else {
                pageManager.style.marginLeft = "";
            }
        });

        observer.observe(parentApp, { attributes: true, attributeFilter: ["mini-guide-visible"] });
    }
    
    observer.observe(document.body, {
        childList: true,
        subtree: true,
    })

    console.log("MutationObserver is now watching the DOM.")
}

monitorAndDeleteElements()
