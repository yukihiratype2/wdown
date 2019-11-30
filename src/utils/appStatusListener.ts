import { remote, BrowserWindow } from 'electron';
import store from 'Store/store';

export default class AppStatusListener {
  constructor() {
    this.currentBrowserWindow = remote.getCurrentWindow();
    this.addFullscreenChangeListener();
  }

  private currentBrowserWindow: BrowserWindow = null

  private store = store

  private emitFullscreenChange(isFullscreen: boolean): void {
    this.store.dispatch({ type: 'TOGGLE_FULLSCREEN', value: isFullscreen });
  }

  private addFullscreenChangeListener(): void {
    this.currentBrowserWindow.on('enter-full-screen', () => this.emitFullscreenChange(true));
    this.currentBrowserWindow.on('leave-full-screen', () => this.emitFullscreenChange(false));
  }
}
