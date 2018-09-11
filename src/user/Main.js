import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import App from './screens/App';

class Main extends Component {;
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
          console.disableYellowBox = true,
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

export default Main;
