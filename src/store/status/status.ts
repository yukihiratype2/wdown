import { BooleanAction } from 'Store/action.types';
import { combineReducers } from 'redux';
import { fullscreenStatus, tabModeStatus } from './status.action';

export function toggleFullscreen(state = false, action: BooleanAction): fullscreenStatus {
  if (action.type === 'TOGGLE_FULLSCREEN') {
    return action.value;
  }
  return state;
}


export function toggleTabMode(state = false, action: BooleanAction): tabModeStatus {
  if (action.type === 'TOGGLE_TAB_MODE') {
    return action.value;
  }
  return state;
}

export default combineReducers({
  isFullscreen: toggleFullscreen,
  isTabMode: toggleTabMode,
});

export interface StatusState {
  isFullscreen: fullscreenStatus;
  isTabMode: tabModeStatus;
}
