import moment from 'moment';
import filtersReducer from '../../reducers/filtersReducer';

test('should setup default filter values', () => {
    const state = filtersReducer( undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month') 

    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const action = {
        type: 'SET_TEXT',
        text: 'some text'
    }
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe('some text');
});

test('should set startDate to startDate filter', () => {
    const action = {
        type: "SET_START_DATE",
        startDate: moment(0)
    }
    const state = filtersReducer(undefined,action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: moment().endOf('month') 
    })
});

test('should set endtDate to endtDate filter', () => {
    const action = {
        type: "SET_END_DATE",
        endtDate: moment(0)
    }
    const state = filtersReducer(undefined,action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment(0)
    })
});
