// adds a listener to tab change
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.url.includes('amazon.com') && tab.url.includes('/dp/')) {
        chrome.action.openPopup()
    } else {
        //window.close();
    }
});