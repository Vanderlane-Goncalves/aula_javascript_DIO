
function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>"
    //console.log(document.getElementById("agradecimento"));
}

function redirecionar(){
    window.open("https://globallabs.academy/");// em outra janela
    //window.location.href = "https://globallabs.academy/" //na mesma página
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse"
}
function voltar(){
    document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
}
    

/*
function soma(n1,n2){
    return n1 + n2;
};

function validaIdade(idade){
    var validar;
    if (idade >=18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é sua idade");
console.log(validaIdade(idade));
*/

/*
var d = new Date();
alert(d.getMonth()+1);
*/

/*
var count;
for (count=0; count<=5; count++){
    alert(count)
};
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    alert(count);
    count ++;
};
*/
/*
var idade = prompt("Qual sua idade");
if(idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*var fruta = [{nome:"maça", cor:"vermalha"},{nome:"Uva",cor:"Roxa"}];
console.log(fruta[1].nome);

var fruta = {nome:"maça", cor:"vermalha"};
console.log(fruta.nome);
*/


/*var nome = "Vanderlane Gonçalves";
var idade = 29 ;
var idade2 = 10;
var frase ="Japão é o melhor time do mundo"
alert("Bem Vindo " + nome +);
alert(idade + idade2);
console.log(nome);
console.log(idade+ idade2);
console.log(frase.replace("Japão","Brasil"))

var lista = ["maça","pêra","laranja"];
console.log(lista);
//lista.push("Uva");
//console.log(lista);
//lista.pop(lista[0]);
//console.log(lista)
//console.log(lista[0])
//alert(lista[0])

console.log(lista.toString())
console.log(lista.join(" - "))*/