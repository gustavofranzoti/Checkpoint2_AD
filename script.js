// O array "atores" vem do arquivo dados.js
const grid = document.getElementById("grid");
const vazio = document.getElementById("vazio");
const contagem = document.getElementById("contagem");
const inputBusca = document.getElementById("busca");

// Converte "1979-08-27" em "27/08/1979" (sem usar Date, evitando erro de fuso horário)
function formatarData(data) {
  const [ano, mes, dia] = data.split("-");
  return `${dia}/${mes}/${ano}`;
}

// Monta os cards e coloca no grid
function renderizar(lista) {
  grid.innerHTML = lista
    .map(
      (ator) => `
      <article class="card">
        <img src="${ator.foto}" alt="Foto de ${ator.nome}" loading="lazy"
             onerror="this.style.visibility='hidden'">
        <div class="card__info">
          <h2>${ator.nome}</h2>
          <p><span>País</span> ${ator.pais}</p>
          <p><span>Nascimento</span> ${formatarData(ator.nascimento)}</p>
        </div>
      </article>`
    )
    .join("");

  vazio.hidden = lista.length > 0;
  contagem.textContent =
    lista.length === atores.length
      ? `${atores.length} pessoas`
      : `${lista.length} de ${atores.length} pessoas`;
}

// Chamada a cada letra digitada (oninput)
function filtrar() {
  const termo = inputBusca.value.toLowerCase().trim();
  const filtrados = atores.filter((ator) =>
    ator.nome.toLowerCase().includes(termo)
  );
  renderizar(filtrados);
}

// Renderização inicial com todos
renderizar(atores);
