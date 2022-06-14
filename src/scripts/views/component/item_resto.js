import CONFIG from '../../globals/config';

class itemlistResto extends HTMLElement {
  set dataResto(data) {
    this._dataResto = data;
    this.render();
  }

  render() {
    this.innerHTML = `
            <div class="card-list" id='card-list'>
              <div class="card-list-blur">
                <div class="images">
                 <img class="lazyload" data-src="${CONFIG.BASE_URL_IMAGES('small') + this._dataResto.pictureId}" alt="${this._dataResto.name}" >
                </div>
              </div>
              <div class="colors-card">
                <div class="flexs">
                  <p class="name_resto">${this._dataResto.name}</p>
                  <p>${this._dataResto.rating}★</p>
                </div>
                <hr>
                <p class="description">${this._dataResto.description.slice(0, 100)}</p>
                <div class="flexs">
                  <div class="flexs-row-no-between">
                    <p class="city material-icons-round">location_on</p>
                    <p class="city">${this._dataResto.city}</p>
                  </div>
                  <a class="to-detail" id="to-detail__page" href="${`/#/detail/${this._dataResto.id}`}">more</a>
                </div
              </div>
              
            </div>
        `;
  }
}

customElements.define('item-resto', itemlistResto);
