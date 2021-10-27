import formMarkup from '../templates/form.hbs';
import refs from './refs';

const { formEl } = refs;
// console.log(formEl);

formEl.insertAdjacentHTML('beforeend', formMarkup());
