import React, { Component, PropTypes } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

export default class Root extends Component {
    render() {
        const { store, history, routes } = this.props;
        return (
            <Provider store={store}>
                <Router history={history}>
                    {routes}
                </Router>
            </Provider>
        );
    }
};

Root.propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.routes.isRequired,
    history: PropTypes.history.isRequired
};