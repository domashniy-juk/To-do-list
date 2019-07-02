let nextItemId = 0

export const action_addItem = 'ADD_ITEM'
export const action_deleteItem = 'DELETE_ITEM'
export const addItem = body => {
  return{
    type: 'ADD_ITEM',
    id: nextItemId++,
    body
  }
}

export const deleteItem = id => {
  return{
      type: 'DELETE_ITEM',
      id
    }
  }