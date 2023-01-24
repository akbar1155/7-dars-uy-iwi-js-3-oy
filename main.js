// let elForm = document.querySelector(".number")
// let elInput = document.querySelector(".natija")
// let elResult = document.querySelector(".parag")

// elnumber.addEventListener("submit", (e) => {
//     e.preventDefault()


//     let elnumber = +elInput.value

//     if (elnumber % 15 == 0) {
//         elResult.textContent = "FizzPizz"
//     }
//     if (elnumber % 3 == 0) {
//         elResult.textContent = "Fizz"
//     }
//     if (elnumber % 5 == 0) {
//         elResult.textContent = "Pizz"
//     } {
//         elResult.textContent = elInput.value
//     }
// })

let elResult = document.querySelector('.result');
let elMathForm = document.querySelector('.math-form');
let elValueInput = elMathForm.querySelector('.value-input');

elMathForm.addEventListener('submit', function (evt){
  evt.preventDefault();
  
  var number = parseFloat(elValueInput.value.trim(), 10);
  
  
  if (number%3 === 0 && number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `FizzBuzz`;
  } 
  else if (number%5 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Fizz`;
  }
  else if (number%3 === 0){
    elResult.classList.remove('d-none');
    elResult.textContent = `Buzz`;
  }
  else {
    elResult.classList.remove('d-none');
    elResult.textContent = `${number}`;
  };
  
  
});
