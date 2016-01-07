import React from 'react';
import {render} from 'react-dom';
import Root from './containers/Root';
import configureStore from './store/configureStore';
import { syncReduxAndRouter } from 'redux-simple-router';
import { createHistory } from 'history';
import routes from './routes';

import actions from './actions';

let injectTapEventPlugin = require("react-tap-event-plugin");

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

const store = configureStore();
const history = createHistory();
syncReduxAndRouter(history, store);

render(
    <Root store={store} history={history} routes={routes} />,
    document.getElementById('root')
);