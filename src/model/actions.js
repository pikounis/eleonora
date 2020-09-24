const changeRouteType = 'CHANGE_ROUTE_TYPE';

const handleTextChangeType = 'HANDLE_TEXT_CHANGE_TYPE';

const changeRoute = (payload) => ({
    type: changeRouteType,
    payload
});

const handleTextChange = (payload) => ({
    type: handleTextChangeType,
    payload
});

export {
    changeRoute,
    changeRouteType,
    handleTextChange,
    handleTextChangeType
};