import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Provider } from 'react-redux';
import Frame from 'Views/Frame/Frame';
import store from 'Store/store';
import AppStatusListener from 'Utils/appStatusListener';

const App = (): React.ReactElement => {
  new AppStatusListener(); // eslint-disable-line no-new

  return (
    <Provider store={store}>
      <Frame />
    </Provider>
  );
};
export default hot(App);
