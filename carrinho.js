
//Calcula o preço do 1* produto

function calcP1(){
    var P1 = document.getElementById("INP_P1").value;
    var Preco = 199;
    var totalP1 = P1 * Preco;
    
    document.getElementById("TotalP1").innerHTML = totalP1;
}

//Calcula o preço do 2* produto

function calcP2(){
    var P2 = document.getElementById("INP_P2").value;
    var Preco = 159.90;
    var totalP2 = P2 * Preco;
    
    document.getElementById("TotalP2").innerHTML = totalP2;
}

//Calcula o preço do 3* produto

function calcP3(){
    var P3 = document.getElementById("INP_P3").value;
    var Preco = 159.90;
    var totalP3 = P3 * Preco;
    
    document.getElementById("TotalP3").innerHTML = totalP3;
}

//Cria a função que totaliza o preço dos produtos escolhidos

function totalizarProdutos(){
    var P1 = document.getElementById("INP_P1").value;
    var Preco = 199;
    var totalP1 = P1 * Preco;
    
    document.getElementById("TotalP1").innerHTML = totalP1;

    var P2 = document.getElementById("INP_P2").value;
    var Preco = 159.90;
    var totalP2 = P2 * Preco;
    
    document.getElementById("TotalP2").innerHTML = totalP2;

    var P3 = document.getElementById("INP_P3").value;
    var Preco = 159.90;
    var totalP3 = P3 * Preco;
    
    document.getElementById("TotalP3").innerHTML = totalP3;

 var FullTotalDosProdutos = totalP1 + totalP2 + totalP3;
 document.getElementById("MostrarTotal").innerHTML = FullTotalDosProdutos;
}
//Esta Função confirma a forma de pagamento
function ConfirmarCompra(){
    window.alert('PAGAMENTO CONCLUIDO');
}
    $(document).ready(function(){
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });
    });