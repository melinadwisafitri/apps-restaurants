import routes from './routes/routes';
import UrlParser from './routes/url-parser';
import drawerButton from './utils/drawer_initiator';

class App {
  constructor({ buttons, drawer, content }) {
    this._button = buttons;
    this._drawer = drawer;
    this._content = content;
    this._initialisasiAppShell();
  }

  _initialisasiAppShell() {
    drawerButton.init({
      buttons: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipLink = document.querySelector('.skip_content');
    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }
}

export default App;
