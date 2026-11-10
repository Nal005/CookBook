
const params = new URLSearchParams(window.location.search);
const titulo = params.get("titulo");

const receita = receitas.find(r => r.titulo === titulo);

const container = document.getElementById("detalhes");

const voltar = `<a href="index.html" class="voltar">← Voltar às receitas</a>`;

if (receita) {
    container.innerHTML = `
    ${voltar}
    <h1>${receita.titulo}</h1>

    <p class="descricao">${receita.descricao}</p>

    <div class="receita-topo">
        <img src="${receita.imagem}" alt="${receita.titulo}">

        ${receita.ingredientes ? `
        <div>
            <h2>Ingredientes</h2>
            <ul class="ingredientes-lista">
                ${receita.ingredientes.map(i => i.trim().endsWith(":")
                    ? `<li class="subtitulo">${i}</li>`
                    : `<li>${i}</li>`
                ).join("")}
            </ul>
        </div>
        ` : ""}
    </div>

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
    container.innerHTML = `${voltar}<p>Receita não encontrada.</p>`;
}