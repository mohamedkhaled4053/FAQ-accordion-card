let questions = document.querySelectorAll('.question')

questions.forEach(i=>{
    i.addEventListener('click',()=>{
        i.parentElement.classList.toggle('active')
    })
})