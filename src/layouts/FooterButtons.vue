<template lang="html">
  <footer>
    <button name="button" @click="addTask({ name: `task_last` })">add</button>
  </footer>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    computed: {
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
    }
}
</script>

<style lang="css" scoped>
</style>
