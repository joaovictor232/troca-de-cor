let mudarcor = document.querySelector('.mudar-cor')
let trocarautomaticamente = document.querySelector('.trocar-automaticamente')
let intervalo = null
let trocandoautomaticamente = false

function troca(){
    let coraleatoria = Math.floor(Math.random()*16777215).toString(16)
    document.body.style.backgroundColor = "#" + coraleatoria    
}
function trocaautomatica(){
    if(trocandoautomaticamente){
        clearInterval(intervalo)
        trocandoautomaticamente = false

    } else {
        intervalo = setInterval(function(){
            let coraleatoria = Math.floor(Math.random()*16777215).toString(16)
            document.body.style.backgroundColor = "#" + coraleatoria
        }, 1000)
    }


}


mudarcor.addEventListener('click', troca)
trocarautomaticamente.addEventListener('click', trocaautomatica)