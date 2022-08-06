let math = document.getElementById("submit")
math.addEventListener('click', e =>{
    const A = Number(document.getElementById('a').value)
    const B = Number(document.getElementById("b").value)
    const C = Math.sqrt(Math.pow(A, 2) + Math.pow(B, 2))
    document.getElementById('answer').innerText = C + " in"
})
let number = 0
const target = document.getElementById('Number')
const upBtn = document.getElementById("up") 
const downBtn = document.getElementById('down')
const clearBtn = document.getElementById('reset')

upBtn.addEventListener('click', e => {
    number += 1
    target.innerText = number
})
downBtn.addEventListener('click', e =>{
    number -=1
    target.innerHTML = number
})
clearBtn.addEventListener('click', e =>{
    number = 0
   target.innerText = number
})
const answer = Math.floor(Math.random() * 100+ 1)
let guess = 0
document.getElementById('randomerbtn').addEventListener('click', e =>{
      guess +=1
      document.getElementById('numGuess').innerText 
    let guessValue = document.getElementById('randomer').value
     if(guessValue == answer){
        document.getElementById('numGuess').innerText = `${answer} is the answer ${guess} tries`
     }
     else if (guessValue > answer){
       document.getElementById('numGuess').innerText = 'To high'
     }
     else{
        document.getElementById('numGuess').innerText = "to low"
     }
})