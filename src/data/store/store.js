import {applyMiddleware, createStore} from "redux";
import rootReducer from "../reducers/root";
import {composeWithDevTools} from 'redux-devtools-extension';

import thunk from 'redux-thunk';

const composeEnhancer = composeWithDevTools({
    name: 'Redux',
    trace: true,
    traceLimit: 25
});

const configureStore = () => createStore(
    rootReducer,
    composeEnhancer(
        applyMiddleware(thunk)
    )
);

export default configureStore();