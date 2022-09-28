
const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const pc = document.querySelector('.pc')
const pid = document.querySelector('#pid')
const input = document.querySelector('input')
const img = document.createElement('img')

h1.innerHTML = "Juan Roa"
h1.innerText = "José Ruiz"
console.log(h1.getAttribute("atributo"))
h1.setAttribute("atrubito", "att2")
p.classList.add("OtClase")
p.classList.remove("pc")
input.value = "texto en js"
img.setAttribute("src", "img/Deadpool3.jpg")
pid.innerHTML = ""
pid.append(img)