const btnSubmit = document.getElementById('btn-submit');
const toast = document.getElementById('toast');

btnSubmit.addEventListener('click', () => {
  toast.classList.add('open');

  setTimeout(() => {
    toast.classList.remove('open');
  }, 3000);
});
