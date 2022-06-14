import APiENDPOINT from '../globals/api_endpoint';

class restaurantdbSource {
  static async home() {
    const response = await fetch(APiENDPOINT.LIST);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(APiENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchRestaurant() {
    const response = await fetch(APiENDPOINT.SEARCH);
    return response.json();
  }

  static async addReviewRestaurant(review) {
    const response = await fetch(APiENDPOINT.NEW_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
    const responseJson = await response.json();
    return responseJson;
  }
}

export default restaurantdbSource;
