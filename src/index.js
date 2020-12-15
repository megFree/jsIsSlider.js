import 'normalize.css'
import {createSlider} from './createSlider'

window.addEventListener('load', () => {
  createSlider('.easy-slider-container', {
    slidesToScroll: 1,
    slidesToShow: 3,
    slidesGrow: true,
    slideDuration: 200,
    userSelect: true
  })
})
