<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/bulma">Bulma</router-link> |
      <router-link to="/chess">Chess</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
@import "assets/sass/main.scss";
</style>
