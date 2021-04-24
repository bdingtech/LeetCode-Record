/**
 * @param {number[][]} image
 * @return {number[][]}
 */
var flipAndInvertImage = function(image) {
    //水平翻转
    image.forEach(arr => {
        arr.reverse()
        arr.forEach((item,index) => {
            item === 1 ? arr[index] = 0 : arr[index] = 1 
        })
    })
    return image
};