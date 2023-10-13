
const articleSliders = () => {
  const thumbsEl = document.querySelector('.articleMain__main_card_thumbs');
  const sliderEl = document.querySelector('.articleMain__main_card_slider');

  if(sliderEl && thumbsEl) {
    const thumbSwiper = new Swiper(thumbsEl, {
      spaceBetween: 12,
      slidesPerView:3,
      direction: 'vertical',
      watchSlidesProgress: true,
      navigation: {
        prevEl: '.articleMain__main_card_thumbs_nav-prev',
        nextEl: '.articleMain__main_card_thumbs_nav-next'
      }
    })
    const mainSwiper = new Swiper(sliderEl, {
      spaceBetween: 10,
      slidesPerView: 1,
      thumbs: {
        swiper: thumbSwiper,
      },
    })
  }
  
}

export default articleSliders;