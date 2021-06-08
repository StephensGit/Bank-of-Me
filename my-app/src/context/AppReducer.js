export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
                return {
                    ...state,
                    transactions: state.transactions.filter(transaction => transaction.id  !== action.payload)
                }
        case 'ADD_TRANSACTION':
                return {
                    ...state,
                    // ...state gets a copy of the current state, action.payload is the new transaction we're adding,and we add it to state.transactions array
                    transactions: [action.payload, ...state.transactions]
                }
        default:
            return state;
    }
}