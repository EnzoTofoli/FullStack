const randomNumber = Math.floor(Math.random() * 100);
console.log("Número:", randomNumber);

function adivinhar(){
    const input = document.getElementById("guess_num")
    const message = document.getElementById("resposta");
    const guess = parseInt(input.value, 10);

    if(isNaN(guess) || guess < 0 || guess > 99){
         resposta.textContent = "Digite um número entre 0 e 99";
        return;
     }

    if(guess < randomNumber) {
        resposta.textContent = "Maior";
        message.style.backgroundColor = "red";
        message.style.color = "white";
    } else if(guess > randomNumber){
        resposta.textContent = "Menor";
        message.style.backgroundColor = "red";
        message.style.color = "white";
    } else {
        resposta.textContent = "Acertou!";
        message.style.backgroundColor = "green";
        message.style.color = "white";
    }
}