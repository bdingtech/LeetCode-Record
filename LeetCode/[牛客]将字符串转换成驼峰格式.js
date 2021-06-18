function cssStyle2DomStyle(sName) {
    //转换成数组处理
    let sName_arr = sName.split("");
    //先处理第一个字符为'-'的情况
    if (sName[0] === "-") {
      sName_arr.splice(0, 1);
    }
    //开始处理大写
    sName_arr.forEach((item, index) => {
      if (item === "-") {
        sName_arr[index + 1] = sName_arr[index + 1].toUpperCase();
      }
    });
    return sName_arr.join("").replace(/-/g, "");
  }