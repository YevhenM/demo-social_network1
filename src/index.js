import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'

import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux"
//import rerenderEntireTree from './render'
//addPost('HelloHelloHello');
//import state from './redux/state'

//addPost('HelloHelloHello');


//let rerenderEntireTree = (state) => {

    ReactDOM.render(<BrowserRouter>
        <Provider store={store}>
        <App />
        </Provider>
    </BrowserRouter>, document.getElementById('root'));

//}

//export default rerenderEntireTree


//rerenderEntireTree(store.getState());

/*store.subscribe(() => {
    let state = store.getState()
    rerenderEntireTree(state);
});*/


//state={store.getState()} dispatch={store.dispatch.bind(store)} store={store}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
