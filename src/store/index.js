import Vue from 'vue';
import Vuex from 'vuex';
import plugins from "./plugins";

Vue.use(Vuex);

const store = new Vuex.Store({
  state : {
    todos : JSON.parse(window.localStorage.getItem('todos-vuejs') || '[]')
  },
  mutations : {
    addTodo(state , { text }) {
      state.todos.push({
        text,
        done : false
      })
    },
    toggleTodo(state,{ todo }) {
      todo.done = ! todo.done;
    },
    deleteTodo(state , { todo }) {
      state.todos.splice(state.todos.indexOf(todo) , 1);
    },
    clearCompleted(state) {
      state.todos = state.todos.filter(todo => ! todo.done)
    },
    toggleAll(state , { done }) {
      state.todos.forEach(todo => {
        todo.done = done;
      })
    }
  },
  plugins
});

export default store;
