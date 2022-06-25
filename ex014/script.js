function carregar(){
    var msg= window.document.getElementById("msg")
    var img= window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
   
    msg.innerHTML = `Agora são ${hora}:${minuto} horas.`
    if(hora >=0 && hora < 12){
        //bom dia
        img.src = "nascerdoSol.png"
        document.body.style.background = '#838d66'
    }
    else if(hora >=12 && hora < 18) {
        //boa tarde
        img.src = "pordoSol.png"
       document.body.style.background = '#b9846f'
    }
    else{
        //boa noite
        img.src = "noite.png"
        document.body.style.background = '#2c3f45'
    }

}

