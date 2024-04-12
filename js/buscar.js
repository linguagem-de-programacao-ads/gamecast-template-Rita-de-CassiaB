async function buscar(){
    console.log("Passei aqui")

const resposta = await fetch("https://660f44b3356b87a55c510e2a.mockapi.io/agendas")
const respostaDadosAgenda = await resposta.json()

console.log("Resposta:", respostaDadosAgenda);

const cards = document.getElementById("cards_games");

cards.innerHTML = respostaDadosAgenda.map((itemAgenda) => {
   return "TESTE"

});

}
console.log("antes de buscar")
buscar();
console.log("depois de buscar")