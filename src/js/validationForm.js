const checkData = () => {
  const email = document.querySelector('#email');
  const message = document.querySelector('#message');
  const name = document.querySelector('#name');
  const lenghtEmail = email.value.length;
  const lenghtMessage = message.value.length;
  const lenghtName = name.value.length;
  const error = document.createElement('div');
  const form = document.querySelector('.start-project-content__form');

  error.classList.add('error');

  if (lenghtEmail === 0 || lenghtMessage === 0 || lenghtName === 0) {
    if (document.querySelector('.error')) document.querySelector('.error').remove();
    error.textContent = 'Enter valid data';
    form.appendChild(error);
  }
}
export default checkData;