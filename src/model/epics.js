import axios from 'axios';
import { combineEpics, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

import { submitFormType, submitFormSucceeded, submitFormFailed } from './actions';

const testEpic = (action$, state$) => action$.pipe(
    ofType(submitFormType),
    mergeMap((action) =>
        axios.post('/addData', action.payload).then(response => ({...response, success: response.data !== ''}) )
    ),
    map(({ success }) => success ? submitFormSucceeded() : submitFormFailed()),
);

export default combineEpics(testEpic);
