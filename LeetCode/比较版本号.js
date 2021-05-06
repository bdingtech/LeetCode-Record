/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
 var compareVersion = function (version1, version2) {
    let v1 = version1.split('.')
    let v2 = version2.split('.')
    let leng = v1.length > v2.length ? v1.length : v2.length
    for (let i = 0; i < leng; i++) {
        if (!v1[i]) v1[i] = 0
        if (!v2[i]) v2[i] = 0
        if (parseInt(v1[i]) < parseInt(v2[i])) {
            return -1;
        }
        if (parseInt(v1[i]) > parseInt(v2[i])) {
            return 1;
        }
    }
    return 0
};