import { setSubmitForm } from './form/validate-ad-form.js';
import { showSuccessMessage } from './form/reset-form.js';
import { getCardsData } from './api.js';
import { mapIsLoad } from './map.js';
import { showError, errorMapMessage } from './form/error-form-message.js';
import { setFilterHousingValues } from './form/filter-form.js';
import { debounce } from './util.js';
import { DEBOUCE_TIME_OUT } from './data.js';
import { initFormAddress } from './form/validate-ad-form.js';
import { initFormPrice } from './form/validate-ad-form.js';

setSubmitForm(showSuccessMessage, showError, initFormAddress, initFormPrice);

getCardsData((cards) => {
  mapIsLoad(cards);
  setFilterHousingValues(debounce((target) => mapIsLoad(cards, target), DEBOUCE_TIME_OUT));
}, errorMapMessage);
