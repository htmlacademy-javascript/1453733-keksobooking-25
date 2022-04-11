import { getRandomPositiveInteger, getRandomPositiveFloat, getRandonElementFromArray } from './util.js';

const price = {
  MIN: 1,
  MAX: 10000,
};

const rooms = {
  MIN: 1,
  MAX: 6,
};

const guests = {
  MIN: 1,
  MAX: 10,
};

const Coordinate = {
  LAT: {
    MIN: 35.65,
    MAX: 35.7,
  },

  LNG: {
    MIN: 139.7,
    MAX: 139.8,
  },
};

const DESCRIPTIONS = ['Great place to relax', 'Room with a sea view', 'Room for the big family'];
const TITLES = ['Best offer of march', 'Hot offer', 'Now or never'];
const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const TITLE_MIN_LENGTH = 30;
const TITLE_MAX_LENGTH = 100;
const MAX_PRICE = 100000;
const HUNDRED_ROOMS = 100;
const NOT_GUESTS = 0;

const housePriceTypes = {
  bungalow: 0,
  flat: 1000,
  hotel: 3000,
  house: 5000,
  palace: 10000
};

export { TITLE_MIN_LENGTH, TITLE_MAX_LENGTH, MAX_PRICE, housePriceTypes, HUNDRED_ROOMS, NOT_GUESTS };

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

function generateData() {
  const result = [];

  for (let index = 1; index <= 10; index++) {
    const element = generateObject(index);

    result.push(element);
  }

  return result;
}

generateData();

function generateObject(index) {
  const userID = String(index).padStart(2, '0');
  const LAT = getRandomPositiveFloat(Coordinate.LAT.MIN, Coordinate.LAT.MAX, 4);
  const LNG = getRandomPositiveFloat(Coordinate.LNG.MIN, Coordinate.LNG.MAX, 4);

  const element = {
    author: {
      avatar: `img/avatars/user${userID}.png`,
    },

    offer: {
      title: getRandonElementFromArray(TITLES),
      address: `${LAT}, ${LNG}`,
      price: getRandomPositiveInteger(price.MIN, price.MAX),
      type: getRandonElementFromArray(TYPES),
      rooms: getRandomPositiveInteger(rooms.MIN, rooms.MAX),
      guests: getRandomPositiveInteger(guests.MIN, guests.MAX),
      checkin: getRandonElementFromArray(CHECKINS),
      checkout: getRandonElementFromArray(CHECKOUTS),
      features: generateFeatures(),
      description: getRandonElementFromArray(DESCRIPTIONS),
      photos: generatePhotos(),
    },

    location: {
      lat: LAT,
      lng: LNG,
    },
  };

  return element;
}

function generatePhotos() {
  const result = [];
  const count = getRandomPositiveInteger(0, PHOTOS.length);

  for (let index = 1; index < count; index++) {
    result.push(getRandonElementFromArray(PHOTOS));
  }

  return result;
}

function generateFeatures() {
  const result = [];
  const count = getRandomPositiveInteger(0, FEATURES.length);

  for (let index = 1; index < count; index++) {
    result.push(getRandonElementFromArray(FEATURES));
  }

  return result;
}

function arrayObjects() {
  return Array.from({ length: 1 }, generateObject);
}

export { arrayObjects };
