import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {createStore,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk';
import reducers from './store/index';
import {BrowserRouter} from 'react-router-dom'
import App from './app';
import { persistConfig } from './store/index'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';

const persistReducers = persistReducer( persistConfig , reducers);

// console.log(persistReducer);

let store= createStore( persistReducers, applyMiddleware(Thunk));

ReactDOM.render(
        <React.StrictMode>
        <Provider store= {store}>
            <BrowserRouter>
            <PersistGate loading={<h1>Loading....</h1>}
                         persistor={persistStore(store)}>
                <App/>
            </PersistGate>    
            </BrowserRouter>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
);