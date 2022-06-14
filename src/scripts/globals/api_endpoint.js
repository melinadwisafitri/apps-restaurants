import CONFIG from './config';

const APiENDPOINT = {
  LIST: `${CONFIG.BASE_URL}list`,
  DETAIL: (id) => `${CONFIG.BASE_URL}detail/${id}`,
  SEARCH: (query) => `${CONFIG.BASE_URL}sarch?q=${query}`,
  NEW_REVIEW: `${CONFIG.BASE_URL}review`,
};

export default APiENDPOINT;
