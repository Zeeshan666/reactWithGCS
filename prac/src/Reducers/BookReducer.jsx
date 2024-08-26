export const BookReducer = (state, action) => {

    switch (action.type) {
        
        case 'ADD':
            return [ ...state , {
                title : action.payload.title,
                author : action.payload.author,
                id : state.length + 1,
            }]


        case 'REMOVE':
            return state.filter((book) => book.id !== action.payload)
        
        default :
            return state
    }
}