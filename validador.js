/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function mascaraTel(i){
    const tel = i.value;
    /*verifica se não é número*/
    if(isNaN(tel[tel.length - 1])){
        i.value=tel.substring(0,tel.length - 1);
        return;
    }
    i.setAttribute("maxlength","16");
    
    /*inclui mascara do telefone*/
    if(tel.length == 1){
        i.value="("+ i.value;
    }
    if(tel.length == 3){
        i.value = i.value + ")  ";
    }
    if(tel.length == 6){
        i.value = i.value + " ";
    }
    if(tel.length == 11){
        i.value = i.value + "-";
    }
}


function mascaraCPF(i){
    const cpf = i.value;
    if(isNaN(cpf[cpf.length - 1])){
        i.value=cpf.substring(0,cpf.length - 1);
        return;
    }
    i.setAttribute("maxlength","14");
    
    if(cpf.length == 3){
        i.value = i.value + ".";
    }
    if(cpf.length == 7){
        i.value = i.value + ".";
    }
    if(cpf.length == 11){
        i.value = i.value + "-";
    }
}

function mascaraCNPJ(i){
    const cnpj = i.value;
    if(isNaN(cnpj[cnpj.length - 1])){
        i.value=cnpj.substring(0,cnpj.length - 1);
        return;
    }
    i.setAttribute("maxlength","18");
    
    if(cnpj.length == 2){
        i.value = i.value + ".";
    }
    if(cnpj.length == 6){
        i.value = i.value + ".";
    }
    if(cnpj.length == 10){
        i.value = i.value + "/";
    }
    if(cnpj.length == 15){
        i.value = i.value + "-";
    }
}

function validar(){
    var nome = formUser.nome.value;
    var email = formUser.email.value;
    var fone = formUser.fone.value;
    var endereco = formUser.end.value;
    var CPF = formUser.CPF.value;
    var CNPJ = formUser.CNPJ.value;
    var senha = formUser.senha.value;
    var confSenha = formUser.confSenha.value;

    if(nome == ""|| nome.length <=3){
        alert("Informe o nome completo!");
        formUser.nome.focus();
        return false;
    }

    if(email == ""|| email.length <=10){
        alert("Informe o e-mail correto!");
        formUser.email.focus();
        return false;
    }

    if(fone == ""|| fone.length <=15){
        alert("Informe seu número de telefone!");
        formUser.fone.focus();
        return false;
    }

    if(endereco == ""|| endereco.length <=5){
        alert("Informe o endereço completo!");
        formUser.end.focus();
        return false;
    }

    if(CPF == "" && CNPJ == ""){
        alert("Selecione um documento!");
        return false;
    }

    if(CPF != "" && CNPJ == ""){
        if(CPF.length != 14){
            alert("CPF incorreto!");
            formUser.CPF.focus();
            return false;
        }
    }

    if(CNPJ != "" && CPF == ""){
        if(CNPJ.length != 18){
            alert("CNPJ incorreto!");
            formUser.CNPJ.focus();
            return false;
        }
    }

    if (senha == ""|| senha.length < 8) { 
        alert("Senha não atende aos requisitos!"); 
        formUser.senha.focus(); 
        return false;
    }  
    if (senha != confSenha) { 
        alert("Senhas não conferem!"); 
        formUser.confSenha.focus(); 
        return false;
    }
}