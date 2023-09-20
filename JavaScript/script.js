// Variáveis 
import {Modal} from './modal.js'
import { AlertError } from './alert-error.js';

document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector('form')
    const inputWeight = document.querySelector('#weight')
    const inputHeight = document.querySelector('#height')
   

    form.onsubmit = function(event) {
    event.preventDefault()
    const height= inputHeight.value
    const weight= inputWeight.value

    const alertError = notNumber(height)|| notNumber(weight)

     if (alertError){
      AlertError.open()
      return;
     }

    AlertError.close()

    const result= IMC(weight,height)
    const Message= `Seu IMC é de ${result}`

    Modal.message.innerText=Message
     Modal.open()
}

function notNumber(value) {
  return isNaN(value) || value ==""
} 

function IMC(weight,height) {
    return(weight/ ((height/100)**2)).toFixed(2)
}
});

