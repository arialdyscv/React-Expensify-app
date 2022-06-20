export default (state = {}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                uid: action.uid //uid stands for user id
            };
        case 'LOGOUT':
            return {};
        default:
            return state;
    }
};