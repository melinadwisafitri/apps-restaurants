const CONFIG = {
  KEY: '123',
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_URL_IMAGES: (size) => `https://restaurant-api.dicoding.dev/images/${size}/`,
  DEFAULT_LANGUAGE: 'en-us',
  CACHE_NAME: new Date().toISOString(),
  DATABASE_NAME: 'restaurant-apps',
  DATABASE_VERSION: 1,
  OBJECT_STORAGE_NAME: 'restaurant',
};

export default CONFIG;
