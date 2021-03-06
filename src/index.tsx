import * as React from 'react';
import * as ReactDOM from 'react-dom';
// // import App from './App';
// import Hello from './components/Hello';
// import './index.css';

import { createStore, Action } from 'redux';
import { enthusiasm } from './reducers/index';
import { StoreState } from './types/index';
import Hello from './containers/Hello';
import { Provider } from 'react-redux';

const store = createStore<StoreState, Action<any>, void, void>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
