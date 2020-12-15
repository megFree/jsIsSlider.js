import './style.css'
import defaultOptions from './defaultOptions.json'

function IsSlider(selector, options) {
  this.selector = selector
  this.options = options
  this.sliderContainer = null
  this.sliderWrapper = null
  this.slides = []
  this.wrapperDefaultWidth = null
  this.widthOnSlide = null
  this.slidesAmount = null
  this.sliderWrapper = null
  this.pageWidth = null
  this.currentScrollPage = 0

  try {
    this.applyDefaultOptions()
    this.initContainer()
    this.initWrapper()
    this.initSlides()
    this.initEvents()
  } catch(e) {
    console.error(e)
    return e
  }
}


IsSlider.prototype.applyDefaultOptions = function() {
  for (const option of Object.entries(defaultOptions)) {
    const optionName = option[0]
    const optionValue = option[1]
    if (!this.options[optionName] === undefined) {
      this.options[optionName] = optionValue
    }
  }
}


IsSlider.prototype.initContainer = function() {
  const sliderContainers = document.querySelectorAll(this.selector)

  if (sliderContainers.length === 0) {
    throw new Error(`jsIsSlider.js: Can't find slider container for '${this.selector}' selector.`)
  }

  if (sliderContainers.length > 1) {
    console.warn(`jsIsSlider.js: More than one slider containers were found for '${this.selector}' selector. Slider will use first selector.`)
  }

  this.sliderContainer = sliderContainers[0]
  this.sliderContainer.classList.add(`_iz-slider-container`)
}


IsSlider.prototype.initWrapper = function() {
  this.sliderWrapper = this.sliderContainer.children[0]
  this.sliderWrapper.classList.add('_iz-slider-wrapper')

  if (!this.options.userSelect) {
    this.sliderWrapper.classList.add('_iz-slider-wrapper-no-user-select')
  }
}


IsSlider.prototype.initSlides = function() {
  this.slides = Array.from(this.sliderWrapper.children)

  this.slides.forEach(slide => {
    slide.classList.add('_iz-slider-slide')
  })

  if (this.options.slidesGrow) {
    this.slides.forEach(slide => {
      slide.classList.add('_iz-slider-slide-grow')
    })
  }
}


IsSlider.prototype.initEvents = function() {
  this.wrapperDefaultWidth = this.sliderWrapper.offsetWidth
  this.widthOnSlide = this.wrapperDefaultWidth / this.options.slidesToShow
  this.slidesAmount = this.sliderWrapper.children.length
  this.sliderWrapper.style.width = this.widthOnSlide * this.slidesAmount + 'px'
  this.pageWidth = this.widthOnSlide * this.options.slidesToScroll


  this.mouseDownHandler = event => {

    this.sliderContainer.removeEventListener('mousedown', this.mouseDownHandler)

    const distanceForSlide = (this.options.slidesToScroll * this.widthOnSlide) / 2
    const mouseDownX = event.pageX
    const wrapperPosition = this.sliderWrapper.offsetLeft
    const slidesToShow = this.options.slidesToShow
    const slidesToScroll = this.options.slidesToScroll
    const slidesLeft = this.slidesAmount - slidesToShow
    const initPageAmount = 1
    const pagesAmount = (slidesLeft / slidesToScroll) + initPageAmount
    let nextPage = this.currentScrollPage


    this.mouseMoveHandler = event => {
      let nextPageControl = this.currentScrollPage
      const diff = mouseDownX - event.pageX
      this.sliderWrapper.style.left = wrapperPosition - diff + 'px'
      if (diff > distanceForSlide && nextPageControl < pagesAmount - 1) {
        nextPageControl += 1
      } else if (diff < -distanceForSlide && nextPageControl > 0) {
        nextPageControl -= 1
      } else {
        nextPageControl = this.currentScrollPage
      }
      nextPage = nextPageControl
    }
    document.addEventListener('mousemove', this.mouseMoveHandler)


    this.mouseUpHandler = event => {
      document.removeEventListener('mousemove', this.mouseMoveHandler)
      this.sliderContainer.addEventListener('mousedown', this.mouseDownHandler)
      this.currentScrollPage = nextPage
      this.sliderWrapper.style.left = -this.pageWidth * this.currentScrollPage + 'px'
      this.sliderWrapper.style.transition = `left .${this.options.slideDuration}s ease-out`

      setTimeout(() => {
        this.sliderWrapper.style.transition = ''
      }, this.options.slideDuration)
    }

    document.addEventListener('mouseup', this.mouseUpHandler)
  }

  this.sliderContainer.addEventListener('mousedown', this.mouseDownHandler)
}


export default IsSlider
