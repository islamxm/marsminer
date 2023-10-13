const phoneMask = () => {
    if(IMask) {
        IMask(
            document.getElementById('phone-mask'),
            {
              mask: '+{7}(000)000-00-00'
            }
          )
    }
}

export default phoneMask;