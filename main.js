//Variáveis
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener("keypress", handleEnter)

//Funções
function handleTryClick(event) {
  event.preventDefault() //Não faça o padrão

  const inputNumber = document.querySelector("#inputNumber")

  if(inputNumber.value != "") {
    if(inputNumber.value >= 0 && inputNumber.value <= 10){
      if(Number(inputNumber.value) == randomNumber){
        toggleScreen()
        screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
      }
    
      inputNumber.value = ""
      xAttempts++
    }
    else{
      alert("O número deve ser igual ou entre 0 e 10")
    }
  }
  else{
    alert("Deve digitar um número")
  }
}

function handleResetClick () {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen () {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(e) {
  if (e.key == 'Enter' && screen1.classList.contains("hide")){
    handleResetClick()
  }
}

