// Filter expense

export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// Sorting
// by amount

export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// by date

export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// by period

export const setStartDate = (startDate) =>({ 
    type: 'SET_START_DATE', 
    startDate 
});

export const setEndDate = (endDate) =>({
    type: 'SET_END_DATE',
    endDate
});
