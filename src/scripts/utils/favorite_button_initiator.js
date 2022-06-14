import FavoritedbRestaurant from '../data/favorite-idbs';
import { createfavoriteButtonTemplate, createUnfavoriteButtonTemplate } from '../views/template/template-creator';

const FavoritesInitiator = {
  async init({ favoriteButtonContainer, dataresto }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._dataresto = dataresto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._dataresto;

    if (await this._isRestaurantExist(id)) {
      this._renderUnFavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoritedbRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createfavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#likeButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoritedbRestaurant.putRestaurant(this._dataresto);
      this._renderButton();
    });
  },

  _renderUnFavorite() {
    this._favoriteButtonContainer.innerHTML = createUnfavoriteButtonTemplate();

    const favoriteButton = document.querySelector('#likeButton');
    favoriteButton.addEventListener('click', async () => {
      await FavoritedbRestaurant.deleteRestaurant(this._dataresto.id);
      this._renderButton();
    });
  },
};

export default FavoritesInitiator;
