const createfavoriteButtonTemplate = () => `
  <button aria-label="favorite this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
  `;

const createUnfavoriteButtonTemplate = () => `
<button aria-label="unfavorite this restaurant" id="likeButton" class="like">
  <i class="fa fa-heart" aria-hidden="true"></i>
</button>
  `;

const createReviewPage = (review) => `
  <div class="card-detail__customer-review">
  <div class="card-detail__content">
        <h3 class="review_name">${review.name}</h3>
        <p class="review_date">${review.date}</p>
        <hr>
        <p class="text_review">${review.review}</p>
    </div>
  </div>
`;

export {
  createfavoriteButtonTemplate,
  createUnfavoriteButtonTemplate,
  createReviewPage,
};
