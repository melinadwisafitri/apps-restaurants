class footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>Copyright &copy; 2022</p>
      <p>Melsa</p>
      `;
  }
}

customElements.define('footer-elements', footer);
