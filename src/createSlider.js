import './style.css'

export const createSlider = (selector, options) => {

  //@todo default options!!
  for (let option of Object.entries(options)) {

  }

  initSlider(selector, options)
}

function initSlider(selector, options) {
  const sliderContainers = document.querySelectorAll(selector)

  if (sliderContainers.length === 0) {
    console.error(`easySlider.js: Can't find slider container for '${selector}' selector.`)
    return
  }

  if (sliderContainers.length > 1) {
    console.warn(`easySlider.js: More than one slider containers were found for '${selector}' selector. Slider will use first selector.`)
  }

  const sliderContainer = sliderContainers[0]
  sliderContainer.classList.add(`_easy-slider-container`)

  const sliderWrapper = sliderContainer.children[0]
  sliderWrapper.classList.add('_easy-slider-wrapper')

  const slides = Array.from(sliderWrapper.children)
  slides.forEach(slide => {
    slide.classList.add('_easy-slider-slide')
  })
  if (options.slidesGrow) {
    slides.forEach(slide => {
      slide.classList.add('_easy-slider-slide-grow')
    })
  }

  const wrapperDefaultWidth = sliderWrapper.offsetWidth
  const widthOnSlide = wrapperDefaultWidth / options.slidesToShow
  const slidesAmount = sliderWrapper.children.length
  sliderWrapper.style.width = widthOnSlide * slidesAmount + 'px'

  const pageWidth = widthOnSlide * options.slidesToScroll

  let currentScrollPage = 0

  const mouseDownHandler = event => {
    sliderContainer.removeEventListener('mousedown', mouseDownHandler)

    const distanceForSlide = (options.slidesToScroll * widthOnSlide) / 2
    const mouseDownX = event.pageX
    const wrapperPosition = sliderWrapper.offsetLeft
    let nextPage = currentScrollPage
    const slidesToShow = options.slidesToShow
    const slidesToScroll = options.slidesToScroll
    const slidesLeft = slidesAmount - slidesToShow
    const initPageAmount = 1
    const pagesAmount = (slidesLeft / slidesToScroll) + initPageAmount

    const mouseMoveHandler = event => {
      let nextPageControl = currentScrollPage
      const diff = mouseDownX - event.pageX
      sliderWrapper.style.left = wrapperPosition - diff + 'px'
      if (diff > distanceForSlide && nextPageControl < pagesAmount - 1) {
        nextPageControl += 1
      } else if (diff < -distanceForSlide && nextPageControl > 0) {
        nextPageControl -= 1
      } else {
        nextPageControl = currentScrollPage
      }
      nextPage = nextPageControl
    }
    document.addEventListener('mousemove', mouseMoveHandler)

    const mouseUpHandler = event => {
      document.removeEventListener('mousemove', mouseMoveHandler)
      sliderContainer.addEventListener('mousedown', mouseDownHandler)
      currentScrollPage = nextPage
      sliderWrapper.style.left = -pageWidth * currentScrollPage + 'px'
      sliderWrapper.style.transition = `left .${options.slideDuration}s ease-out`

      setTimeout(() => {
        sliderWrapper.style.transition = ''
      }, options.slideDuration)
    }
    document.addEventListener('mouseup', mouseUpHandler)

  }
  sliderContainer.addEventListener('mousedown', mouseDownHandler)
}
