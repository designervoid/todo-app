<template>
  <div id="app">
    <header-navigation></header-navigation>
    <router-view />
    <footer-buttons></footer-buttons>
  </div>
</template>

<style lang="css" scoped>
  footer {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
</style>
