const containerDemandasAtuais = document.getElementById('containerDemandasAtuais')
const containerPrincipaisUsuarios = document.getElementById('containerPrincipaisUsuarios')
const urlFetchGetDemands = "http://localhost:8080/demands"
const urlFetchGetTheMostAvaliablesUsers = "http://localhost:8080/clients"

const tokenSession = localStorage.getItem('token')
async function fetchDemandas() {
    try {
        const response = await fetch(urlFetchGetDemands, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenSession}`
            }
        })
        if (!response.ok) {
            throw new Error("Ocorreu um erro durante a requisição: ", response.status)
        }

        console.log(response.status)
        const data = await response.json()
        data.forEach((d) => {
            containerDemandasAtuais.insertAdjacentHTML('beforeend', `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-light hover:border-neon transition">
                    <a href="detailsDemand?id=${d.idDemand}">
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-light text-neon">${d.tipoDemanda}</span>
                                <span class="text-xs font-semibold px-2.5 py-1 rounded-full status-open">${d.nivelPrioridade}</span>
                            </div>
                            <p class="font-medium text-sm text-dark">${d.nomeDemanda}</p>
                            <p class="text-xs text-gray mt-0.5">Local &middot; publicada por ${d.client.nomeCompleto}</p>
                        </div>
                    </a> 
                </div>
                
                `)
        })

    } catch (error) {
        console.error("Ocorreu um erro ao tentar estabelecer uma conexão com o servidor -> ", error)
        throw error
    }


}
fetchDemandas()