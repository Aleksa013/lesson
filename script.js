'use strict'
//задание №1
let num = '592';
function numToObj( num ){
    const arrNumber = num.split('');
    while (arrNumber.length < 3){
        arrNumber.unshift( 0 );
    }
    const numbers = {};
    if (arrNumber.length > 3){
        console.log("Недопустимое число. Число должно быть меньше 1000");
    }
    else{
        numbers['сотни'] = +arrNumber[ 0 ];
        numbers['десятки'] = +arrNumber[ 1 ];
        numbers['единицы'] = +arrNumber[ 2 ];
        console.log( numbers );
    }
}

numToObj( num );

//задание №2
let bascet = [
    {kind : 'pants' ,
    price : 500
},
{
    kind : 'dress'  ,
    price : 750
},
{
    kind : 'coat' ,
    price : 1700
}
];

function countBasKetPrice(){
    let equally =0;
    for( let i = 0; i < bascet.length; i++){
        equally += bascet[i].price;
    }
    console.log(equally);
};
countBasKetPrice();



























