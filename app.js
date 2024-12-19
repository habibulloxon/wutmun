const openBtn = document.getElementById('open');
const closeBtn = document.getElementById('close');
const sidebar = document.querySelector('.sidebar');
const sectoins = [...document.querySelectorAll('section')];

openBtn.addEventListener('click', () => {
  sidebar.setAttribute
  sidebar.classList.add('show-sidebar');
  sectoins.forEach(item => item.classList.add('diactivate'));
})

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('show-sidebar');
  sectoins.forEach(item => item.classList.remove('diactivate'));
})
