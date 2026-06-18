
const params = new URLSearchParams(window.location.search);
const titulo = params.get("titulo");

const receita = receitas.find(r => r.titulo === titulo);

const container = document.getElementById("detalhes");

if (receita) {
    container.innerHTML = `
    <h1>${receita.titulo}</h1>

    <img src="${receita.imagem}" style="width:300px;border-radius:10px;">

    <p>${receita.descricao}</p>

    ${receita.ingredientes ? `
        <h2>Ingredientes</h2>
        <ul>
            ${receita.ingredientes.map(i => `<li>${i}</li>`).join("")}
        </ul>
    ` : ""}

    ${receita.passos ? `
        <h2>Modo de Preparo</h2>
        <ol class="passos-lista">
    ${receita.passos.map((p, index) => `
        <li>
            <span class="numero">${index + 1}</span>
            <p>${p}</p>
        </li>
    `).join("")}
</ol>
    ` : ""}
`;
} else {
    container.innerHTML = "<p>Receita não encontrada.</p>";
}