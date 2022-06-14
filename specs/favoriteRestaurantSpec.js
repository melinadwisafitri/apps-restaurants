import FavoritedbRestaurant from '../src/scripts/data/favorite-idbs';
import createButtonPresenter from './helper/testFactories';

describe('Favorite a Restaurant', () => {
  const addfavoriteRestaurantContainer = () => {
    document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
  };

  beforeEach(() => {
    addfavoriteRestaurantContainer();
  });

  it('should show the like button when restaurant not been liked before', async () => {
    await createButtonPresenter({
      id: 1,
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the like button when restaurant not been liked before', async () => {
    await createButtonPresenter({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite restaurant', async () => {
    await createButtonPresenter({
      id: 1,
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const restaurant = await FavoritedbRestaurant.getRestaurant(1);
    expect(restaurant).toEqual({
      id: 1,
    });
    FavoritedbRestaurant.deleteRestaurant(1);
  });

  it('should not add to favorite again when already favorite', async () => {
    await createButtonPresenter({
      id: 1,
    });

    await FavoritedbRestaurant.putRestaurant({
      id: 1,
    });
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritedbRestaurant.getALLRestaurant())
      .toEqual([{
        id: 1,
      }]);
    FavoritedbRestaurant.deleteRestaurant(1);
  });

  it('should not add a restaurant when has no id', async () => {
    await createButtonPresenter({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoritedbRestaurant.getALLRestaurant()).toEqual([]);
  });
});
