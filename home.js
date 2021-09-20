let topDisplay = document.querySelector('.top-display');
let displayFiller = document.querySelector('.display-filler');
let logoParent = document.querySelector('.logo-parent');
let logoPic = document.querySelector('.logo-pic');
let logoText = document.querySelector('.logo-text');

// let backgroundColorSection = document.querySelector('.background-color-sect');
// let background3 = document.querySelector('.background-3');

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



// logoPic.style.opacity = '1';
// logoText.style.opacity = '1';

// displayFiller.style.backgroundColor = "#f0f4f570";
displayFiller.style.backgroundColor = "#f0f4f570";
displayFiller.style.transition = "background-color .5s ease";




// The code below is meant to adjust the grid layout based on the immidiate inner width of the window upon loading.

if (window.innerWidth < 1100 && window.innerWidth >= 650) {
    mainContainer.style.gridTemplateColumns = "1fr 1fr";
    mainContainer.style.gridTemplateRows = "1fr 1fr";
    footer.style.marginTop = '10vh';
}

if (window.innerWidth < 650) {
    mainContainer.style.gridTemplateColumns = "1fr";
    mainContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr"
    footer.style.marginTop = '30vh';
} 

// The code below is meant to adjust the grid layout based listening for changes in window size.

window.addEventListener('resize', function(event){

    if (window.innerWidth > 1100) {
        mainContainer.style.gridTemplateColumns = "1fr 1fr 1fr 1fr";
        mainContainer.style.gridTemplateRows = "1fr"
        footer.style.marginTop = '10vh';
        

    }
    if (window.innerWidth < 1100 && window.innerWidth >= 650) {
        mainContainer.style.gridTemplateColumns = "1fr 1fr";
        mainContainer.style.gridTemplateRows = "1fr 1fr"
        footer.style.marginTop = '10vh';
       

    }
    if (window.innerWidth < 650) {
        mainContainer.style.gridTemplateColumns = "1fr";
        mainContainer.style.gridTemplateRows = "1fr 1fr 1fr 1fr"
        footer.style.marginTop = '30vh';
        

        /* menuContainer toggle */

        /* menuDiv toggle */

    }; 
});


window.addEventListener('resize', function(event){
    menuContainer.style.transition = "all 0s";
    topDisplay.style.transition = "all 0s";
    mainContainer.style.transition = "all 0s";
    for(let i = 0; i < feature.length; i++) {
        feature[i].style.transition = "all 0s";
    };
});



// var offsetStart = 0;
// var offsetEnd = 0;

// window.addEventListener('scroll', () => {
//   document.documentElement.style.setProperty('--scroll', ( window.pageYOffset - offsetStart ) / ( document.body.offsetHeight - offsetStart - offsetEnd - window.innerHeight ));
// }, false);


/* --- The following code is meant to slowly change the opacity based on how far down the page one has scrolled.*/

// The range seems to be from 15px to 90px, a span of 75
// window.addEventListener("scroll", opaqueScroller);

// let menuOpacity = menuContainer.style.backgroundColor;

// function opaqueScroller() {
//     if (window.scrollY > 15) {

//         let x = window.scrollY + (window.scrollY * 1.5 / 100)
//         menuOpacity = `rgb(240, 244, 245, ${x})`

//     }
// }



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


// The code below is to change the menu options into a hamburger menu.

/* I will need to make it so that the code below is set to change when
the window scrolls past a certain point instead of "resize"*/

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

// I must remember that, when adding keys and values to an object, if I am using dot notation, i need only write the name of the variable being run through.
// But if I am adding keys and values to an object and am using BRACKET notation, I must put the variable in quotations.  If the object is not a string already, then I must put it in backticks with the ${} used to go around the variable name.


/* Once again, I will need to make this code change when it scrolls back
up past a certain point.
Furthermore, I want to set it so that clicking the menu bar sends it back
up to the top and opens the menu.
Later, I might have to make the 'open' transition as well.  Ugh.  lol  */


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
            
            // papaGrid.style.transition = 'all .5s ease';
            // compressableContainer.transition = 'all .5s ease';
            // menuContainer.transition = 'all .5s ease';
            // menuDiv.style.transition = 'all .5s ease, background-color .2s ease';
            // for(let j = 0; j < menuOp.length; j++) {

            //     menuOp[j].style.transition = 'all .5s ease, background-color .2s ease'
            // }
            
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