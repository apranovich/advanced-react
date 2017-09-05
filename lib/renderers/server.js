import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Store from 'state-api';
import App from 'components/App';
import axios from 'axios';
import config from '../config';

const serverRender = async () => {
  const resp = await axios(`http://${config.host}:${config.port}/data`);
  const store = new Store(resp.data.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data.data
  };
};

export default serverRender;
