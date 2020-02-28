<template lang="html">
  <TheTasks :tasks="doneTasks" :isTasksDone="true"/>
</template>

<script>
import { mapGetters } from 'vuex';
import TheTasks from '@/components/TheTasks.vue'

export default {
  components: {
    TheTasks
  },
  computed: {
    ...mapGetters('tasks', ['doneTasks'])
  }
}
</script>
