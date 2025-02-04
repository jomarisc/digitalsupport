console.log('Hello, Yuliana!');
  const yesbutton = document.getElementById('yes');
  yesbutton.onclick = () => {
    chrome.tabs.update(undefined, {url: 'https://digitalnest.org'});
  }

  const laterbutton = document.getElementById('later');
  laterbutton.onclick = () => {
    window.close();
  }

  chrome.tabs.onUpdated.addListener(function
    (tabId, changeInfo, tab) {
      if(changeInfo.url){
        alert('Wowwwww')
      }
      console.log(tab.url.includes('amazon'))
      if(tab.url.includes('amazon')) {
        console.log('wow')
        chrome.action.openPopup()
      }
    }
  );