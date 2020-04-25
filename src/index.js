import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SamuraiJSApp from "./App";
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store'

import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "react-redux"


    ReactDOM.render(

        // eslint-disable-next-line no-undef
        <SamuraiJSApp/>, document.getElementById('root'));



serviceWorker.unregister();
