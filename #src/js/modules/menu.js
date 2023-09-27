const menuToggle = () => {
  const btn = document.querySelector('.burger');
  const menu = document.querySelector('.menu')
  const close = document.querySelector('.menu__close')

  if(btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.add('active')
    })
  }

  if(menu && close) {
    close.addEventListener('click', () => {
      menu.classList.remove('active')
    })
  }
}

export default menuToggle;