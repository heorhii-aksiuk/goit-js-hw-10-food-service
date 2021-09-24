import refs from './refs';
import { setUserTheme } from './change-theme';
import { changeTheme } from './change-theme';
const { checkboxEl, listEl, bodyEl } = refs;

setUserTheme();
checkboxEl.addEventListener('change', changeTheme);
