export const REQUEST_COUNTER_INCREASE = 'REQUEST_COUNTER_INCREASE';
export const RECEIVE_COUNTER_INCREASE = 'RECEIVE_COUNTER_INCREASE';
export const FAILURE_COUNTER_INCREASE = 'FAILURE_COUNTER_INCREASE';

export const FAILURE_COUNTER_DECREASE = 'FAILURE_COUNTER_DECREASE';
export const REQUEST_COUNTER_DECREASE = 'REQUEST_COUNTER_DECREASE';
export const RECEIVE_COUNTER_DECREASE = 'RECEIVE_COUNTER_DECREASE';

const requestCounterIncrease = (payload) => ({
    type: REQUEST_COUNTER_INCREASE,
    payload,
});

const receiveCounterIncrease = (payload) => ({
    type: RECEIVE_COUNTER_INCREASE,
    payload,
});

const failureCounterIncrease = (error) => ({
    type: FAILURE_COUNTER_INCREASE,
    error,
});

const requestCounterDecrease = (payload) => ({
    type: REQUEST_COUNTER_DECREASE,
    payload,
});

const receiveCounterDecrease = (payload) => ({
    type: RECEIVE_COUNTER_DECREASE,
    payload,
});

const failureCounterDecrease = (error) => ({
    type: FAILURE_COUNTER_DECREASE,
    error,
});

const doCounterIncrease = (payload) =>{
  return Promise.resolve(payload+1);
};

const doCounterDecrease = (payload) =>{
    return Promise.resolve(payload-1);
};

export const increaseCounter = (payload) => {
    return async (dispatch) => {
        dispatch(requestCounterIncrease(payload));
        try {
            const result = await doCounterIncrease(payload);
            dispatch(receiveCounterIncrease(result));
        } catch (error) {
            dispatch(failureCounterIncrease(error));
        }
    }
};

export const decreaseCounter = (payload) => {
    return async (dispatch) => {
        dispatch(requestCounterDecrease(payload));
        try {
            const result = await doCounterDecrease(payload);
            dispatch(receiveCounterDecrease(result));
        } catch (error) {
            dispatch(failureCounterDecrease(error));
        }
    }
};