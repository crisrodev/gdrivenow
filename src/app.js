import path from 'path';
import url from 'url';
import {app, BrowserWindow} from 'electron';
import {enableLiveReload} from 'electron-compile';

enableLiveReload({strategy:'react-hmr'});

let wind;

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (wind === null) { createWindow(); }
});

function createWindow () {
  wind = new BrowserWindow({
    width: 800, 
    height: 600, 
    icon: path.join(__dirname, "assets/icons/chips.png")
  });

  wind.loadURL(url.format({
    pathname: path.join(__dirname, '/renderer/index.html'),
    protocol: 'file:',
    slashes: true
  }));

  wind.on('closed', function () {
    wind = null;
  });

  wind.webContents.openDevTools();
}