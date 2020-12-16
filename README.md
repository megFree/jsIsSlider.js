# jsIzSlider

Simple and lightweight pure js slider, the sponsor of your headache while installing and setting this up.

## Installation

### npm
`npm install js-is-slider`

### other
Coming soon...

## Usage
javascript

    import IsSlider from 'js-iz-slider'
    const slider = new IsSlider('.easy-slider-container', {
        slidesToScroll: 1,
        slidesToShow: 3,
        slidesGrow: true,
        slideDuration: 200,
        userSelect: false
    })

    
html
    
    <!-- Slider instance container -->
        <div class="easy-slider-container">

        <!-- Slides wrapper -->
        <div>

            <!-- Slides -->
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
        </div>
    </div>




## Options

- slidesToScroll: number -  amount of slides to scroll by single iteration
- slidesToShow: number - amount of slides to show on one page between iterations
- slidesGrow: boolean - is every slide takes as much width as it can
- slideDuration: number - time which slider takes to do single iteration (ms) (buggy)
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
"userSelect": false