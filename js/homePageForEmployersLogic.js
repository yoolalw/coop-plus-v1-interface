const containerDemandasAtuais = document.getElementById('containerDemandasAtuais')
const containerPrincipaisUsuarios = document.getElementById('containerPrincipalUsuarios')
const urlFetchGetDemands = "http://localhost:8080/demands"
const urlFetchGetTheMostAvaliablesUsers = "http://localhost:8080/client"
const inputBuscarDemanda = document.getElementById("inputBuscarDemanda")
const buttonBuscarDemanda = document.getElementById("buttonBuscarDemanda")

const tokenSession = localStorage.getItem('tokenSession')
console.log(tokenSession)
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
        mostrarDemandas(data)
        buttonBuscarDemanda.addEventListener("click", () => {
            console.log("buscou")
            const busca = inputBuscarDemanda.value.toLowerCase();
            const demandasFiltradas = data.filter(d => d.nomeDemanda.toLowerCase().includes(busca))
            mostrarDemandas(demandasFiltradas)

        })
    } catch (error) {
        console.error("Ocorreu um erro ao tentar estabelecer uma conexão com o servidor -> ", error)
        throw error
    }
}

async function fetchClients() {
    try {
        const response = await fetch(urlFetchGetTheMostAvaliablesUsers, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${tokenSession}`
            }
        })
        if (!response.ok) {
            throw new Error("Ocorreu um erro durante a requisição -> ", response.status)
        }
        const data = await response.json()
        data.forEach((u) => {
            containerPrincipaisUsuarios.insertAdjacentHTML('beforeend', `
                    <div class="flex items-center gap-3 p-3 rounded-2xl hover:bg-off transition">
                        <div
                            class="h-11 w-11 rounded-full bg-light text-neon font-display font-semibold flex items-center justify-center shrink-0">
                            <img src="${u.foto_perfil}"></div>
                        <div class="flex-1 min-w-0">
                            <p class="font-medium text-sm text-dark truncate">${u.nomeCompleto}</p>
                            <p class="text-xs text-gray truncate">${u.descricao}</p>
                        </div>
                        <div class="flex items-center gap-1 text-xs font-semibold text-dark shrink-0">
                            <span class="star">★</span> ${u.avaliacoes}
                        </div>
                    </div>
                `)
        })
    } catch (error) {
        console.error('Ocorreu um erro ao tentar estabelecer uma conexão com o servidor -> ', error)
        throw error
    }
}

fetchDemandas()
fetchClients()

function mostrarDemandas(demandasLista){ 
    containerDemandasAtuais.innerHTML = ""

   demandasLista.forEach((d) => {
            containerDemandasAtuais.insertAdjacentHTML('beforeend', `
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl border border-light hover:border-neon transition">
                    <a href="detailsDemand?id=${d.idDemand}">
                        <div class="min-w-0">
                            <div class="flex items-center gap-2 mb-1">
                                <span class="text-xs font-semibold px-2.5 py-1 rounded-full bg-light text-neon">${d.tipoDemanda}</span>
                                <span class="text-xs font-semibold px-2.5 py-1 rounded-full status-open">${d.nivelPrioridade}</span>
                            </div>
                            <p class="font-medium text-sm text-dark">${d.nomeDemanda}</p>
                            <p class="text-xs text-gray mt-0.5"> publicada por ${d.client.nomeCompleto}</p>
                        </div>
                    </a> 
                </div>
                `)        
        }) 
}