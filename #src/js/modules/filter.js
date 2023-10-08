const filter = () => {
    const sidebar = document.querySelector('.catalogBody__side')
    const btn = document.querySelector('.catalogBody__action_btn')
    const closeBtn = document.querySelector('.catalogBody__side_close')

    if(sidebar && btn && closeBtn) {
        btn.addEventListener('click', () => {
            sidebar.classList.add('active')
        })
        closeBtn.addEventListener('click', () => {
            sidebar.classList.remove('active')
        })
    }
}

export default filter;