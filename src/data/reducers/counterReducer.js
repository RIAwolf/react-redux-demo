import initialData from "../initial/initialData";
import {cloneDeep} from 'lodash';
import {
    REQUEST_COUNTER_INCREASE,
    RECEIVE_COUNTER_INCREASE,
    FAILURE_COUNTER_INCREASE,
    FAILURE_COUNTER_DECREASE, RECEIVE_COUNTER_DECREASE, REQUEST_COUNTER_DECREASE
} from "../actions/counter-actions";


const counterReducer = (state = cloneDeep(initialData.counter), action) => {
    switch (action.type) {
        case REQUEST_COUNTER_INCREASE: {
            return Object.assign({}, {...state, isLoading: true});
        }
        case RECEIVE_COUNTER_INCREASE: {
            return Object.assign({}, {data: {count: action.payload}, isLoading: false});
        }
        case FAILURE_COUNTER_INCREASE: {
            return Object.assign({}, {...state, isLoading: false});
        }

        case REQUEST_COUNTER_DECREASE: {
            return Object.assign({}, {...state, isLoading: true});
        }
        case RECEIVE_COUNTER_DECREASE: {
            return Object.assign({}, {data: {count: action.payload}, isLoading: false});
        }
        case FAILURE_COUNTER_DECREASE: {
            return Object.assign({}, {...state, isLoading: false});
        }

        default: {
            return state;
        }
    }
};

export default counterReducer;