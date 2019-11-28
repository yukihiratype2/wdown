import { app, BrowserWindow } from 'electron';
import path from 'path';


let mainWindow = null;
const ENABLE_DEBUG = process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

const { default: installExtension, REACT_DEVELOPER_TOOLS } = !ENABLE_DEBUG ? { default: null, REACT_DEVELOPER_TOOLS: null } : require('electron-devtools-installer');
const electronDebug = !ENABLE_DEBUG ? null : require('electron-debug');


async function installExtensions() {
  return installExtension(REACT_DEVELOPER_TOOLS);
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', async () => {
  if (ENABLE_DEBUG) {
    await installExtensions();
    electronDebug();
  }

  mainWindow = new BrowserWindow({
    titleBarStyle: 'hidden',
    webPreferences: {
      nodeIntegration: true,
    },
    show: false,
    width: 1027,
    height: 728,
  });

  mainWindow.loadURL(`file://${path.join(__dirname, '/index.html')}`);

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
