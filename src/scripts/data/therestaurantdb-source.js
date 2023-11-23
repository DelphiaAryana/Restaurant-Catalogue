import API_ENDPOINT from '../globals/api-endpoint';

class TheRestaurantDbSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANTS);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async postReview(data) {
    try {
      const response = await fetch(API_ENDPOINT.REVIEW, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        return responseData;
      }
      const errorData = await response.json();
      console.error('Gagal mengirim review. Pesan:', errorData.message || 'Tidak ada pesan kesalahan yang diberikan.');
      throw new Error('Gagal mengirim review.');
    } catch (error) {
      console.error('Error:', error.message || 'Terjadi kesalahan tanpa pesan.');
      throw error;
    }
  }
}

export default TheRestaurantDbSource;
