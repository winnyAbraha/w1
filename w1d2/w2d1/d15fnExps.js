
module.exports = {double,times100,myMap};

//number 1

/**
 * 
 * @param {number} 
 * @returns double the number
 */

function double(num){
    return num * 2;
  }
  

  //number 2
  /**
   * 
   * @param {number} num 
   * @returns number times 100
   */
  function times100(num){
    return num * 100;
  }
  
  //number 3
  /**
   * 
   * @param {array} arr 
   * @param {function} fun 
   * @returns new that are doubled , times 100 and tripled 
   */
  function  myMap(arr,fun) {
    let newArray =[];
    for(let x of arr){
    newArray.push(fun(x))
    }
    return newArray;
  }
  // console.log(myMap([1,2,3],double));
  // console.log(myMap([1,2,3],times100));
  
  console.log ( myMap([1,2,3],function(num){
         return num * 3;
  })
  )