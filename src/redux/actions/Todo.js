export const toggleModal = () => {
  return {
    type: 'TOGGLE'
  }
}
export const addTask = (text, desc) => ({
  type: 'ADD_TASK',
  value: {
    text: text,
    desc: desc
  }
})
export const deleteTask = (id) => {
  return {
    type: 'DELETE',
    payload: id
  }
}