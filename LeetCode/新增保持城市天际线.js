/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function (grid) {
    //旋转矩阵
    let row = grid.length
    let cloum = grid[0].length
    let grid2 = new Array(cloum).fill(0).map(() => new Array(row).fill(0))
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < cloum; j++) {
            grid2[j][i] = grid[i][j]
        }
    }
    let count = 0
    // console.log(grid2)
    for (let i = 0; i < grid.length; i++) {
        //计算出横向最大值
        let max1 = Math.max(...grid[i])

        for(let j = 0; j < grid[i].length; j++){
            let max2 = Math.max(...grid2[j])
            let min = Math.min(max1,max2)
            //console.log(grid[i][j])
            if(grid[i][j] < min){
                count += (min - grid[i][j])
                // console.log(min - grid[i][j])
            }
        }
    }
    return count
};