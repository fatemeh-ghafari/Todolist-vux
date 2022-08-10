<template>
  <li class="todo" :class="{ completed : todo.done }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="todo.done" @change="toggleTodo({ todo : todo })"/>
      <label v-text="todo.text"></label>
      <button class="destroy" @click="deleteTodo({ todo : todo })"></button>
    </div>
    <input class="edit" value="Rule the web"/>
  </li>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    name: "Todo",
    props : ['todo'],
    data() {
      return {}
    },
    methods : {
      ...mapMutations([
        'toggleTodo',
        'deleteTodo'
      ])
    }
  }
</script>
