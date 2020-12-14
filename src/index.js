import 'normalize.css'
import createSlider from './createSlider'

window.addEventListener('load', () => {
  const slider = new createSlider('.easy-slider-container', {
    slidesToScroll: 1,
    slidesToShow: 3,
    slidesGrow: true,
    slideDuration: 200,
    dots: true
  })
})
