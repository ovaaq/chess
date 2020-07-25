<template>
  <button
    :class="{
      square: true,
      white: is_white,
      black: is_black,
      selected: is_selected,
    }"
    v-on:click="isClicked"
  >
    <img v-if="!this.state.isEmpty" :src="image_src" />
  </button>
</template>

<script scoped src="./Square.js"></script>

<style scoped>
@import "Square.scss";
</style>
