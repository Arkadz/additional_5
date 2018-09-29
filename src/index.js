module.exports = function check(str, bracketsConfig) {
  
  let flag, mod;

  while (true) {
    flag=false;
    bracketsConfig.forEach(conf => {
      mod=conf.join('');
      if (str.includes(mod)) {
        str=str.replace(mod, '');
        flag=true;
      }
    });
    if (!flag) break;
  }

  return str.length==0;
}
