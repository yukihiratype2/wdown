import { app, BrowserWindow } from 'electron';


let mainWindow = null;
const ENABLE_DEBUG = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

async function installExtensions() {
  const { default: installExtension, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');
  return installExtension(REACT_DEVELOPER_TOOLS)
}

if (ENABLE_DEBUG) {
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('ready', async () => {
  if (ENABLE_DEBUG) {
    await installExtensions()
    require('electron-debug')();
  }

  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true
    },
    show: false,
    width: 1027,
    height: 728
  })

  mainWindow.loadURL('file://' + __dirname + '/index.html')

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  })

  mainWindow.on('closed', () => {
    mainWindow = null
  })
})