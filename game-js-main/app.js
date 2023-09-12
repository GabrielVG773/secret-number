let numeroSecreto = parseInt(Math.random() * 10) + 1
let tentativas = 1
let chute

alert('Welcome to the secret number game!')

while (chute != numeroSecreto) {
    let chute = prompt('Choose a number between 1 and 10!')
    if (chute == numeroSecreto) {
        break
    } 
    if (chute > numeroSecreto) {
        alert('The secret number is smaller!')
    } else {
        alert('The secret number is higher!')
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'try' : 'try' 
alert(`The secret number was ${numeroSecreto} and you got it right in the ${tentativas} ${palavraTentativa}`)