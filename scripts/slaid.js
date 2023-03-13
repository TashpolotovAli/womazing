// слайдер 
var counter = 1;
setInterval(function(){
   document.getElementById('radio' + counter).checked = true;
      counter ++;
      if(counter > 4){
         counter = 1;
      }
},5000);

// прокрутка вниз 
var button  = document.querySelector('.collection__title-open-icons3');
var footer = document.querySelector('#coll')
   
   button.addEventListener('click', () => {
      scrollTo(coll);
   });
