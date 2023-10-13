const header = () => {
  const header = document.querySelector('.header')
  if(header) {
    document.addEventListener('scroll', () => {
      if(document.documentElement.scrollTop > 10) {
        header.classList.add('active')
      } else {
        header.classList.remove('active')
      }
    })
  }
}

header()

export default header;