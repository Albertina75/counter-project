// Tu código aquí.


//obtengo elementos del DOM

const counterElement = document.getElementById('counter');
const preButton = document.querySelector('.prevBtn');
const nextButton = document.querySelector('.nextBtn');

//declaro e inicializo el contador

let counterValue = 0;

//funcion para actualizar el contador y color texto

function updateCounter() {
    
    
    //funcion para actualizar el  color texto


        counterElement.textContent = counterValue;


        if (counterValue < 0) {
            counterElement.style.color = 'red';
        } else if (counterValue > 0) {
            counterElement.style.color = 'green';
        } else {
            counterElement.style.color = 'black';
        }

    }


    //evento click en los botones

    preButton.addEventListener('click', function () {
        counterValue--;
        updateCounter(); //llama a la función para actualizar contador

    });

    nextButton.addEventListener('click', function () {
        counterValue++;
        updateCounter(); //llama a la función para actualizar contador
    });

    updateCounter();