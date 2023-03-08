const btnRegister = document.querySelector('.js-register')
const modal = document.querySelector('.js-modal')
const modalLayout = document.querySelector('.modal__layout')

    btnRegister.addEventListener('click', function(){
        modal.classList.add('open')
    })
    modalLayout .addEventListener('click', function(){
        modal.classList.remove('open')
    })



const btnClicks = document.querySelectorAll('.home-product-react-like')

for(const btnClick of btnClicks){
    btnClick.addEventListener('click',function(){
        modal.classList.add('.home-product-react-like--liked')
    })
 }