console.log('Hello, Yuliana!')

  const getUrl = async () => {
    const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
    console.log(tab.url);
    console.log('Yeah, this worked.')
  }

  getUrl();