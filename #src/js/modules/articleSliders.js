
const articleSliders = () => {
  const thumbSwiper = new Swiper(".articleMain__main_card_thumbs", {
    spaceBetween: 12,
    slidesPerView:3,
    direction: 'vertical',
    watchSlidesProgress: true,
  })
  const mainSwiper = new Swiper(".articleMain__main_card_slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    thumbs: {
      swiper: thumbSwiper,
    },
  })
}

export default articleSliders;