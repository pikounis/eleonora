import { combineEpics, ofType } from 'redux-observable';
import { tap, ignoreElements } from 'rxjs/operators';
import { submitFormType } from './actions';
import axios from 'axios';

const testEpic = (action$, state$) => action$.pipe(
    ofType(submitFormType),
    tap((action) => {
        axios.post('/addData', action.payload)
    }),
    ignoreElements(),
);


export default combineEpics(testEpic);
