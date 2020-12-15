# jsIzSlider

Simple and lightweight pure js slider, the sponsor of your headache while installing and setting this up.

## Installation

### npm
`npm install js-is-slider`

### other
Coming soon...

## Usage
`import IsSlider from './IsSlider'`

`const slider = new IsSlider('.selector', optionsObject)`

## Options

- slidesToScroll: number -  amount of slides to scroll by single iteration
- slidesToShow: number - amount of slides to show on one page between iterations
- slidesGrow: boolean - is every slide takes as much width as it can
- slideDuration: number - time witch slider takes to do single iteration (ms) (buggy)
- userSelect: boolean - is user can select slides content (buggy)

## Soon features
- Buttons to scroll
- Pagination
- Vertical slider
- Mobile breakpoints

## Default options
"slidesToScroll": 1,<br>
"slidesToShow": 3, <br>
"slidesGrow": true, <br>
"slideDuration": 200, <br>
"userSelect": true