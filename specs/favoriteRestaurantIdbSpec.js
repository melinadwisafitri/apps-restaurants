import FavoritedbRestaurant from '../src/scripts/data/favorite-idbs';
import itFavoriteRestaurantModel from './contract/favoriteRestaurantContract';

describe('favorite restaurant database Contract Test', () => {
  afterEach(async () => {
    (await FavoritedbRestaurant.getALLRestaurant()).forEach(async (restaurant) => {
      await FavoritedbRestaurant.deleteRestaurant(restaurant.id);
    });
  });

  itFavoriteRestaurantModel(FavoritedbRestaurant);
});
