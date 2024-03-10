class Cadastro {
    constructor(nome, genero, raca, respiracao, classe) {
        this.nome = nome;
        this.genero = genero;
        this.raca = raca;
        this.respiracao = respiracao;
        this.classe = classe;
    }
}

const cadastroForm = document.getElementById('cadastroForm');
const listaCadastro = document.getElementById('listaCadastro');
const cadastros = [];

cadastroForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const nome = document.getElementById('nome').value;
    const genero = document.getElementById('genero').value;
    const raca = document.getElementById('raca').value;
    const respiracao = document.getElementById('respiracao').value;
    const classe = document.getElementById('classe').value;
    const novoCadastro = new Cadastro(nome, genero, raca, respiracao, classe);
    cadastros.push(novoCadastro);
    renderizarLista();
    cadastroForm.reset();
});

function renderizarLista() {
    listaCadastro.innerHTML = '';
    cadastros.forEach((cadastro, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${cadastro.nome} - ${cadastro.genero} - ${cadastro.raca} - ${cadastro.respiracao} - ${cadastro.classe}`;
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.addEventListener('click', () => editarCadastro(index));
        const btnExcluir = document.createElement('button');
        btnExcluir.textContent = 'Excluir';
        btnExcluir.addEventListener('click', () => excluirCadastro(index));
        li.appendChild(btnEditar);
        li.appendChild(btnExcluir);
        listaCadastro.appendChild(li);
    });
}

function excluirCadastro(index) {
    cadastros.splice(index, 1);
    renderizarLista();
}

function editarCadastro(index) {
    const cadastro = cadastros[index];
    document.getElementById('nome').value = cadastro.nome;
    document.getElementById('genero').value = cadastro.genero;
    document.getElementById('raca').value = cadastro.raca;
    document.getElementById('respiracao').value = cadastro.respiracao;
    document.getElementById('classe').value = cadastro.classe;
    cadastros.splice(index, 1);
    renderizarLista();
}

renderizarLista();
