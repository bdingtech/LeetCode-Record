function getUrlParam(sUrl, sKey) {
    //先提取参数
    const params = sUrl.split("?").pop().split("#").shift().split("&");
    let result = {};
    //规整
    params.forEach((item) => {
      let key = item.split("=")[0];
      let value = item.split("=")[1];
      if (!result[key]) {
        result[key] = value;
      } else {
        result[key] = result[key] + value;
      }
    });
    for(item in result){
      if (result[item].length > 1) {
          result[item] = result[item].split('');
        }
    };
    if (!sKey) {
        return result
    }
    return result[sKey] ? result[sKey] : '';
  }
  console.log(
    getUrlParam("http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe")
  );
  console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key'))
  console.log(getUrlParam('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test1=4#hehe', 'abc'))