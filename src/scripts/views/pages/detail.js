import restaurantdbSource from '../../data/theRestaurantdb_source';
import UrlParser from '../../routes/url-parser';
import FavoritesInitiator from '../../utils/favorite_button_initiator';
import { createReviewPage } from '../template/template-creator';

const detail = {
  async render() {
    return `
    <a href="#content" class="skip_content">Menuju ke Kontent</a>
    <main>
    <detail-page-elements></detail-page-elements>
    <div id="favoriteButtonContainer"></div>
    <div class="card-detail__">
      <h3>Customer Review</h3>
      <button id="btn_review">+ review</button>
      <hr>
      <div class="card-detail" id="customerReview"></div>
    </div>
    <main>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('detail-page-elements');
    const url = UrlParser.parseActiveWithoutCombiner();
    const restaurants = await restaurantdbSource.detailRestaurant(url.id);
    const render = (data) => {
      restaurantsContainer.detailResto = data;
    };

    const buttonAddReview = document.querySelector('#btn_review');
    buttonAddReview.addEventListener('click', () => {
      document.querySelector('.popup').style.display = 'block';
      document.querySelector('.close_button').addEventListener('click', () => {
        document.querySelector('.popup').style.display = 'none';
      });
    });

    if (restaurants.error === false) {
      const dataresto = restaurants.restaurant;
      render(dataresto);

      FavoritesInitiator.init({
        favoriteButtonContainer: document.querySelector('#favoriteButtonContainer'),
        dataresto: {
          id: dataresto.id,
          name: dataresto.name,
          rating: dataresto.rating,
          pictureId: dataresto.pictureId,
          description: dataresto.description,
          city: dataresto.city,
        },
      });

      const reviewContentConteiner = document.querySelector('#customerReview');
      let reviewData = dataresto.customerReviews;
      reviewData.forEach((review) => {
        reviewContentConteiner.innerHTML += createReviewPage(review);
      });

      const inputName = document.querySelector('#name_reviewer');
      const inputReview = document.querySelector('#review_new');
      const buttonSendReview = document.querySelector('#send_review');
      buttonSendReview.addEventListener('click', async () => {
        const reviews = {
          id: `${dataresto.id}`,
          name: inputName.value,
          review: inputReview.value,
        };
        const addReview = await restaurantdbSource.addReviewRestaurant(reviews);
        reviewData = await addReview.customerReviews;
        reviewData.forEach((review) => {
          reviewContentConteiner.innerHTML += createReviewPage(review);
          document.querySelector('#name_reviewer').value = '';
          document.querySelector('#review_new').value = '';
          document.querySelector('.popup').style.display = 'none';
        });
      });
    }
  },
};

export default detail;
