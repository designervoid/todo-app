<template lang="html">
  <section class="main-section">
    <div class="tasksInWork" v-if="!isTasksDone">
      <div class="taskInWork"
      v-for="(task, index) in tasks"
      :key="index"
      @click="debug(task.id)">
            {{ task.id }} || {{ task.name }} || {{ task.done }}
      </div>
    </div>
    <div class="tasksDone" v-if="isTasksDone">
      <div class="taskDone"
      v-for="(task, index) in tasks"
      :key="index"
      @click="debug(task.id)">
            {{ task.id }} || {{ task.name }} || {{ task.done }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default () {
        return {}
      }
    },
    isTasksDone: {
      type: Boolean,
      default () {
        return null
      }
    }
  },
  methods: {
    debug(id) {
      console.log(id);
    }
  }
}
</script>

<style lang="css" scoped>
.main-section {
  padding: 1rem;
}

.tasks {
  display: flex;
  flex-direction: column;
}
</style>
