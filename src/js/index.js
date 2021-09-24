import productsMarkup from '../templates/produrcts.handlebars';
import data from '../menu.json';
import refs from './refs';
import { setUserTheme } from './theme';
import { changeTheme } from './theme';
const { checkboxEl, listEl } = refs;

setUserTheme();
checkboxEl.addEventListener('change', changeTheme);

listEl.insertAdjacentHTML('afterbegin', productsMarkup(data));
