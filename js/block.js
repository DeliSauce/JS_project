class Block {
  constructor(value, row, col) {
    this.value = value;
    this.row = row;
    this.col = col;
  }



  getColor() {
    switch (this.value) {
      case -1:
        return "#66A5AD";
      case 0:
        return "teal";
      case 1:
        return "lightblue";
      case 2:
        return "green";
      case 3:
        return "red";
      case 5:
        return "blue";
      case 8:
        return "brown";
      case 13:
        return "purple";
      case 21:
        return "yellow";
      case 34:
        return "purple";
      case 55:
        return "purple";
      case 89:
        return "purple";
      case 144:
        return "purple";
    }
  }
}

module.exports = Block;
