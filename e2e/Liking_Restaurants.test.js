const assert = require('assert');

/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

// Membuka halaman utama
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#restaurant');

  I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking a restaurant', async ({ I }) => {
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
});
