const repeatString = function(str,num) {
// return(num < 0) ? new Error("Error") : str.repeat(num);
if (num > 0){
  return str.repeat(num);
} else if (num < 0){
  return "ERROR";
} else{
  return "";
}
};

// Do not edit below this line
module.exports = repeatString;
