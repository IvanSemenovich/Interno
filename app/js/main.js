// if (window.matchMedia("(max-width: 615px)").matches) {
//     /* the viewport is less than 768 pixels wide */
//     $('.projects__items').slick({
//         dots:true,
//         arrows:false
//     });
//   } 
const menuButton = document.getElementById("menu-button");
const menuList = document.getElementById("menu");
menuButton.addEventListener('toggle',function(){
    menuList.style.display="none";
})