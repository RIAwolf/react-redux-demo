import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from "react-redux";
import configureStore from "./data/store/store";
import Main from "./components/main";

function App() {
    return (
        <Provider store={configureStore}>
            <Main/>
        </Provider>
    );
}

export default App;
