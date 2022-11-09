
// APARTADO A

// const head = array => array[0]; 
 const head = ([_first, ...nums]) => _first; 
 var myArray = [5,6,8,2,1,4,7];
 console.log(head(myArray));


// APARTADO B

// const tail = (...nums) => {
//     var newArray = nums.slice(1,nums.length);
//     newArray.forEach(element => {
//         console.log(element)
//     });
// };
// console.log(tail(1,8,3,6,478,5,2));

const tail = (_first, ...nums) => nums;
console.log(tail(1,8,3,6,478,5,2));


// APARTADO C

const init = (array) => {
    var newArray = array.slice(0,(array.length-1));
    newArray.forEach(element => {
        console.log(element)
    });
}; 

init(myArray);







// // APARTADO D

const last = (array) => array.slice(-1);
console.log(last(myArray)); 
