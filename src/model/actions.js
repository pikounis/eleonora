const changeRouteType = 'CHANGE_ROUTE_TYPE';
const handleTextChangeType = 'HANDLE_TEXT_CHANGE_TYPE';
const submitFormType = 'SUBMIT_FORM_TYPE';
const submitFormSucceededType = 'SUBMIT_FORM_SUCCEEDED_TYPE';
const submitFormFailedType = 'SUBMIT_FORM_FAILED_TYPE';

const changeRoute = (payload) => ({
    type: changeRouteType,
    payload
});

const handleTextChange = (payload) => ({
    type: handleTextChangeType,
    payload
});

const submitForm = (payload) => ({
    type: submitFormType,
    payload
});

const submitFormSucceeded = (payload) => ({
    type: submitFormSucceededType,
    payload
});

const submitFormFailed = (payload) => ({
    type: submitFormFailedType,
    payload
});

export {
    changeRoute,
    changeRouteType,
    handleTextChange,
    handleTextChangeType,
    submitForm,
    submitFormType,
    submitFormSucceeded,
    submitFormSucceededType,
    submitFormFailed,
    submitFormFailedType,
};