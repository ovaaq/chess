export default {
  name: "Square",
  props: {
    state: Object,
    someImage: String,
  },
  data() {
    return {
      is_selected: false,
    };
  },
  computed: {
    is_white: function() {
      return this.state.x % 2 === this.state.y % 2;
    },
    is_black: function() {
      return this.state.x % 2 != this.state.y % 2;
    },
    image_src: function() {
      let white_king = require("@/assets/img/chess/white_king.png");
      let white_queen = require("@/assets/img/chess/white_queen.png");
      let white_bishop = require("@/assets/img/chess/white_bishop.png");
      let white_knight = require("@/assets/img/chess/white_knight.png");
      let white_rook = require("@/assets/img/chess/white_rook.png");
      let white_pawn = require("@/assets/img/chess/white_pawn.png");
      let black_king = require("@/assets/img/chess/black_king.png");
      let black_queen = require("@/assets/img/chess/black_queen.png");
      let black_bishop = require("@/assets/img/chess/black_bishop.png");
      let black_knight = require("@/assets/img/chess/black_knight.png");
      let black_rook = require("@/assets/img/chess/black_rook.png");
      let black_pawn = require("@/assets/img/chess/black_pawn.png");

      if (this.state.pieceColor === "white") {
        switch (this.state.pieceName) {
          case "king":
            return white_king;
          case "queen":
            return white_queen;
          case "bishop":
            return white_bishop;
          case "knight":
            return white_knight;
          case "rook":
            return white_rook;
          case "pawn":
            return white_pawn;
          default:
            return "";
        }
      } else {
        switch (this.state.pieceName) {
          case "king":
            return black_king;
          case "queen":
            return black_queen;
          case "bishop":
            return black_bishop;
          case "knight":
            return black_knight;
          case "rook":
            return black_rook;
          case "pawn":
            return black_pawn;
          default:
            return "";
        }
      }
    },
  },
  mounted() {
    this.$root.$on("eventing", (data) => {
      this.unselect();
      data.forEach((coordinates) => {
        if (coordinates[0] == this.state.x && coordinates[1] == this.state.y) {
          this.select();
        }
      });
    });
  },
  methods: {
    select() {
      this.is_selected = true;
    },
    unselect() {
      this.is_selected = false;
    },
    isClicked: function() {
      if (this.is_selected) {
        alert("move here");
      } else {
        let list = this.state.possibleMoves;
        this.$root.$emit("eventing", list);
      }
    },
  },
};
