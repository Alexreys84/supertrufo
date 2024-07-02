// Array de cartas com URLs das imagens
const cartas = [
    { img: "img/super1.jpg" },{ img: "img/super2.jpg" },{ img: "img/super3.jpg" },
    { img: "img/super4.jpg" },{ img: "img/super5.jpg" },{ img: "img/super6.jpg" }, { img: "img/super7.jpg" },
    { img: "img/super8.jpg" },{ img: "img/super9.jpg" },{ img: "img/super10.jpg" },{ img: "img/super11.jpg" },
    { img: "img/super12.jpg" }, { img: "img/super13.jpg" }, { img: "img/super14.jpg" }, { img: "img/super15.jpg" },
];

// Função para sortear uma carta aleatória
function sortearCarta() {
    const indice = Math.floor(Math.random() * cartas.length);
    const carta = cartas[indice];

    // Atualiza o conteúdo da div com id "centro" com a carta sorteada
    const centroDiv = document.getElementById("centro");
    centroDiv.innerHTML = `
        <img src="${carta.img}" alt="Carta Sorteada" class="carta-img">
    `;
}

