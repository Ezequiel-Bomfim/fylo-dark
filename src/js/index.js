const button = document.getElementById('btn-get-started')
const input = document.getElementById('input')

button.addEventListener('click', (e) =>{
    e.preventDefault();

    if(input.value.trim() === ""){
        input.classList.add('invalido')
        input.classList.remove('valido')
    }else{
        input.classList.add('valido')
        input.classList.remove('invalido')
    }
})

input.addEventListener('input', () =>{
    if(input.value.trim() !== ""){
        input.classList.add('valido')
        input.classList.remove('invalido')
    }else{
        input.classList.add('invalido')
        input.classList.remove('valido')
    }
})