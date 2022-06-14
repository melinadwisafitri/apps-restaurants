class headerDetail extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
          <div class="header__brand">
              <a class="fa fa-backward" href="/"></a>
              <h1>Luwe Sanget</h1>
          </div>
          <div class="header__button">
              <button class="menu material-icons-round">menu</button>
          </div>
          <nav class="side_bar">
              <ul class="side_bar__nav">
                  <li class="side_bar__item active">
                      <a href="/" >
                          <p class="material-icons-round">space_dashboard</p>
                          <p>Home</p>
                      </a>
                  </li>
                  <li class="side_bar__item active">
                  <a href="#/favorite" >
                      <p class="material-icons-round">favorite</p>
                      <p>Favorite</p>
                  </a>
                  </li>
                  <li class="side_bar__item active">
                      <a href="http://github.com/melinadwisafitri/" target="_blank">
                          <p class="material-icons-round">contact_page</p>
                          <p>AboutUs</p>
                      </a>
                  </li>
              </ul>
          </nav>
          `;
  }
}

customElements.define('header-detail-element', headerDetail);
