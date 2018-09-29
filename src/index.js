module.exports = function check(str, bracketsConfig) {
  
  let flag, substr;

  while (true) {
    flag=false;
    bracketsConfig.forEach(config => {
      substr=config.join('');
      if (str.includes(substr) ) {
        str=str.replace(substr, '');
        flag=true;
      }
    });
    if (!flag) break;
  }

  return str.length==0;
}
