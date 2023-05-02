
const swiper = new Swiper('.swiper', {
 
    // direction: 'vertical',
   
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  });


  function adjustCarousel(){
    const activeIndex = swiper.activeIndex;
const activeSlide = swiper.slides[activeIndex];
const activeWidth = activeSlide.offsetWidth;
const activeHeight = activeSlide.offsetHeight;

const swiperContainer = document.querySelector('.swiper');
swiperContainer.style.width = activeWidth + 'px';
swiperContainer.style.height = activeHeight + 'px';
console.log('dis funciton was read')
console.log(activeIndex , activeSlide , activeWidth ,activeHeight)
  } 



const right = document.querySelector('.swiper-button-next');
const left = document.querySelector('.swiper-button-prev');

left.addEventListener('click' , adjustCarousel)
right.addEventListener('click' , adjustCarousel)

window.addEventListener('load' , adjustCarousel)

  