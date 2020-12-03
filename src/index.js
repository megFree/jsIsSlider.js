import EasySlider from './easySlider'
import 'normalize.css'

window.addEventListener('load', () => {
  const slider = new EasySlider('.easy-slider-container', {
    wrapper: '.easy-slider-wrapper',
    slidesToScroll: 2,
    slidesToShow: 3,
    slidesGrow: true,
    slideDuration: 200,
    dots: true
  })
})
