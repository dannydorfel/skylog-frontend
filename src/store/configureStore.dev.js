import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/index';
import createLogger from 'redux-logger';

let middleware = [ thunk ];

const finalCreateStore = compose(
    applyMiddleware(...middleware),
    applyMiddleware(createLogger()),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(reducers, initialState);

    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (module.hot) {
        module.hot.accept('../reducers/index', () =>
            store.replaceReducer(require('../reducers/index')/*.default if you use Babel 6+ */)
        );
    }

    return store;
}
