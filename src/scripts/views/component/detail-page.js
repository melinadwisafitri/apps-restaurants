import CONFIG from '../../globals/config';

class detailPage extends HTMLElement {
  set detailResto(data) {
    this._detailResto = data;
    this.render();
  }

  render() {
    this.innerHTML += `
    <div class="popup" id="popup">
    <div class="popup-content">
        <div class="reviewer">
            <div class="title-popup">
                <h3>Add Review of Restaurant</h3>
                <input class="close_button" type="button" value="x">
            </div>
            <div class="name_reviewer">
                <label for="name">Name</label>
                <input type="text" name="name_reviewer" id="name_reviewer" placeholder="Input your complete name" required>
            </div>
            <div class="review_form_people">
                <label for="review">Review</label>
                <input type="text" name="review_new" id="review_new" placeholder="enter your review about this restaurant required">
            </div>
            <button id="send_review">send</button>
        </div>
    </div>
    </div>
      <section class="detail_page">
        <div class="detail_page_flex">
            <div class="detail_image">
                <img class="lazyload" src="${CONFIG.BASE_URL_IMAGES('large') + this._detailResto.pictureId}" alt="${this._detailResto.name}">
            </div>
            <div class="detail_text">
                <div class="flexdetail__title">
                    <div class="flexdetail__title_1">
                        <h1 class="title_detail">${this._detailResto.name}</h1>
                        <p class="rate_detail">${this._detailResto.rating}🤎</p>
                    </div>
                    <div class="flexdetail__location">
                        <p class="city material-icons-round">location_on</p>
                        <div class="detail_address">
                            <p class="city">${this._detailResto.city}</p>
                            <p class="address">${this._detailResto.address}</p>
                        </div>
                    </div>    
                </div>
                <div class="description_detail">
                    <p>${this._detailResto.description}</p>
                </div>         
            </div>
        </div>
        <div class="detail_page__menu">
            <div class="detail_menu__" id="foods">
                Foods
                <p>${this._detailResto.menus.foods.map((food) => `<li class="detail_menu__item">${food.name}</li>`).join('')}</p>
            </div>
            <hr class="horizontal_hr">
            <div class="detail_menu__" id="drink">
                Drinks
                <p>${this._detailResto.menus.drinks.map((food) => `<li class="detail_menu__item">${food.name}</li>`).join('')}</p>
            </div>
        </div>
    </div>
    </section>
      `;
  }
}

customElements.define('detail-page-elements', detailPage);
