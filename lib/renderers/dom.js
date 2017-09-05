import React from 'react';
import ReactDOM from 'react-dom';
import Store from 'state-api';
import App from 'components/App';

const store = new Store(window.initialData);

ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);
