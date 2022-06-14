class jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="jumbotron" id="jumbotron">
        <div class="jumbotron_hero">
            <div class="jumbotron_1">
              <h2 class="jumbotron_title">Let'go eat ..!!!</h2>
              <p class="jumbotron_subtitle">Many restaurant with many menu and delicious</p>
              <button aria-label="learn-more" class="learn-more">
                Learn More
              </button>
              </div>
        </div>
      </section>
          `;
  }
}

customElements.define('jumbotron-elements', jumbotron);
