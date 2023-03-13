//активный пункт меню
const currentlocation = location.href;
const menuItem = document.querySelectorAll('#active a');
const menuLength = menuItem.length;

   for (let i = 0; i<menuLength; i++){
      if(menuItem[i].href === currentlocation){
         menuItem[i].className = "active" 
      };
   };







function myFunction(){
   window,location.href="shop.html";
};
function scrollTo(element) {
   window.scroll({
      left: 0,
      top: element.offsetTop,
      behavior: 'smooth'
   });
};



// активный button shop
let buttons = document.querySelectorAll(".wocommerce-title__click");
   buttons.forEach(btn => {
      btn.addEventListener('click', function(){
         console.log('click');
         buttons.forEach(btn => btn.classList.remove('child'));
         this.classList.add('child');
   });
});

let onItem = document.querySelectorAll('.oneitem__head-value-btn-button');
   onItem.forEach(btn =>{
      btn.addEventListener('click', function(){
         console.log('click');
         onItem.forEach(btn => btn.classList.remove('onitem'));
         this.classList.add('onitem');
      });
   });









function myImg(){
   document.getElementById('cart').style.cssText='display:none';
   document.getElementById('checkaunt').style.cssText='display:block';
};

function myItem(){
   document.getElementById('form').style.cssText='display:none';
   document.getElementById('success').style.cssText='display:block';
};

function myClick(){
   window,location.href="index.html";
};







