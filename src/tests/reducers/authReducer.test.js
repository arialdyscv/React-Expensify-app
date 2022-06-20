import authReducer from '../../reducers/authReducer';


test('should set uid for login', () =>{
    const action = { type: 'LOGIN', uid: 'xUza'};
    const state = authReducer({}, action);
    expect(state.uid).toBe(action.uid);

});


test('should clear uid for logout', () => {
    const action = { type: 'LOGOUT'};
    const state = authReducer({uid: 'zUxa'}, action);
    expect(state).toEqual({});
});