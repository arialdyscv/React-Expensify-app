// SET TEXT
export const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT',
    text
});

// SORT BY DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// SORT BY AMOUNT
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// SET START DATE
export const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

// SET END DATE
export const setEndDate = ( endDate = undefined ) => ({
    type: 'SET_END_DATE',
    endDate
});