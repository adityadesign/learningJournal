const viewMore = document.querySelector('.view')
const hide = document.querySelectorAll('.hidden')

viewMore.addEventListener('click',()=>{
    for(let i=0; i<hide.length; i++){
        hide[i].classList.toggle('hidden')
    }
    viewMore.classList.toggle('hidden')
})