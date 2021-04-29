
import React from 'react';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './store';

import './styles/_App.scss';

const themes = {
    colors: {
        primary: '#119822',
        primaryLight: '#77B28C',
        warning: '#F87060',
        gray: '#cccccc',
        darkGray: '#888888',
        background: '#eeeeee',
    }
}

export const AppContext = React.createContext(themes);

const App = () => {
    return (
        <Provider store={store}>
            <AppContext.Provider value={themes}>
                <Home />
            </AppContext.Provider>
        </Provider>
    )
}

export default App
