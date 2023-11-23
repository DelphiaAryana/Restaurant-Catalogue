const assert = require('assert');

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Unliking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('unliking a restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
  I.amOnPage('/');

  // Memilih salah satu restaurant. Disini diambil restaurant pertama
  I.seeElement('.restaurant-item__content a');
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Mengklik restaurant tersebut
  I.click(firstRestaurant);

  // Menekan tombol menyukai
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Ke halaman favorite
  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');

  const likedRestaurantTitle = await I.grabTextFrom('.restaurant-item__content a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // Go back to the restaurant detail page
  I.click(locate('.restaurant-item__content a').first());

  // Unlike the restaurant
  I.seeElement('#likeButton');
  I.click('#likeButton');

  // Go to the favorite page and check if the unliked restaurant is not there
  I.amOnPage('/#/favorite');
  I.dontSeeElement(locate('.restaurant-item').withText(likedRestaurantTitle));
});
