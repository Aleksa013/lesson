'use strict'
let product = document.querySelectorAll('.product');
const basket = document.querySelector('.basket');
let coat = {
    kind : 'плащ' ,
    price : 1700
};
let pants ={
    kind : 'брюки' ,
    price : 500
};
let dress ={
    kind : 'платье'  ,
    price : 750
};
let chip_basket = [];

console.log( product);
function addBtn(){
     for( let i = 0; i < product.length; i++){
     let btn = document.createElement('button');
       btn.style.width = '70px';
       btn.style.height = '30px';
       btn.style.border ='1px solid blue';
       btn.style.margin = '10px 10px 10px 150px';
       btn.style.padding ='6px';
       product[i].appendChild(btn).classList.add('product'[i]);
       btn.insertAdjacentText('afterbegin', 'Купить');
    }
}
addBtn();
const btnCoat = document.querySelector('.p');
const btnPants = document.querySelector('.r');
const btnDress = document.querySelector('.o');
 function addProduktBasket(){
    chip_basket.push()
    return;
}
function countBasKetPrice(){
    let equally =0;
    if( chip_basket.length !== 0){
    for( let a = 0; a < chip_basket.length; a++){
        equally += chip_basket[a].price;
    }
    basket.insertAdjacentText('beforeend','В корзине: '+ chip_basket.length +' товара на сумму '+ equally +' рублей');
}else{
    basket.insertAdjacentText('beforeend','Корзина пуста!');
}
};


btnCoat.onclick = function (){
    chip_basket.unshift(coat);
    
    countBasKetPrice();
    console.log(chip_basket);
};
btnPants.onclick = function(){
    chip_basket.unshift(pants);
    countBasKetPrice();
    console.log(chip_basket);
    
};
btnDress.onclick = function(){
    chip_basket.unshift(dress);
    countBasKetPrice();
    console.log(chip_basket);
   
};

countBasKetPrice();



































