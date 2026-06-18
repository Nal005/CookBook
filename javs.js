
const grid = document.getElementById("grid");

receitas.forEach(receita => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.addEventListener("click", () => {
    window.location.href = `receita.html?titulo=${encodeURIComponent(receita.titulo)}`;
    });
    card.innerHTML = `
        <img src="${receita.imagem}" alt="${receita.titulo}">
        <h3>${receita.titulo}</h3>
        <p>${receita.descricao}</p>
        <button>Ver mais</button>
    `;

    grid.appendChild(card);
});