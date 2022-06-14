import FavoritedbRestaurant from '../src/scripts/data/favorite-idbs';
import createButtonPresenter from './helper/testFactories';

const addFavoriteButtonContainer = () => {
  document.body.innerHTML = '<div id="favoriteButtonContainer"></div>';
};

describe('Unfavorite a restaurant', () => {
  beforeEach(async () => {
    addFavoriteButtonContainer();
    await FavoritedbRestaurant.putRestaurant({
      id: 1,
    });
  });

  afterEach(async () => {
    await FavoritedbRestaurant.deleteRestaurant(1);
  });

  it('should display unFavorite widget if has been favorite', async () => {
    await createButtonPresenter({
      id: 1,
    });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeTruthy();
  });

  it('should not display favorite widget if restaurant has been unfavorite', async () => {
    await createButtonPresenter({
      id: 1,
    });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to remove favorite from list favorite', async () => {
    await createButtonPresenter({
      id: 1,
    });
    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoritedbRestaurant.getALLRestaurant())
      .toEqual([]);
  });

  it('should not throw error if the unfavorite restaurant not in list', async () => {
    await createButtonPresenter({
      id: 1,
    });

    await FavoritedbRestaurant.deleteRestaurant('rqdv5juczeskfw1e867');
    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));
    expect(await FavoritedbRestaurant.getALLRestaurant())
      .toEqual([]);
  });
});
