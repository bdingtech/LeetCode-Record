/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let row = matrix.length
    let cloum = matrix[0].length
    let arr = new Array(cloum).fill(0).map(() => new Array(row).fill(0))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cloum; j++) {
            arr[j][i] = matrix[i][j]
        }
    }
    return arr
};