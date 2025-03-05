// Aray que armazena os nomes
let amigos = [];
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");

// Função para adicionar amigo
function adicionarAmigo() {
  const input = document.getElementById("amigo"); // Captura o campo de entrada
  const nome = input.value.trim(); // Obtém o valor digitado e remove espaços extras

  if (nome === "") {
    // Validação para evitar entradas vazias
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(nome); // Adiciona o nome ao array
  input.value = ""; // Limpa o campo de entrada

  atualizarLista(); // Atualiza a lista exibida na tela
}

// Função para atualizar a lista exibida na tela
function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((amigo) => {
    // Percorre o array de amigos
    const li = document.createElement("li"); // Cria um elemento <li>
    li.textContent = amigo; // Adiciona o nome dentro da <li>
    lista.appendChild(li); // Adiciona o <li> à lista
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");

  if (amigos.length === 0) {
    // Verifica se há nomes na lista
    resultado.innerHTML =
      "<p>Adicione pelo menos um nome antes de sortear!</p>";
    return;
  }

  const indiceSorteado = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceSorteado];

  resultado.innerHTML = `<p>O amigo sorteado é: <strong>${amigoSorteado}</strong></p>`;
}
