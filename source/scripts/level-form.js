const sliderField = document.querySelector('.level-form');
const sliderContainer = sliderField.querySelector('.level-form__slider');
const valueStartInput = sliderField.querySelector('.level-form__slider-start-value');
const valueEndInput = sliderField.querySelector('.level-form__slider-end-value');

valueStartInput.value = 0;
valueEndInput.value = 900;

noUiSlider.create(sliderContainer, {
  range: {
    min: 0,
    max: 1000,
  },
  start: 0,
  step: 1,
  connect: 'lower',
});

noUiSlider.cssClasses.target += 'level-form__slider';

sliderContainer.noUiSlider.on('update',
  () => {
    valueStartInput.value = sliderContainer.noUiSlider.get();
    valueEndInput.value = sliderContainer.noUiSlider.get();
  }
);
