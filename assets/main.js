const button5 = document.querySelector("#plusFive")
const btn10 = document.querySelector("#plusTen")
const btn15 = document.querySelector("#plusFifteen")
const btn20 = document.querySelector("#plusTwenty")

const indicator = document.querySelector("#number-indicator")
const disp = document.querySelector("#display-heading")

button5.addEventListener('click', () => {
  disp.textContent = "added 5"
  indicator.textContent = (parseInt(indicator.textContent) + 5).toString()
})

btn10.addEventListener('click', () =>{
  disp.textContent ="added 10"
  indicator.textContent =(parseInt(indicator.textContent) + 10).toString()
})

btn15.addEventListener('click', () =>{
  disp.textContent ="added 15"
  indicator.textContent =(parseInt(indicator.textContent) + 15).toString()
})

btn20.addEventListener('click', () =>{
  disp.textContent ="added 20"
  
  indicator.textContent =(parseInt(indicator.textContent) + 20)
})

