import React from 'react';
import './styles/styles.css';
import { AppRoute } from './router/AppRoute';
import { Provider } from 'react-redux';
import { store } from './stateManagement/store';

export const App = () => {
    return (
        <Provider store={ store }>
            <AppRoute />
        </Provider>
    )
}