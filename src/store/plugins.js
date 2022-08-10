const localStoragePlugin = store => {

  // called when the store is initialized

  store.subscribe((mutation, { todos }) =>{
    window.localStorage.setItem('todos-vuejs', JSON.stringify(todos))
  })
};

export default [localStoragePlugin]
