const STOREGE_KEY = 'feedback-form-state';

let obj = JSON.parse(localStorage.getItem(STOREGE_KEY)) || {};
const formElem = document.querySelector('.feedback-form');
formElem.addEventListener('input', onInput);
formElem.addEventListener('submit', onSubmit);
document.addEventListener('DOMContentLoaded', renderPage);
function onInput(e) {
  const value = e.target.value;
  const name = e.target.name;

  obj[name] = value;

  localStorage.setItem(STOREGE_KEY, JSON.stringify(obj)).trim();
}

function onSubmit(e) {
  e.preventDefault();
  const emailValue = e.target.elements.email.value;

  const messageValue = e.target.elements.message.value;

  if (!emailValue || !messageValue) return alert('zapovnu obov*jazkove pole');
  console.log(obj);
  obj = {};
  localStorage.removeItem(STOREGE_KEY);
  e.target.reset();
}

function renderPage() {
  formElem.elements.email.value = obj.email || '';
  formElem.elements.message.value = obj.message || '';
}
