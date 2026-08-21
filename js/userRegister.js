const containerChoice = document.getElementById('containerChoice')
const choiceEmployee = document.getElementById('choiceEmployee')
const choiceClient = document.getElementById('choiceClient')

containerChoice.style.display = 'none'

choiceEmployee.addEventListener('click', (e) => {
    e.preventDefault()

    containerChoice.style.display = 'none'

    const form = document.getElementById('formEmployee')
    const formData = new FormData(form)

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
    })

    try{

        fetch('http://localhost:8080/newEmployee', {
            method: 'POST',
            body: JSON.stringify(object)
        })

    }catch(e){
        console.error('Ocorreu um erro durante a tentativa de requisição! \n Erro obtido: ' + e)
    }


})