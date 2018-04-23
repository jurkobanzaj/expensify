export default (expenses) => {
    return expenses
    .map((expense) => expense.amount) 
    // extracts amount value from expenses into expense and than passes it to reduce
    .reduce((sum, value) => {  
        return sum + value;
    }, 0);
    // sum - accumulator, value - something received from map, 
    // 0 - initial accumulator value
};