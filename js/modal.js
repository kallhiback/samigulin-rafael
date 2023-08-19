// MODAL

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('#btn-get')
const closeModalButton = document.querySelector('.modal_close')

const openModal = () => {
    modal.style.display = 'block'
    document.body.style.overflow = 'hidden'
}

const closeModal = () => {
    modal.style.display = 'none'
    document.body.style.overflow = ''
}

modalTrigger.onclick = () => openModal()
closeModalButton.onclick = () => closeModal()
modal.onclick = (event) => {
    if (event.target === modal) closeModal()
}

let modalShown = false;

function handleClick() {
    if (!modalShown) {
        window.addEventListener("scroll", function () {
            if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
                modalShown = true
                openModal()
                window.removeEventListener("scroll", arguments.callee)
            }
        })
    }
}

handleClick()

setTimeout(() => {openModal()},10000)
