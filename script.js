'use strict'

//задача №3
let a = Math.floor(((Math.random() -0.5)*2)*100); 
let b = Math.floor(((Math.random() -0.5)*2)*100);

    if( a >= 0 && b >= 0){
        console.log( a - b)
    }else if( a < 0 && b < 0){
        console.log( a * b)
    }else{
        console.log( a + b)
    };


//задача №4
let secondA = 15;

switch( secondA ){
    case 0 :
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
         console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;
    default:
        console.log('Неверное значение');
}
//задача №5
function addition( arg1, arg2){
   return arg1 + arg2;
}
function subtraction( arg1, arg2){
    return arg1 - arg2;
}

 function multiplication( arg1, arg2){
    return arg1 * arg2;
}

 function division( arg1, arg2){
    return arg1 / arg2;
}
// задача №6
   
function mathOperation(arg1, arg2, operation){
    switch(arg1, arg2){
        case arg1 >= 0 && arg2 >=0 :
            console.log(operation);
            break;
        case arg1 < 0 && arg2 < 0 :
            console.log(operation);
            break;
        default:
            console.log(operation);
    }
};
mathOperation( -5, 8,  addition( -5, 8));
mathOperation( 5, 8,  subtraction( 5, 8));
mathOperation( -5, -8, multiplication( -5,-8));
// задание №7
console.log( null > 0);
console.log( null == 0);
console.log( null >= 0);
//прочитала статью в результате.
//задание №8
function power(val, pow){
    if( pow == 1){
        return val;
    }else{
        return val*power(val, pow -1);
    }
}
console.log(power(3, 3));



















