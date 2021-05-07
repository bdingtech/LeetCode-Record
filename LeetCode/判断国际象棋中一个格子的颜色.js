/**
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function (coordinates) {
    if (coordinates[0] === 'a' || coordinates[0] === 'c' || coordinates[0] === 'e' || coordinates[0] === 'g') {
        if (coordinates[1] % 2 !== 0) {
            return false
        } else {
            return true
        }
    } else {
        if (coordinates[1] % 2 !== 0) {
            return true
        } else {
            return false
        }
    }
};