
function carregar(){
var imagem = document.querySelector("img#imagem")
var texto = document.querySelector("div#msg") 
var data = new Date()
var horaAtual = data.getHours()
if(horaAtual >= 5 && horaAtual <= 12){
    texto.innerHTML = "Bom dia!!!"
    imagem.src = "imagemManha.jpg"
    document.body.style.backgroundColor = "#f3d137"
}else if(horaAtual >= 13 && horaAtual < 19){
    texto.innerHTML = "Boa Tarde!!!"
    imagem.src= "imagemTarde.jpg"
    document.body.style.backgroundColor = "#e08c0c"
}else if(horaAtual >= 19 && horaAtual < 23){
    texto.innerHTML = "Boa Noite!!!"
    imagem.src = "imagemNoite.jpg"
    document.body.style.backgroundColor = "#0f0f94"
}else{
    texto.innerHTML = "Boa Madrugada !!!"
    imagem.src = "imagemmadrugada.jpg"
    document.body.style.backgroundColor = "#15153a"
}

}