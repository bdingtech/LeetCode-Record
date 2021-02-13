/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.split('.').join('[.]')
};

// 第一个10秒钟搞定的题，哈哈哈，虽然足够简单