class contentMain extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <section class="content" id="content">
          <h2>Explore Restaurant</h2>
          <hr>
          <div class="search_bar">
              <input type="search" placeholder="Search restaurant by name">
              <button class="btn_search" id="btn_search" type="submit">Search</button>
          </div>
        </section>
        `;
  }
}

customElements.define('content-main-elements', contentMain);
