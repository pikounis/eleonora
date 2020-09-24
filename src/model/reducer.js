import * as actions from './actions';

const initialState = {
    value: true,
    text: '',
    route: '/'
};

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actions.changeRouteType: {
            return {
                ...state,
                route: action.payload
            }
        }
        case actions.handleTextChangeType: {
            return {
                ...state,
                text: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;

