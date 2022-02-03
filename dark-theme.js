// you need to create DOM selectors to grab the correct HTML elements and update their styles to the opposite theme's css classes when you want to toggle the theme off and on

// const for buttons / wrapper
const darkMode = document.querySelector(".modeDark");
const lightMode = document.querySelector(".modeLight");
const wrapper = document.querySelector("#wrapper");

// to change the background colors

darkMode.addEventListener("click", function(){
    wrapper.style.backgroundColor = "black";
    wrapper.style.color = "white";
});

lightMode.addEventListener("click", function(){
    wrapper.style.backgroundColor = "white";
    wrapper.style.color = "black";
});