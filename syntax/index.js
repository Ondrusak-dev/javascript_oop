import { Muvelet, muveletletrehoz } from "./functions.js"

const input = document.createElement("input")
document.body.appendChild(input)
const input2 = document.createElement("input")
document.body.appendChild(input2)
const div = document.createElement("div")
document.body.appendChild(div)
const button = document.createElement("button")
document.body.appendChild(button)
button.innerText = "összead"

button.addEventListener('click', function(){
    const a = Number(input.value)
    const b = Number(input2.value)

    const {result} = Muvelet(a,b, muveletletrehoz("+"))

    div.innerText = result
})


const fv = muveletletrehoz('+')
console.log(fv(1,2)) 