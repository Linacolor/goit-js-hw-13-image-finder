import galleryMarkup from '../templates/gallery.hbs';
import refs from './refs';
import ServiceAPI from './apiService';
import onImgClick from './light-box';

const { inputEl, galleryEl, buttonEl } = refs;
const serviceAPI = new ServiceAPI();

function clearContainer() {
  galleryEl.innerHTML = '';
  buttonEl.classList.add('is-hidden');
}

function createMarkup(images) {
  const imageCard = galleryMarkup(images);
  galleryEl.insertAdjacentHTML('beforeend', imageCard);

  if (images.length < 12) {
    buttonEl.classList.add('is-hidden');
  } else {
    buttonEl.classList.remove('is-hidden');
  }
}

async function fetch() {
  try {
    const data = await serviceAPI.fetchCardImage();
    createMarkup(data);
  } catch (error) {
    console.log(error);
  }
}

function onLoadMoreBtn() {
  fetch();
  setTimeout(() => {
    buttonEl.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, 1000);
}

function onSearchBtn(e) {
  e.preventDefault();
  serviceAPI.query = e.target.elements.query.value;

  if (!serviceAPI.query) {
    clearContainer();
    return;
  }

  clearContainer();
  fetch();
}

inputEl.addEventListener('submit', onSearchBtn);
buttonEl.addEventListener('click', onLoadMoreBtn);
galleryEl.addEventListener('click', onImgClick);
