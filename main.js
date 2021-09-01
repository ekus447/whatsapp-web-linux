const { app, BrowserWindow, session } = require('electron');
const path = require("path");

function createWindow () {
    const win = new BrowserWindow({
      width: 1280,
      height: 720,
      icon: path.join(__dirname, '/web/icon/icon.png')
    })


    session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
  	  details.requestHeaders['User-Agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36';
  	  callback({ cancel: false, requestHeaders: details.requestHeaders });
	  });

    win.loadURL('https://web.whatsapp.com')
  }

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
