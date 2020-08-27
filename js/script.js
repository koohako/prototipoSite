function limpar(){
    document.getElementById("nome").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputDate").value = "";
    document.getElementById("inputTelefone").value = "";
    document.getElementById("inputMenssagem").value = "";
}

function enviar(){
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("inputEmail").value;
    var data = document.getElementById("inputDate").value;
    var telefone = document.getElementById("inputTelefone").value;
    var menssagem = document.getElementById("inputMenssagem").value;

    if(nome == ""||email ==""|| data =="" || telefone == "" || menssagem == ""){
        $("#msg-erro").slideDown(400).delay(3000).slideUp(400);
        $('.input-formatation').css('border', '1px solid red');
        
    }else{

        $("#msg-sucesso").slideDown(400).delay(3000).slideUp(400);
    }

}