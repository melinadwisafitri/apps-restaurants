const itFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return restaurant has been add', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(1)).toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2)).toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3)).toEqual(undefined);
  });

  it('should refuse being added if not correct property', async () => {
    favoriteRestaurant.putRestaurant({ aProperty: 'property' });
    expect(await favoriteRestaurant.getALLRestaurant()).toEqual([]);
  });

  it('return all restaurant of restaurant added', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });

    expect(await favoriteRestaurant.getALLRestaurant()).toEqual([
      { id: 1 }, { id: 2 },
    ]);
  });

  it('should remove favorite', async () => {
    favoriteRestaurant.putRestaurant({
      id: 1,
    });
    favoriteRestaurant.putRestaurant({
      id: 2,
    });
    favoriteRestaurant.putRestaurant({
      id: 3,
    });

    await favoriteRestaurant.deleteRestaurant(1);
    expect(await favoriteRestaurant.getALLRestaurant()).toEqual([
      { id: 2 }, { id: 3 },
    ]);
  });

  it('should handle request to remove even thought not added', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(4);
    expect(await favoriteRestaurant.getALLRestaurant()).toEqual([
      { id: 1 }, { id: 2 }, { id: 3 },
    ]);
  });
};

export default itFavoriteRestaurantModel;
