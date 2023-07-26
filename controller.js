// bloco de verificação de preenchimento de campos

function Verifica(){
    let user = document.getElementById('loginEmail').value;
    let senha = document.getElementById ('liginSenha').value;
    
    if (luser || !senha){
        alert("campos de preenchimento obrigatório. favor preencher! ");
    } else {
        alert("campos preenchidos com suesso!");
    }
}

var dadosLista = [];

function salvarUser() {
    let nomeUser = document.getElementById("nomeUser").value;   
    
        if(nomeUser){
        dadosLista.push(nomeUser);
        criaLista();
        document.getElementById("nomeUser").value = '';
     }
}

function criaLista(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome usuario</th><th>Ações</th></tr>";
    
    for(let i = 0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-success'onclick='editar (this.parentNode.parentNode.rowIndex)'>Editar</button><button class='btn btn-danger'onclick='excluir(this.parentNode.parentNode.rowIndex)'>Excluir</button></td></tr>";
         document.getElementById('tabela').innerHTML = tabela;
    };
};

//Função para excluir nome

function excluir(i){
    dadosLista.splice((i-1), 1);

document.getElementById("tabela").deleteRow(i);
}

function editar(i) {
    document.getElementById("nomeUser").value = dadosLista[(i-1)];
    dadosLista.splice(dadosLista[(i-1),1]);
};