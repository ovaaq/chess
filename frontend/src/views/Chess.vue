<template>
  <div class="chess">
    <a href="" class="button is-primary">Primary</a>
    <Dummy></Dummy>
  </div>
</template>

<script>
// @ is an alias to /src
import Dummy from "@/components/Dummy.vue";

export default {
  name: "Chess",
  components: {
    Dummy,
  },
};
</script>
