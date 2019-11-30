import { AnyAction } from 'redux';

const initStatus: AppStatus = {
  fullscreen: false,
};

interface AppStatus {
  fullscreen: boolean;
}

function appStatus(status: AppStatus = initStatus, action: AnyAction): AppStatus {
  switch (action.type) {
    case 'TOGGLE_FULLSCREEN':
      return { ...status, fullscreen: action.value };
    default:
      return status;
  }
}

export default appStatus;
