const envelope = document.querySelector('.envelope');
const message = document.querySelector('.message');

envelope.addEventListener('click', () => {
  message.classList.toggle('hidden'); // Alterna la visibilidad del mensaje
});