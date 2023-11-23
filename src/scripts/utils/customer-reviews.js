import UrlParser from '../routes/url-parser';
import TheRestaurantDbSource from '../data/therestaurantdb-source';

const submitReview = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const inputName = document.getElementById('name');
  const inputReview = document.getElementById('review');
  const reviewContainer = document.querySelector('.restaurant__review');

  // Validasi input
  if (!url.id || !inputName || !inputReview) {
    console.error('ID, nama, dan review harus diisi.');
    return;
  }

  const data = {
    id: url.id,
    name: inputName.value,
    review: inputReview.value,
  };

  const date = new Date().toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const newReview = `
    <div class="customer-review">
      <p><strong>${data.name}</strong></p>
      <p>${data.review}</p>
      <p style="color: grey"><em>${date}</em></p>
      <hr>
    </div>
  `;

  await TheRestaurantDbSource.postReview(data);
  reviewContainer.innerHTML += newReview;
  inputName.value = '';
  inputReview.value = '';
};

export default submitReview;
