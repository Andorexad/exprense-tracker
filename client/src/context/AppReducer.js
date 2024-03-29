export default (state, action) => {
    switch(action.type){
        case 'get_transactions':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'transaction_error':
            return {
                ...state,
                error: action.payload
            }
        case 'delete-transaction':
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            }
        case 'add-transaction':
            return {
                ...state,
                transactions: [...state.transactions,action.payload]
            }
        default:
            return state;
    }
}