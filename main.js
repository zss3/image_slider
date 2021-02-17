const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 5000;
let slideInterval;


// auto slide
if (auto){
    slideInterval = setInterval(nextSlide, intervalTime);
}



function nextSlide(){
    // get .current class
    const current = document.querySelector('.current');
    // remove .current class from current
    current.classList.remove('current');
// check if there is a next slide
    if(current.nextElementSibling){
        current.nextElementSibling.classList.add('current');
    } else{
        // add current to first slide
        slides[0].classList.add('current');
    }
        // restart slide timer when auto is on. Will reset timer when nextSlide function runs due to Click eventlistener on next button. 
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}



function prevSlide(){
    // get .current class
    const current = document.querySelector('.current');
    // remove .current class from current
    current.classList.remove('current');
    // check if there is a previous slide
    if(current.previousElementSibling){
        current.previousElementSibling.classList.add('current');
    } else{
        // add current to last slide
        slides[slides.length - 1].classList.add('current');
    }
    // restart slide timer when auto is on. Will reset timer when nextSlide function runs due to Click eventlistener on next button. 
    if (auto) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }
}




// button listeners

next.addEventListener('click', nextSlide);

prev.addEventListener('click', prevSlide);




