const loginSubmitButton = document.getElementById('loginSubmitButton')
loginSubmitButton.addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const jsonBody ={
        email: email,
        senha: senha
    }

    async function loginPost() {
        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonBodys)
            })

        } catch (error) {
            console.error("Ocorreu um erro ao tentar realizar a conexão -> ", error)
            throw error
        }
    }
})