const openBtn = document.querySelector('#open-modal');
const dialog = document.querySelector('#contact-dialog');
const closeBtn = document.querySelector('#close-btn');

openBtn.addEventListener('click', () => dialog.showModal());
closeBtn.addEventListener('click', () => dialog.close());