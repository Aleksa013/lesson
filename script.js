'use strict'
// задание №1
let n = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
let m = 0;
while ( m < n.length){
   console.log(n[m++]);
   
};
//задания №2-3
let bask = [200, 300, 800];


function countBascetPrice(){
    let equally = 0;
    for( let i=0; i < bask.length; i++){
        equally += bask[i];
    }
    console.log(equally);

};

countBascetPrice();
//задание №4
for(let a = 0; a <= 9; console.log(a++)){};

//задание №5
let pyramid =[];
while( pyramid.length < 20){
    pyramid.push('x');
    console.log(pyramid)
};






















