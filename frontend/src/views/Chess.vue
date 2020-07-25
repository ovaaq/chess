<template>
  <div class="chess">
    <ChessBoard></ChessBoard>
  </div>
</template>

<script>
// @ is an alias to /src
import ChessBoard from "@/components/ChessBoard/ChessBoard.vue";

export default {
  name: "Chess",
  components: {
    ChessBoard,
  },
};
</script>
