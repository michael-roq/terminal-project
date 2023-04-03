let topDisplay = document.querySelector('.top-display');
let displayFiller = document.querySelector('.display-filler');
let logoParent = document.querySelector('.logo-parent');
let logoPic = document.querySelector('.logo-pic');
let logoText = document.querySelector('.logo-text');


let papaGrid = document.querySelector('.papa-grid');

let compressableContainer = document.querySelector('.compressable-container');

let formContainer = document.querySelector('.form-container');

let menuContainer = document.querySelector('.menu-container');
let menuCover = document.querySelector('.menu-cover');
let menuDiv = document.querySelector('.menu-div');
let menuOp = document.querySelectorAll('.menu-op')


let mainContainer = document.querySelector('.main-container');
let feature = document.querySelectorAll('.feature');
let feature1 = document.querySelector('.feature1');

let footer = document.querySelector('.footer');

let backToTop = document.querySelector('.back-to-top');



displayFiller.style.backgroundColor = "#f0f4f570";
displayFiller.style.transition = "background-color .5s ease";



window.addEventListener('resize', function(event){
    menuContainer.style.transition = "all 0s";
    topDisplay.style.transition = "all 0s";
    mainContainer.style.transition = "all 0s";
    for(let i = 0; i < feature.length; i++) {
        feature[i].style.transition = "all 0s";
    };
});





/* -- Scroll position gague */ 
window.addEventListener('scroll', function(){
    console.log(`The ScrollY position is ${window.scrollY}`);
    console.log(`${window.scrollY*1.5}`)
})




//The code below is to change the background-color opacity at a certain scroll point

window.addEventListener("scroll", function(){
    if(formContainer.getBoundingClientRect().bottom > 50) {
        
        displayFiller.style.backgroundColor = "rgb(240, 244, 245, .5)"; //or #f0f4f575
        topDisplay.style.borderBottom = "2px solid #f0f4f5";
        topDisplay.style.transition = "all .2s ease"
    }

})

window.addEventListener("scroll", function(){
    if(formContainer.getBoundingClientRect().bottom <= 50) {

        displayFiller.style.backgroundColor = "rgb(240, 244, 245, 1.0)"; //or #f0f4f5ff
        topDisplay.style.transition = "all .2s ease"
    }

})


window.addEventListener("scroll", function(){


    console.log(topDisplay.getBoundingClientRect().bottom);
    
    if(formContainer.getBoundingClientRect().bottom <= 50) {


        topDisplay.style.borderBottom = "2px solid black";

        if (menuDiv.classList.contains('transition1') === false) {
    
            papaGrid.classList.toggle('transition1');
    
            compressableContainer.classList.toggle('transition1');
    
            menuContainer.classList.toggle('transition1');

            menuCover.classList.toggle('transition1');
    
            menuDiv.classList.toggle('transition1');
            
            for(let i = 0; i < menuOp.length; i++) {
            
                menuOp[i].classList.toggle('transition1');
            };

            for(let j = 0; j < menuOp.length; j++) {
            
                menuOp[j].addEventListener('mouseover', function(){
                    menuOp[j].style.transition = 'all .5s ease, background-color .1s ease';
                });
            };

            mainContainer.classList.toggle('transition1');

            menuContainer.style.transition = 'all .5s ease, transform .5s ease';

            backToTop.classList.toggle('transition1');

        };

    };
});




window.addEventListener("scroll", function(){

    if(formContainer.getBoundingClientRect().bottom > 50) {

        if (menuDiv.classList.contains('transition1') === true) {
    
            papaGrid.classList.toggle('transition1');
    
            compressableContainer.classList.toggle('transition1');
    
            menuContainer.classList.toggle('transition1');

            menuCover.classList.toggle('transition1');
    
            menuDiv.classList.toggle('transition1');
            
            for(let i = 0; i < menuOp.length; i++) {
            
                menuOp[i].classList.toggle('transition1');
            }

            mainContainer.classList.toggle('transition1');
            
            menuContainer.style.transition = 'all .5s ease';

            backToTop.classList.toggle('transition1');
        };
    };
    
});


menuCover.addEventListener("click", scrollToTop);

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}