  
// Assignment w1d2

// number 1

// function computeSales (sal,sale){
//     commission = 0;
//     if (sal === true ){
//           if (sale < 300){
//               return commission 

//             } else if (sale >= 300 && sale <= 500){
//               return (1/100 * sale);
//             }else {
//                 return (2/100 * sale)
//             }
//         }
//     if ( sal === false){
//              if (sale >= 300 && sale <= 500 ){
//                  return (2/100 * sale)
//              }else {
//                  return(3/100 * sale)
//              }
//     }   
//           }
    
// console.log(computeSales(true, 200) )
// console.log(computeSales(true, 200) )
// console.log(computeSales(true, 300 ) )
// console.log(computeSales(false, 300 ) )
// console.log(computeSales(true, 3500 ) )
// console.log(computeSales(false, 3500 ) )

// number 2

// function compoundInterest(init,inter,years){
//     let result = 0;

//    for ( let i=0; i <= years *12; i++){
//         result  = init * (1 + inter/100 / 12 ) ** (12 * years);

//     }
//     return result;
// }
// console.log(compoundInterest(100, 10, 1));
// console.log(compoundInterest(10000, 5, 10));


// number 3

// function calcDownpayment(cost){

// if( cost < 50_000){
//     return(5/100 * cost)
// }else if (cost >= 50000 && cost < 100000){
//     return(2500 + (10/100 * (cost - 50_000)));
// } else if (cost >= 100_000 && cost < 200_000){
//     return(75000 + (15/100) * (cost - 100_000))
// }else {
//     return(5000 +( 10/100) * (cost - 200_000))
// }
  
// }
// // console.log(calcDownpayment(40000))
// //  console.log(calcDownpayment(50000))
// //  console.log(calcDownpayment(100000))
//  console.log(calcDownpayment(250000))


// number 4

// function sumDigits(num){
//     let sum = 0;
//     while( num > 0){
//      sum += num % 10

//      num = Math.floor(num/10);
//     }
//     return sum;
// }
// console.log(sumDigits(102))

// function sumDigits(num){
//     let product = 1;
//     while( num > 0){
//      product *= num % 10

//      num = Math.floor(num/10);
//     }
//     return product;
// }
// console.log(sumDigits(1234))

//number 5

// function convertFahrenheit(fah){
//    let celsius = (fah - 32) * 5/9;
//    return celsius;
// }
// console.log(convertFahrenheit(100))


// number 6

// function calcDistance(x1,y1,x2,y2){
//     let d = Math.sqrt(Math.pow( x2 - x1 ,2 ) + Math.pow( y2 - y1 ,2));
//     return d;
// }
// console.log(calcDistance (0, 0, 5, 5));