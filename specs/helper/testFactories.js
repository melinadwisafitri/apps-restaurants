/* eslint-disable import/prefer-default-export */
import FavoritedbRestaurant from '../../src/scripts/data/favorite-idbs';
import FavoritesInitiator from '../../src/scripts/utils/favorite_button_initiator';

const createButtonPresenter = async (dataresto) => {
  await FavoritesInitiator.init({
    favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
    favoriteRestaurant: FavoritedbRestaurant,
    dataresto,
  });
};

export default createButtonPresenter;
