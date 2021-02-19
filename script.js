'use strict'
//задание №1
let chess = document.querySelector('.chessBoard');

let i = 0;
let quantity = 0;
while( quantity < 64 ){
    let checker = document.createElement('div');
    chess.appendChild(checker);

    checker.classList.add('checkerBoard');
    if( i && i % 2){
    checker.classList.add('checkerBoard_black')
    }
    i+= ((i+2) % 9) ? 1 : 2;
    quantity++;

};

//задание №2
let basket = document.querySelector('.basket');

let chip_basket = [
    {
        kind : 'pants' ,
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
    if( chip_basket.length !== 0){
    for( let a = 0; a < chip_basket.length; a++){
        equally += chip_basket[a].price;
    }
   basket.insertAdjacentText('beforeend','В корзине: '+ chip_basket.length +' товаров на сумму '+ equally +' рублей');
}else{
    basket.insertAdjacentText('beforeend','Корзина пуста!');
}
};
countBasKetPrice();





























