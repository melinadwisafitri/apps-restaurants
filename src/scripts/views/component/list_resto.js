import './item_resto';

class listRestaurant extends HTMLElement {
  set dataResto(data) {
    this._dataResto = data;
    this.render();
  }

  render() {
    this.innerHTML = '';
    this._dataResto.forEach((data) => {
      const item = document.createElement('item-resto');
      item.dataResto = data;
      this.appendChild(item);
    });
  }
}
customElements.define('list-resto', listRestaurant);
