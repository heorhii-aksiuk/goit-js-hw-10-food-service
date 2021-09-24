import refs from './js/refs';
import { setUserTheme } from './js/change-theme';
import { changeTheme } from './js/change-theme';
const { checkboxEl, listEl, bodyEl } = refs;

setUserTheme();
checkboxEl.addEventListener('change', changeTheme);
