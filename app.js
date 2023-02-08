function konvertimiKGLBS() {

    let kg = document.getElementById("kg").value;
    var result = parseInt(kg) *2.2
    const n = result.toFixed(2)
    const rezultati = document.getElementById("rezultati1")

    
    rezultati.innerText = "Result : " + n + " lbs";


}


function konvertimiLBSKG() {

    let lbs = document.getElementById("lbs").value;
    var result = parseInt(lbs) /2.2
    const n = result.toFixed(2)
    const rezultati = document.getElementById("rezultati2")

    
    rezultati.innerText = "Result : " + n + " KG";


}

const btn = document.getElementById("btn")
const btn2 = document.getElementById("btn2")


btn.addEventListener("click", konvertimiKGLBS)
btn2.addEventListener("click", konvertimiLBSKG)

