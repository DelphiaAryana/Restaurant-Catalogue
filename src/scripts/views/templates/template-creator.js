import CONFIG from '../../globals/config';

const createMenuItemsTemplate = (items, category) => `
    <div class="menu-category">
      <h3>${category}</h3>
      <ul>
        ${items.map((item) => `<li>${item.name}</li>`).join('')}
      </ul>
    </div>
  `;

const createCustomerReviewsTemplate = (reviews) => {
  if (!reviews || reviews.length === 0) {
    return '<p>Tidak ada ulasan saat ini.</p>';
  }

  return reviews.map((review) => `
    <div class="customer-review">
      <p><strong>${review.name}</strong></p>
      <p>${review.review}</p>
      <p style="color: grey"><em>${review.date}</em></p>
      <hr>
    </div>
  `).join('');
};

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title" align="center">${restaurant.name}</h2>
  <img class="restaurant__poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" />
  <div class="restaurant__info"><br>
    <h3>Alamat</h3>
    <p>${restaurant.address}</p><br>
    <h3>Kota</h3>
    <p>${restaurant.city}</p><br>
    <h3>Deskripsi Tentang Restoran</h3>
    <p align="justify">${restaurant.description} minutes</p><br>
    <h3>Rating</h3>
    <p>${restaurant.rating}</p><br>
  </div>
  <h2 style="color: #4f7942">Menu</h2><br>
  <div class="restaurant__menu">
    ${createMenuItemsTemplate(restaurant.menus.foods, 'Foods')}<br>
    ${createMenuItemsTemplate(restaurant.menus.drinks, 'Drinks')}
  </div>
  <h2 style="color: red" align="center">Customer Review</h2>
  <div class="restaurant__review">
    ${createCustomerReviewsTemplate(restaurant.customerReviews)}
  </div><br><br>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
      <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
           data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}">
      <div class="restaurant-item__header__rating">
        <p>⭐️<span class="restaurant-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="restaurant-item__content">
      <h3><a href="./#/detail/${restaurant.id}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createCustomerReviewsTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
