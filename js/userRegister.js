const choiceClient = document.getElementById('choiceClient')
const choiceEmployee = document.getElementById('choiceEmployee')
const choicesContainer = document.getElementById("containerChoice")

const containerEmployeeRegister = document.querySelector('#containerEmployeeRegister')
const containerClientRegister = document.querySelector('#containerClientRegister')

containerClientRegister.style.display = "none"
containerEmployeeRegister.style.display = "none"

const formClient = document.getElementById('formClient')
const formEmployee = document.getElementById('formEmployee')

const clientButtomRegistrar = document.getElementById('clientButtonRegistrar')
const empButtonRegistrar = document.getElementById('empButtonRegistrar')


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

    const clientNomeCompleto = document.getElementById('clientNomeCompleto')
    const clientEmail = document.getElementById('clientEmail')
    const clientTelefone = document.getElementById('clientTelefone')
    const clientEndereco = document.getElementById('clientEndereco')
    const clientCPF = document.getElementById('clientCPF')
    const clientSenha = document.getElementById('clientSenha')

    clientButtomRegistrar.addEventListener('click', async (e) => {
        e.preventDefault()
        
        const bodyJson = {
            nomeCompleto: clientNomeCompleto.value,
            email: clientEmail.value,
            telefone: clientTelefone.value,
            avaliacoes: 0,
            role: "USER",
            endereco: clientEndereco.value,
            cpf: clientCPF.value,
            senha: clientSenha.value
        }
        const response = await fetch('http://localhost:8080/auth/newClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyJson)
        })
        if (!response.ok) {
            console.log(bodyJson)
            throw new Error('Ocorreu um erro ao realizar o fetch! ', response.status)
        }
        console.log(response.status)
            window.location.href = "loginPage.html"
    })
}

// ----------------------------------

async function registerEmployee() {
    containerEmployeeRegister.style.display = "block"

    const empNomeCompleto = document.getElementById('empNomeCompleto')
    const empEmail = document.getElementById('empEmail')
    const empTelefone = document.getElementById("empTelefone")
    const empCnpj = document.getElementById('empCnpj')
    const empTipoServico = document.getElementById('empTipoServico')
    const empNomeEmpresa = document.getElementById('empNomeEmpresa')
    const empSenha = document.getElementById('empSenha')

    empButtonRegistrar.addEventListener('click', async (e) => {
        e.preventDefault()
        const bodyJson = {
            nomeCompleto: empNomeCompleto.value,
            email: empEmail.value,
            telefone: empTelefone.value,
            descricao: "",
            avaliacoes: 0,
            role: "EMPLOYEE",
            cnpj: empCnpj.value,
            tipoServico: empTipoServico.value,
            nomeEmpresa: empNomeEmpresa.value,
            senha: empSenha.value,
            foto_perfil: ""
        }


        const response = await fetch('http://localhost:8080/auth/newEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyJson)
        })

        if (!response.ok) {
            console.log(bodyJson)
            throw new Error('Ocorreu um erro ao realizar o fetch! ', response.status)
        }
        console.log(response.status)
        window.location.href = "loginPage.html"
    })
}
