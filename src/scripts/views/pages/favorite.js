import FavoritedbRestaurant from '../../data/favorite-idbs';

const favorites = {
  async render() {
    return `
    <main>
      <section class="container_list">
          <list-resto class="list-resto"></list-resto>
      </section>
      <section class="favorite_item__not_found">
        
      </section>
    </main
    `;
  },

  async afterRender() {
    const restaurant = await FavoritedbRestaurant.getALLRestaurant();
    const restaurantsContainer = document.querySelector('list-resto');
    const render = (data) => {
      restaurantsContainer.dataResto = data;
    };

    if (restaurant.length > 0) {
      render(restaurant);
    } else {
      const emptyContainer = document.querySelector('.favorite_item__not_found');
      emptyContainer.innerHTML = '<h3>You don\'t have any item favorite in here</h3>';
    }

    // render(restaurant);
  },
};

export default favorites;
