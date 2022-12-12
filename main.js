const prev = document.getElementById('btn-prev'),
      next = document.getElementById('btn-next'),
      slides = document.querySelectorAll('.slide'),
      dots = document.querySelectorAll('.dot');

let index = 0;

let slideIntrval = setInterval(nextImg, 2000);
    function nextImg() {
        slides[index].classList.remove('active');
        index = (index+1)%slides.length;  
        slides[index].classList.add('active');
    }
const activSlide = n => {
    for(slide of slides) {
        slide.classList.remove('active');
    }
    slides[n].classList.add('active');
}
const activDot = n => {
    for(dot of dots) {
        dot.classList.remove('active');
    }
    dots[n].classList.add('active');
}
const prepareCurrentSlide = ind => {
    activSlide(index);
    activDot(index);
}
const nextSlide = () => {
    if(index == slides.length - 1){
        index = 0;
        prepareCurrentSlide(index);
    } else {
    index++;
    prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
    index--;
    prepareCurrentSlide(index);
    }
}
dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})
console.log(index);
next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
