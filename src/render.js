import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import state from './redux/state'
import {addPost} from './redux/store'
import {updateNewPostText} from './redux/store'
import {BrowserRouter, Route} from "react-router-dom";

//addPost('HelloHelloHello');



let rerenderEntireTree = (state) => {
    ReactDOM.render(<BrowserRouter>
        <App state={state}
             addPost={addPost}
             updateNewPostText={updateNewPostText}/>
    </BrowserRouter>, document.getElementById('root'));

}

export default rerenderEntireTree

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
