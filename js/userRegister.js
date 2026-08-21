const containerChoice = document.getElementById('containerChoice')
const choiceEmployee = document.getElementById('choiceEmployee')
const choiceClient = document.getElementById('choiceClient')


    containerChoice.style.display = 'none'


choiceEmployee.addEventListener('click', (e) => {
    e.preventDefault()

    containerChoice.style.display = 'none'

})
