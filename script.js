let navigation = document.querySelector('.nav');
let toggle = document.querySelector('.toggle');
toggle.onclick = function(){
    navigation.classList.toggle('active')
}

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".sliderImg");
let sliderSectionLast = sliderSection[sliderSection.length -1];

slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".sliderImg")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition ="all 0.5s";
    setTimeout(function(){
        slider.style.transition="none";
        slider.insertAdjacentElement('beforeend',sliderSectionFirst);
        slider.styles.marginLeft ="-100%";
    },500);
    }
    setInterval(function(){
        Next();
    },5000);