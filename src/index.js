import refs from './js/refs';
import changeColorTheme from './js/change-color-theme';
const { checkboxEl, listEl, bodyEl } = refs;
console.log(checkboxEl);

checkboxEl.addEventListener('change', changeColorTheme);
