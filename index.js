maxHeight = 2.72;
maxWeight = 635;

const altura = document.querySelector('input#altura');
const peso = document.querySelector('input#peso');
const resultado = document.querySelector('div#resultado');

function calcularImc(event) {
    event.preventDefault();    

    if (altura.value === '') {
        alert('Insira sua altura!');
        return;
    }

    if (peso.value === '') {
        alert('Insira seu peso!');
        return;
    }

    if (altura.value < 0) {
        alert('A altura deve ser maior que 0!');
        return;
    }

    // Maior altura já registrada
    if (altura.value > maxHeight) {
        alert(`A altura deve ser menor que ${maxHeight} metros!`);
        return;
    }

    if (peso.value < 0) {
        alert('O peso deve ser maior que 0!');
        return;
    }

    // Maior peso registrado (estimativa)
    if (peso.value > maxWeight) {
        alert(`O peso deve ser menor que ${maxWeight}!`);
        return;
    }

    const imc = peso.value / (altura.value * altura.value);

    // toFixed: retorna o número com uma representação em string com as casas decimais especificadas
    resultado.innerHTML = `Seu IMC é de ${imc.toFixed(1)} kg/m²`;

    //                   document.querySelectorAll
    const highLigthRow = document.querySelector('tr.highligth');

    // Remove a classe de destaque
    if (highLigthRow !== null) {
        highLigthRow.classList.remove('highligth');
    }

    if (imc < 18.5) {
        const row = document.querySelector('tr#magreza');
        row.classList.add('highligth');
    }
    else if (imc < 25) {
        const row = document.querySelector('tr#normal');
        row.classList.add('highligth');
    }
    else if (imc < 30) {
        const row = document.querySelector('tr#sobrepeso');
        row.classList.add('highligth');
    }
    else if (imc < 35) {
        const row = document.querySelector('tr#obesidade-i');
        row.classList.add('highligth');
    }
    else if (imc < 40) {
        const row = document.querySelector('tr#obesidade-ii');
        row.classList.add('highligth');
    }
    else if (40 <= imc) {
        const row = document.querySelector('tr#obesidade-iii');
        row.classList.add('highligth');
    }
}

// form.addEventListener('submit', function (event) {
//     // Previne o comportamento padrão de recarregar a página
//     event.preventDefault();

//     calcularImc();
// });