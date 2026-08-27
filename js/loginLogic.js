const loginSubmitButton = document.getElementById('loginSubmitButton')
loginSubmitButton.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    async function loginPost() {
        const jsonBody = {
            email: email,
            senha: senha
        }

        console.log(jsonBody)

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jsonBody)
            })
            if (!response.ok) {
                throw new Error("Ocorreu um erro durante a requisição -> || Nome ou Senha inválidos -> ", response.status)
            }

            const data = await response.json()
            console.log(data)
            const tokenSession = data.token
            const idSession = data.id
            console.log(tokenSession)
            console.log(idSession)
            localStorage.setItem('tokenSession', tokenSession)
            localStorage.setItem('idSession', idSession)
            
            if(data.role === "EMPLOYEE"){
                setTimeout(() => {
                    window.location.href = "homePageForEmployers.html"
                }, 1400);
            }
            else if(data.role === "USER"){
                setTimeout(() => {
                    window.location.href = "homePageForClients.html"
                }, 1400);
            }
            
            console.log(response.status)

        } catch (error) {
            console.error("Ocorreu um erro ao tentar realizar a conexão -> ", error)
            throw error
        }
    }
    loginPost()
})

