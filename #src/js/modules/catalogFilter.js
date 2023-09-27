const catalogFilter = () => {
  const items = document.querySelectorAll('.catalogBody__side_item')

  if(items?.length > 0) {
    items.forEach(i => {
      const head = i?.querySelector('.catalogBody__side_item_head')
      const body = i?.querySelector('.catalogBody__side_item_body')

      head.addEventListener('click', () => {
        i?.classList.toggle('active')
      })
    })
  }
}

export default catalogFilter;