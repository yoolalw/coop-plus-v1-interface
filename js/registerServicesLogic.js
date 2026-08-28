const idUser = localStorage.getItem("idSession")
const tokenSession = localStorage.getItem("tokenSession")
const buttonCadastrarServico = document.getElementById("buttonCadastrarServico")

buttonCadastrarServico.addEventListener("click", async (e) => {
    e.preventDefault()

    const nomeServico = document.getElementById("nomeServico").value
    const tipoServico = document.getElementById("tipoServico").value
    const descricaoServico = document.getElementById("descricaoServico").value
    const valorServico = document.getElementById("valorServico").value
    const metodosContato = document.getElementById("metodosContato").value


    async function FetchTheApi() {
        const objectJson = {
            "nomeServico": nomeServico,
            "tipoServico": tipoServico,
            "descricaoServico": descricaoServico,
            "valorServico": valorServico,
            "metodosContato": [metodosContato],
            "employee": {
                "idUser": Number(idUser)
            }
        }

        console.log(objectJson)

        try {
            const response = await fetch("http://localhost:8080/services/newService", {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${tokenSession}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(objectJson)
            })

            if (!response.ok) {
                throw new Error("Ocorreu um erro durante a requisição -> ", response.status)
            }

            console.log(response.status)
        } catch (error) {
            console.error("Ocorreu um erro ao tentar estabelecer uma conexão")
            throw error
        }
    }
    FetchTheApi()
})