  //changes link with DigitalNEST affiliate link
  const yesbutton = document.getElementById('yes');
  yesbutton.onclick = () => {
    chrome.tabs.update(undefined, {url: 'https://digitalnest.org'});
  }
  //closes the window
  const laterbutton = document.getElementById('later');
  laterbutton.onclick = () => {
    window.close();
  }
  