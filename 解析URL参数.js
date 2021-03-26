const url = "http://sample.com/?a=1&b=2&c=xx&d=2#hash";

function parse(url) {
  //分割
  let result = url.split("?").pop().split("#").shift().split("&");
  let obj = {};
  result.forEach((item) => {
    // let temp = item.split('=')
    // obj[temp[0]] = temp[1]
    const [k, v] = item.split("=");
    obj[k] = v;
  });
  console.log(obj);
}
parse(url); //{ a: '1', b: '2', c: 'xx', d: '2' }
