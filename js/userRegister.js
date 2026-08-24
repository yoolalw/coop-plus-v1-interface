const choiceClient = document.getElementById('choiceClient')
const choiceEmployee = document.getElementById('choiceEmployee')
const choicesContainer = document.getElementById("containerChoice")

const containerEmployeeRegister = document.querySelector('#containerEmployeeRegister')
const containerClientRegister = document.querySelector('#containerClientRegister')

containerClientRegister.style.display = "none"
containerEmployeeRegister.style.display = "none"

const formClient = document.getElementById('formClient')
const formEmployee = document.getElementById('formEmployee')


choiceEmployee.addEventListener('click', (e) => {
    e.preventDefault()
    choicesContainer.style.display = "none"
    registerEmployee()
})


choiceClient.addEventListener('click', (e) => {
    e.preventDefault()
    choicesContainer.style.display = "none"
    registerClient()
})


// ------------------------------

async function registerClient() {
    
    containerClientRegister.style.display = "block"

    const formData = new FormData(formEmployee)
    const formBodyJson = {
        nomeCompleto: formData.get('clientNomeCompleto'),
        email: formData.get('clientEmail'),
        telefone: formData.get('clientTelefone'),
        endereco: formData.get('clientEndereco'),
        cpf: formData.get('clientCPF'),
        senha: formData.get('clientSenha')
    }
    formClient.addEventListener('submit', async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/auth/n', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formBodyJson)
        })
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao realizar o fetch! ', response.status)
        }
        console.log(response.status)
        window.location.href = "homePage.html"
    })
}

// ----------------------------------

async function registerEmployee() {

    containerEmployeeRegister.style.display = "block"

    const formData = new FormData(formEmployee)
    const formBodyJson = {
        nomeCompleto: formData.get('empNomeCompleto'),
        email: formData.get('empEmail'),
        telefone: formData.get('empTelefone'),
        cnpj: formData.get('empCnpj'),
        tipoServico: formData.get('empTipoServico'),
        nomeEmpresa: formData.get('empNomeEmpresa'),
        senha: formData.get('empSenha')
    }
    formEmployee.addEventListener('submit', async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8080/auth/newEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formBodyJson)
        })
        if (!response.ok) {
            throw new Error('Ocorreu um erro ao realizar o fetch! ', response.status)
        }
        console.log(response.status)
        window.location.href = "homePage.html"
    })
}