const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'right';

const basketheading = document.querySelector('#basket-heading');
basketheading.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'none';


const fruitItems = document.querySelectorAll('.fruit');
for(let i=0;i<fruitItems.length;i++){
  fruitItems[i].style.backgroundColor = 'white';
  fruitItems[i].style.padding='10px';
  fruitItems[i].style.margin = '5px';
  fruitItems[i].style.borderRadius = '5px';
}

const EvenFruitItems = document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<EvenFruitItems.length;i++){
  EvenFruitItems[i].style.backgroundColor = 'brown';
  EvenFruitItems[i].style.color = 'white';
}






