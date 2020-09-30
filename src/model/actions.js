const changeRouteType = 'CHANGE_ROUTE_TYPE';

const handleTextChangeType = 'HANDLE_TEXT_CHANGE_TYPE';

const submitFormType = 'SUBMIT_FORM_TYPE';

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

export {
    changeRoute,
    changeRouteType,
    handleTextChange,
    handleTextChangeType,
    submitForm,
    submitFormType,
};