/* eslint-disable import/extensions */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/header.css';
import '../styles/jumbotron.css';
import '../styles/footer.css';
import '../styles/detail.css';
import '../styles/info.css';
import '../styles/review.css';
import '../styles/responsive_media.css';
import './views/component/header_index.js';
import './views/component/header-detail.js';
import './views/component/jumbotron.js';
import './views/component/content.js';
import './views/component/list_resto.js';
import './views/component/info.js';
import './views/component/footer.js';
import './views/component/detail-page.js';
import App from './app';
import registerSW from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
  buttons: document.querySelector('.menu'),
  drawer: document.querySelector('.side_bar'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  registerSW();
});
