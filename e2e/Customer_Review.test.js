/* eslint-disable no-undef */
const assert = require('assert');

Feature('Customer Review');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('viewing form review', async ({ I }) => {
  // Memilih salah satu restaurant. Disini diambil restaurant pertama
  I.seeElement('.restaurant-item__content a');
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Mengklik restaurant tersebut
  I.click(firstRestaurant);

  // Mengecek apakah terdapat form review
  I.seeElement('#reviewForm');

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitle);
});

Scenario('viewing customer reviews', async ({ I }) => {
  // Memilih salah satu restaurant. Disini diambil restaurant pertama
  I.seeElement('.restaurant-item__content a');
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Mengklik restaurant tersebut
  I.click(firstRestaurant);

  I.seeElement('.restaurant__review');

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitle);
});

Scenario('adding a customer review', async ({ I }) => {
  // Memilih salah satu restaurant. Disini diambil restaurant pertama
  I.seeElement('.restaurant-item__content a');
  const firstRestaurant = locate('.restaurant-item__content a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // Mengklik restaurant tersebut
  I.click(firstRestaurant);

  // Mengisi formulir review
  I.seeElement('#name');
  I.fillField('#name', 'Delphia Aryana');

  I.seeElement('#review');
  I.fillField('#review', 'Recommended!');

  // Mengirim formulir review
  I.seeElement('.submit');
  I.click('.submit');

  // Menunggu beberapa saat untuk memastikan review telah dikirim
  I.wait(2);

  // Verifikasi apakah review muncul di halaman
  I.see('Delphia Aryana');
  I.see('Recommended!');

  assert.strictEqual(firstRestaurantTitle, firstRestaurantTitle);
});
