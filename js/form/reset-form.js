import { resetFormGroup } from './disabled-form.js';
import { returnInitialMap } from '../map.js';
import { getInitialSliderPosition } from '../slider.js';
import { switchOnSubmitBtn, pristine, initFormPrice, initFormAddress } from './validate-ad-form.js';
import { isEscapeKey } from '../util.js';

const resetBtn = document.querySelector('.ad-form__reset');

const onHideSuccessMessageKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    document.querySelector('.success').remove();
    document.removeEventListener('keydown', onHideSuccessMessageKeyDown);
  }
};

const onHideSuccessMessage = () => {
  document.querySelector('.success').remove();
  document.removeEventListener('keydown', onHideSuccessMessageKeyDown);
};

const resetForm = () => {
  resetFormGroup();
  returnInitialMap();
  pristine.reset();
  getInitialSliderPosition();
  switchOnSubmitBtn();
  initFormPrice();
  initFormAddress();
};

const showSuccessMessage = () => {
  const success = document.querySelector('#success').content;
  const content = success.querySelector('.success').cloneNode(true);
  document.body.appendChild(content);

  content.addEventListener('click', onHideSuccessMessage);
  document.addEventListener('keydown', onHideSuccessMessageKeyDown);

  resetForm();
};

resetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
});

export { showSuccessMessage, resetForm };
