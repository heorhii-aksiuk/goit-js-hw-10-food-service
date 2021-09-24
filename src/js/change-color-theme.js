import refs from './refs';
const { checkboxEl, listEl, bodyEl } = refs;

const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = theme;

export default function changeColorTheme() {
  if (checkboxEl.checked) {
    bodyEl.classList.add(DARK);
    bodyEl.classList.remove(LIGHT);
  } else {
    bodyEl.classList.add(LIGHT);
    bodyEl.classList.remove(DARK);
  }
}
