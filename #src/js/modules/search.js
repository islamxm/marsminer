const searchToggle = () => {
  const searchBtn = document.querySelector('.header__catalog_search_btn');
  const input = document.querySelector('.header__catalog_search_input');
  const panel = document.querySelector('.header__catalog_search');
  const logo = document.querySelector('.header__logo');
  const header = document.querySelector('.header');

  if(searchBtn && panel) {
    searchBtn.addEventListener('click', () => {
      panel.classList.toggle('active')
      header.classList.toggle('search-show')
      if(panel.classList.contains('active')) {
        logo.classList.add('hide')
      } else {
        logo.classList.remove('hide')
      }
    })

    
  }
}

export default searchToggle;