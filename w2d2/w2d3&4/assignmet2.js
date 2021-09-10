function ucFirst(str) {
    if (!str) {
      return str;
    }
  
    let splited = str[0].toUpperCase() + str.slice(1);
  
    return splited;
  }
  
  function checkSpam(str) {
    let lower = str.toLowerCase();
    let splited = lower.split(" ");
    if (splited.includes("viagra") || splited.includes("xxxxx")) {
      return true;
    } else {
      return false;
    }
  }
  
  function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 1) + "…" : str;
  }
  
  /**
   * 
   * @param {Array} arr of numbers
   * @returns {number} the total of the maximal subarray
   
   */
  // function getMaxSubSum(arr) {}
  
  function camelize(str) {
    let splited = str.split("-");
    let mapped = splited.map(function (item, index) {
      if (index === 0) {
        return item;
      } else {
        return item[0].toUpperCase() + item.slice(1);
      }
    });
    let joined = mapped.join("");
    return joined;
  }