import { action_addItem, action_deleteItem } from '../store/action'
const initialState = {
    date:[]
}

export const Reducer = ( state = initialState, action ) =>{
    switch(action.type){
        case action_addItem:
            return {
                date: [...state.date, {id: action.id, body: action.body}]
                
            }
            case action_deleteItem:
            return {
                date: [
                    ...state.date.filter((it) => {
                        return (it.id !== action.id)
                    })
                ]
            }
        default:
            return state
    }
    
}
