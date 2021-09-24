import refs from './refs';
const { checkboxEl, bodyEl } = refs;

export const theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const { LIGHT, DARK } = theme;

export function changeTheme() {
  if (checkboxEl.checked) {
    bodyEl.classList.add(DARK);
    bodyEl.classList.remove(LIGHT);
    localStorage.setItem('theme', DARK);
  } else {
    bodyEl.classList.add(LIGHT);
    bodyEl.classList.remove(DARK);
    localStorage.setItem('theme', LIGHT);
  }
}

export function setUserTheme() {
  const userTheme = localStorage.getItem('theme');
  bodyEl.classList.add(userTheme);
  if (userTheme === DARK) checkboxEl.checked = true;
}
