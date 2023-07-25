function acessar() {
    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
		console.log(window.location.href);
    }
}

var dadosLista = [];

function salvarUser()

{
    let nomeUser = document.getElementById("nomeUser").value;

     if (nomeUser) {
        dadosLista.push(nomeUser);
        criarLista();
        document.getElementById("nomeUser").value = '';
    }

}
//INSERE NOME NA TABELA ABAIXO DO BOTÃO SALVAR
function criarLista()
{
    let table = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>"

    for(let i=0; i <= (dadosLista.length-1); i++)

    {

        table += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success' onclick='editar(this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger' onlick=''>Excluir</button></td></tr>"; 
        document.getElementById('tabela').innerHTML = table;

    }

}

function editar(i)

{
    document.getElementById('nomeUser').value = dadosLista[(i - 1)];
    dadosLista.splice(dadosLista[(i - 1), 1]);
}
// FUNÇÃO PARA EXCLUIR NOME

function excluir(i){
    dadosLista.splice((i-1),1);
    document.getElementById("tabela").deleteRow(i);
}

