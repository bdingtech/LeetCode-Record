/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const hayLen = haystack.length
    const nedLen = needle.length
    if(nedLen > hayLen){
        return -1
    }
    if(nedLen === 0){
        return 0
    }
    if(nedLen === hayLen){
        return needle === haystack ? 0 : -1
    }
    for(let i = 0; i <= hayLen - nedLen; i++){
        if(haystack[i] !== needle[0]){
          continue
        }
        if(haystack.substring(i,i + nedLen) === needle){
            return i
        } 
    }
    return -1
};