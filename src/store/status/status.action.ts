import { BooleanAction } from 'Store/action.types';

export const toggleFullscreen = (isFullscreen: boolean): BooleanAction => ({
  type: 'TOGGLE_FULLSCREEN',
  value: isFullscreen,
});

export type fullscreenStatus = boolean;

export const toggleTabMode = (isTabMode: boolean): BooleanAction => ({
  type: 'TOGGLE_TAB_MODE',
  value: isTabMode,
});

export type tabModeStatus = boolean;
