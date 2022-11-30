(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open-video]'),
    closeModalBtn: document.querySelector('[data-modal-close-video]'),
    modal: document.querySelector('[data-modal-video]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
  window.addEventListener('click', function (e) {
    if (!refs.modal.classList.contains('is-hidden') && e.target == refs.modal) {
      refs.modal.classList.add('is-hidden');
    }
  });
})();
