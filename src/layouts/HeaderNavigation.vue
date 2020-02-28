<template lang="html">
  <header>
    <ul class="navigation">
      <router-link to="/todo">
        <li>
          Todo
        </li>
      </router-link>
      <router-link to="/done">
        <li>
          Done
        </li>
      </router-link>
    </ul>
  </header>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.navigation {
  display: flex;
  justify-content: space-around;
}
</style>
