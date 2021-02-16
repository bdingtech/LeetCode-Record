/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function(guess, answer) {
    return answer.filter((item,index) => (
        item === guess[index]
    )).length
};