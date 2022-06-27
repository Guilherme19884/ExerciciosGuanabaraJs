function contar(){
    let ini = document.getElementById(`txti`)
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if(ini.value.length == 00 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[Erro] Faltam dados!')
        res.innerHTML = `Impossível contar`
    }
    else{
       res.innerHTML = `contando: <br>`
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (i< f){
        //contagem crescente
            for(let c = i; c<= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        }
       else{
        //contagem decrescente
            for (let c = i; c >= f; c-=p){
                res.innerHTML += `${c} \u{1F449}`
            }
       }
       res.innerHTML += `\u{1F3c1}`
    }
}