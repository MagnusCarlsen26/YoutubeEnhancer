function deleteElement( element ) {
    if (element) {
        element.style.display = 'none'
    } else {
        console.error(element,"Not found")
    }
}

setTimeout(() => {
    const element = document.querySelector('#chips');
    const touchFeedbackElement = document.querySelector('#buttons > ytd-button-renderer > yt-button-shape');
    const buttonByAttribute = document.querySelector("[aria-label='Notifications']");
    const sidebar = document.querySelector("#content > ytd-mini-guide-renderer")
    const videoChip = document.querySelector("#items > yt-related-chip-cloud-renderer")
    const shareButton = document.querySelector("#top-level-buttons-computed > yt-button-view-model > button-view-model > button > yt-touch-feedback-shape > div")

    deleteElement(shareButton)
    deleteElement(videoChip)
    deleteElement(element)
    deleteElement(touchFeedbackElement)
    deleteElement(buttonByAttribute)
    deleteElement(sidebar)
}, 3000);
