const containerEmployee = document.getElementById('containerEmployeeRegister')
const containerChoice = document.getElementById('containerChoice')
const containerClient = document.getElementById('containerClientRegister')

containerEmployee.style.visibility = "hidden"
containerClient.style.visibility = "hidden"

choiceEmployee.addEventListener('click', (e) => {
    e.preventDefault()
    choiceRegisterNewEmployee()
})

choiceClient.addEventListener('click', (e) => {
    e.preventDefault()
    choiceRegisterNewClient()
})

function choiceRegisterNewClient() {
    containerChoice.style.display = "none"
    containerEmployee.style.visibility = "visible"

    const form = document.getElementById('formEmployee')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        const object = {
            nomeCompleto: formData.get('empNomeCompleto'),
            email: formData.get('empEmail'),
            telefone: formData.get('empTelefone'),
            cnpj: formData.get('empCnpj'),
            tipoServico: formData.get('empTipoServico'),
            nomeEmpresa: formData.get('empNomeEmpresa'),
            senha: formData.get('empSenha'),
            avaliacao: 0
        }

        try {
            const response = await fetch('http://localhost:8080/auth/newEmployee', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            if (!response.ok) {
                console.error("Ocorreu um erro ao tentar se cadastrar, tente novamente.", response.status)
                return
            }

        } catch (error) {
            console.log("Ocorreu um erro durante a conexão do servidor! ", error)
            throw error
        }

    })
}


function choiceRegisterNewEmployee() {
    containerChoice.style.display = "none"
    containerEmployee.style.visibility = "visible"

    const form = document.getElementById('formEmployee')

    form.addEventListener('submit', async (e) => {
        e.preventDefault()

        const formData = new FormData(form)

        const object = {
            nomeCompleto: formData.get('empNomeCompleto'),
            email: formData.get('empEmail'),
            telefone: formData.get('empTelefone'),
            cnpj: formData.get('empCnpj'),
            tipoServico: formData.get('empTipoServico'),
            nomeEmpresa: formData.get('empNomeEmpresa'),
            senha: formData.get('empSenha'),
            avaliacao: 0
        }

        try {
            const response = await fetch('http://localhost:8080/auth/newEmployee', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(object)
            })
            if (!response.ok) {
                console.error("Ocorreu um erro ao tentar se cadastrar, tente novamente.", response.status)
                return
            }

        } catch (error) {
            console.log("Ocorreu um erro durante a conexão do servidor! ", error)
            throw error
        }

    })
}