const button = document.querySelector(".btn-adicionar-tarefa");
const input = document.querySelector(".adicionar-tarefa");
const listaCompleta = document.querySelector(".lista-tarefas");

let minhaListaDeTarefas = [];

function adicionarNovaTarefa() {
  minhaListaDeTarefas.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLista = "";

  minhaListaDeTarefas.forEach((item, index) => {
    novaLista =
      novaLista +
      ` 
      <li class="task ${item.concluida && " done"}">
      <img src="./icones/checkrdndo.svg" alt="Icone de check" onclick="concluirTarefa(${index})">
      <p class="task-p">${item.tarefa}</p>
      <img src="./icones/trash.svg" alt="Icone de uma lixeira" onclick="deletarItem(${index})">
    </li>
    `;
  });

  listaCompleta.innerHTML = novaLista;

  localStorage.setItem("listaToDo", JSON.stringify(minhaListaDeTarefas));
}

function deletarItem(index) {
  minhaListaDeTarefas.splice(index, 1);
  mostrarTarefas();
}

function concluirTarefa(index) {
  console.log(index);
  minhaListaDeTarefas[index].concluida = !minhaListaDeTarefas[index].concluida;
  mostrarTarefas();
}

button.addEventListener("click", adicionarNovaTarefa);
