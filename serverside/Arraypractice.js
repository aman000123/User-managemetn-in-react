
////////////////////////////////////////////////////////////////////////////////////array length method

 //const arr = [1,2,3,4,5];

// console.log(arr.length)

//assinings length [agar arr me length ko origianal se kam length ko assign kare to km wali length le lega ]

//agar jyad assign karen to jyada wala  lega original array  arr me utna empty element jod deta hai

 //arr.length = 9;

//console.log(arr.length)  9

//console.log(arr)  [ 1, 2, 3, 4, 5, <4 empty items> ]


// const arr = [1,undefined,NaN,null];

// console.log(arr.length)



/////////////////////////////////////////////////////////////////////////reverse()

//const ar = [1,2,3,4,5]

 //console.log(ar.reverse())  [ 5, 4, 3, 2, 1 ]

 //console.log(ar)  [ 5, 4, 3, 2, 1 ]

 //spread opreater se reverse karne original arr reverse nahi hota

//const re = [...ar].reverse()

//console.log(re)  [ 5, 4, 3, 2, 1 ]

//console.log(ar)  [ 1, 2, 3, 4, 5 ]



////////////////////////////////////////////////////////////////Array sort()



//const arr = ["sanoo","cccc","anjli","kuldeep","babali","aman"]

// const arr = [2,12,43,100,10000,2332,4433,5]

 //console.log(arr.sort())  [ 'aman', 'anjli', 'babali', 'cccc', 'kuldeep', 'sanoo' ]


//arr.sort()  method takes compare function in parameters



//const arr = ["sanoo","cccc","anjli","kuldeep","babali","aman"]

// function compare(a,b){

//     return a.length - b.length
// }
//  const compare = (a,b)=> a.length - b.length

//  arr.sort(compare)

//  console.log(arr)

// console.log(arr)   [ 'cccc', 'aman', 'sanoo', 'anjli', 'babali', 'kuldeep' ]




////////////////////////////////////////////////////////////////arr.fill()//////////////////////////////////////

//the fill() method returns an array by filling all elements with a specified value.

//const arr = [1,2,3,4,5];

//console.log(arr.fill(4))   [ 4, 4, 4, 4, 4 ]
// console.log(arr.fill(4))

// console.log(arr)  [ 4, 4, 4, 4, 4 ]

//////////////////////////////////////////////////////////////fill()  methods modifieds originals array




////////////////////////[[[[[[[[[[[[arr.fill(value, start, end)]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// const arr = ["aman","anjli","atul","arpit","anureg","JavaScript", "Python", "C", "C++"];

// console.log(arr.fill("pransh",4,7))

//const num = [1,2,3,4,5];

//console.log(num.fill(10,-3))  [ 1, 2, 10, 10, 10 ]

//if invalid indexnuber or length  in parameter

//console.log(num.fill(10,23,25))  [ 1, 2, 3, 4, 5 ]


//console.log(num.fill(13,NaN,NaN))  [ 1, 2, 3, 4, 5 ]


//////////////////////////////////////////////////////////////////arr.join()   method


//The join() method returns a new string by concatenating all of the elements in an array, separated by a specified separator.

//  const arr = ["aman","anjli","atul","arpit","anureg","JavaScript", "Python", "C", "C++"];

//  console.log(arr.join(""))

//const num = [1,2,3,".",5,6]

//console.log(num.join(""))   123.56

//const num = ["aman",23,undefined,null,NaN]

//console.log(num.join("&")) aman&23&&&NaN

//console.log(num.join("&")) 
//console.log(num)


//////////////////////////////////////join()  methods does not change originals array


///////////////////////////////////////////////////////////////