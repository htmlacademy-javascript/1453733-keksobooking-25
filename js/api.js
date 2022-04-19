import { API_URL } from './data.js';

const getCardsData = (onSuccess, onError) => {
  fetch(`${API_URL}/data`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error();
    })
    .then((cards) => {
      onSuccess(cards);
    })
    .catch((err) => {
      onError(err.message);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(API_URL, { method: 'POST', body })
    .then((response) => {
      if (response.ok) {
        return onSuccess();
      } else {
        throw new Error();
      }
    }).catch(() => {
      onFail();
    });
};

export { getCardsData, sendData };
