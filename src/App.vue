<style src="todomvc-app-css/index.css"></style>

<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus autocomplete="off"
               @keyup.enter="addTodo"/>
      </header>
      <!-- This section should be hidden by default and shown when there are todos -->
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" :checked="allChecked" @change="toggleAll({ done : !allChecked })">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <Todo v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"/>
        </ul>
      </section>
      <!-- This footer should hidden by default and shown when there are todos -->
      <footer class="footer">
        <!-- This should be `0 items left` by default -->
        <span class="todo-count"><strong>{{ remaining }}</strong> item left</span>
        <!-- Remove this if you don't implement routing -->
        <ul class="filters">
         
            <a :class="{ selected : visibility === key }" :href="'#/' + key" @click="visibility = key">{{ key }}</a>
        
        </ul>
        <!-- Hidden if no completed items are left ↓ -->
        <button class="clear-completed" @click="clearCompleted">Clear completed</button>
      </footer>
    </section>
  </div>
</template>

<script>
  import Todo from "./components/TodoList.vue";
  import { mapMutations } from 'vuex'

  const filters = {
    all : todo => todo,
    active : todos => todos.filter(todo => ! todo.done),
    completed : todos => todos.filter(todo => todo.done)
  };

  export default {
    components : {Todo},
    data() {
      return {
        visibility : 'all',
        filters : filters
      }
    },
    computed : {
      todos() {
        return this.$store.state.todos
      },
      filteredTodos() {
        return filters[this.visibility](this.todos)
      },
      remaining() {
        return this.todos.filter(todo => ! todo.done).length
      },
      allChecked() {
        return this.todos.every(todo => todo.done)
      }
    },
    methods : {
      ...mapMutations([
        'clearCompleted',
        'toggleAll'
      ]),

      addTodo(event) {
        let text = event.target.value;
        if (text.trim()) {
          this.$store.commit('addTodo', { text })
        }
        event.target.value = '';
      }
    }
  }
</script>
