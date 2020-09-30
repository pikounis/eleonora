import * as actions from './actions';

const initialState = {
    value: true,
    text: '',
    route: '/',
    formSubmitted: false,
    formError: false,
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
        case actions.submitFormSucceededType: {
            return {
                ...state,
                formSubmitted: true
            }
        }
        case actions.submitFormFailedType: {
            return {
                ...state,
                formError: true
            }
        }
        default: {
            return state;
        }
    }
}

export default reducer;

