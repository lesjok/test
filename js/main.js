$(function() {
  const btnFirst = document.querySelector('.btn-first');
  const btnSecond = document.querySelector('.btn-second');
  const block = document.querySelector('.block-1');
  const blockLeft = document.getElementById('block-left');
  const blockCenter = document.getElementById('block-center');

  alert('Привет мир!');

  btnFirst.addEventListener('click', () => {
    block.classList.toggle('hidden');
  })

  btnSecond.addEventListener('click', () => {
    blockLeft.classList.toggle('translate-left');
    blockCenter.classList.toggle('translate-center');
  })
})

