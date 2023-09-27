import noUiSlider from 'nouislider'; 

const rangeSlider = () => {
  const sliders = document.querySelectorAll('.rangeSlider__el');

  if(sliders?.length > 0) {
    sliders.forEach(i => {
      const s = noUiSlider.create(i, {
        start: [20,80],
        connect: true,
        range: {
          'min': 0,
          'max': 100,
      }
      })
    })
  }
}

export default rangeSlider;