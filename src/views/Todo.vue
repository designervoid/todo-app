<template lang="html">
  <TheTasks :tasks="inWorkTasks" :isTasksDone="false" />
</template>

<script>
import { mapGetters } from 'vuex';
import TheTasks from '@/components/TheTasks.vue'

export default {
  components: {
    TheTasks
  },
  computed: {
    ...mapGetters('tasks', ['inWorkTasks'])
  }
}
</script>
