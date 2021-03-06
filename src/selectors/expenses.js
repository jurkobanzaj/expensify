import moment from 'moment';

// Visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        // if starDate is not set, item is shown. if set, it checks if createdAt is bigger or equal than startDate
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};