<template>
  <div class="wrapper">
    <div class="chess-board">
      <div class="row" v-for="rowData in dummyData" :key="rowData[0].y">
        <Square
          v-for="squareData in rowData"
          :key="squareData.x"
          :state="squareData"
        ></Square>
      </div>
    </div>
  </div>
</template>

<script scoped src="./ChessBoard.js"></script>

<style scoped>
@import "ChessBoard.scss";
</style>
