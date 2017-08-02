/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.

*/

function handValue (hand) {
  let total = 0
  for (var i = 0; i < hand.length; i++) {
    if (hand[i] == "K" || hand[i] == "Q" || hand[i] == "J" ) {
      total += 10;
    } else if (hand[i] == "A") {
      total +=1
    } else {
      total += parseInt(hand[i]);
    }
  }

  for (var i = 0; i < hand.length; i++) {
   if (total < 12 && hand[i] == "A") {
     total += 10;
     }
 }
  console.log(total);
  return total
}













  // console.log("initial hand values:", hand);

//   let sumFunction = function(array) {
//     let sumArray = 0;
//     for (var i = 0; i < array.length; i++) {
//       sumArray = sumArray + array[i]
//     }
//     return sumArray;
//   }
//
//   for (var i = 0; i < hand.length; i++) {
//     total = sumFunction(hand)
//
//     if (total <= 11 && hand[i] == 1) {
//       hand[i] = 11;
//     }
//
//   }
//
//   total = sumFunction(hand);
//
//   console.log("final hand values:", hand);
//   console.log("hand sum:", total);
//
//   return total;
// }

/*
 -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
