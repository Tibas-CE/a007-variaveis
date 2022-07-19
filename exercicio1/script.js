let nome; 
let idade; 

console.log(typeof nome);
console.log(typeof idade);  

//a variável ficou undefined pois elas não possuem valor

nome = prompt("Qual seu nome?");
console.log(nome);
idade = prompt("Qual sua idade?");
//também podemos usar idade = Number (prompt"qual sua idade?")
console.log(idade);

console.log(typeof nome);
console.log(typeof idade);

//string, pois o prompt sempre retorna uma string

console.log("Olá", nome,  "você tem", idade, "anos");