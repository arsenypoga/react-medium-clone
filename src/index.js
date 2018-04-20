import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import store from "./tag/TagList";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Root store={store}/>, document.getElementById('root'));

registerServiceWorker();
