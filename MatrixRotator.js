const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    if(direction === "ClockWise") { // CLOCKWISE
      var tempCWMatrix = [];
      var counter = 0;

      for(var i = 0; i < this.matrix.length; i++) {
        tempCWMatrix.push([]);
      }

      while(counter < this.matrix.length) {
        for(var j = this.matrix.length - 1; j >= 0; j--) {
          tempCWMatrix[counter].push(this.matrix[j][counter]);
        }
        counter++;
      }
      this.matrix = tempCWMatrix;

    } else if(direction === "CounterClockWise") { // COUNTER CLOCK WISE

      var tempCCWMatrix = [];
      var counterCCW = 0;
      var counter2 = this.matrix.length - 1;

      for(var k = 0; k < this.matrix.length; k++) {
        tempCCWMatrix.push([]);
      }

      while(counterCCW < this.matrix.length) {
        for(var l = 0; l < this.matrix.length; l++) {
          console.log(this.matrix[l][counterCCW]);
          tempCCWMatrix[counterCCW].push(this.matrix[l][counter2]);
        }
        counter2--;
        counterCCW++;
      }
      this.matrix = tempCCWMatrix;
    }

    // must be a valid Direction, see Direction.js

  }
};
