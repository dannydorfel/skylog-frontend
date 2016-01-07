import React from 'react';
import Router, {Route, IndexRoute} from 'react-router';

import App from './containers/App';
import {JumpListContainer} from './components/JumpList';
import {JumpContainer} from './components/Jump';

export default(
    <Route path='/' component={App}>
        <IndexRoute component={JumpListContainer}/>
        <Route path="/jumps/:id" component={JumpContainer} />
    </Route>
);
