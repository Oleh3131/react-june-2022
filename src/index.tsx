import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import {App} from './App';
import {setUpSpore} from "./redux/store";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
let store = setUpSpore();
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

