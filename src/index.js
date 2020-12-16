import 'normalize.css'
import {IsSlider} from './IsSlider'

window.addEventListener('load', () => {
  const slider = new IsSlider('.easy-slider-container', {
    //slidesToScroll: 1,
    slidesToShow: 3,
    slidesGrow: true,
    slideDuration: 200,
    userSelect: false
  })
})
