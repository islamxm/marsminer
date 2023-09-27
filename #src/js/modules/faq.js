const faq = () => {
  const items = document.querySelectorAll('.servFaq__body_item');

  if(items?.length > 0) {
    items.forEach(i => {
      const body = i?.querySelector('.servFaq__body_item_body')
      const trigger = i?.querySelector('.servFaq__body_item_head');

      if(trigger && body) {
        trigger.addEventListener('click', (e) => {
          i.classList.toggle('active') 
          
          if(i?.classList?.contains('active')) {
            body.setAttribute('style', `height: ${body.scrollHeight}px`)
          } else {
            body.removeAttribute('style')
          }
        })
      }
    })
  }
}

export default faq;