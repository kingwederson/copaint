var albaduz = {v:4,e:8,d:10,gp:20,gc:29}
var astro = {v:8,e:6,d:8,gp:29,gc:28}
var aurania = {v:8,e:4,d:10,gp:24,gc:26}
var badenia = {v:11,e:6,d:5,gp:30,gc:23}
var drax = {v:7,e:9,d:6,gp:22,gc:25}
var glader = {v:9,e:6,d:7,gp:28,gc:20}
var lanz = {v:8,e:6,d:8,gp:24,gc:22}
var phalguna = {v:12,e:0,d:10,gp:32,gc:23}
var pegasus = {v:11,e:5,d:6,gp:27,gc:18}
var talmikan = {v:5,e:6,d:11,gp:22,gc:32}
var taurus = {v:11,e:3,d:8,gp:30,gc:27}
var tusler = {v:5,e:7,d:10,gp:21,gc:36}

function classifica(){
    var equipe = ["Albaduz","Taurus A.S.C.","Astro Soccer","Aurania S.C.","Badenia United","Drax F.C.","Glader G.S.C.","Lanz F.C.","Phaguna Athletic","Pegasus","Talmikan","Tusler"]
    var classe = ["albaduz","taurus","astro","aurania","badenia","drax","glader","lanz","phalguna","pegasus","talmikan","tusler"]
    var vitorias = [albaduz.v,taurus.v,astro.v,aurania.v,badenia.v,drax.v,glader.v,lanz.v,phalguna.v,pegasus.v,talmikan.v,tusler.v]
    var empates = [albaduz.e,taurus.e,astro.e,aurania.e,badenia.e,drax.e,glader.e,lanz.e,phalguna.e,pegasus.e,talmikan.e,tusler.e]
    var derrotas = [albaduz.d,taurus.d,astro.d,aurania.d,badenia.d,drax.d,glader.d,lanz.d,phalguna.d,pegasus.d,talmikan.d,tusler.d]
    var golpro = [albaduz.gp,taurus.gp,astro.gp,aurania.gp,badenia.gp,drax.gp,glader.gp,lanz.gp,phalguna.gp,pegasus.gp,talmikan.gp,tusler.gp]
    var golcontra = [albaduz.gc,taurus.gc,astro.gc,aurania.gc,badenia.gc,drax.gc,glader.gc,lanz.gc,phalguna.gc,pegasus.gc,talmikan.gc,tusler.gc]

    var numequipes = equipe.length

    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'N'
        window.document.getElementById(identidade).innerText = equipe[i]
    }

    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'P'
        window.document.getElementById(identidade).innerText = 3*vitorias[i]+empates[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'J'
        window.document.getElementById(identidade).innerText = vitorias[i]+empates[i]+derrotas[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'V'
        window.document.getElementById(identidade).innerText = vitorias[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'E'
        window.document.getElementById(identidade).innerText = empates[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'D'
        window.document.getElementById(identidade).innerText = derrotas[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'Gp'
        window.document.getElementById(identidade).innerText = golpro[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'Gn'
        window.document.getElementById(identidade).innerText = golcontra[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'Gs'
        window.document.getElementById(identidade).innerText = golpro[i]-golcontra[i]
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'img'
        window.document.getElementById(identidade).innerHTML = `<img class="micro ${classe[i]}">`
    }
    
    for (var i = 0;i<numequipes;i++){
        var identidade = 'eq'+Number(i+10)+'stand'
        window.document.getElementById(identidade).innerHTML = `${(3000*vitorias[i]+1000*empates[i]+500+(golpro[i]-golcontra[i])+golpro[i]/1000).toFixed(3)}`
    }
    //Controle
    var totalsaldo = 0
    var totaldesempate = 0
    var totalempate = 0
    for (var i = 0;i<numequipes;i++){
        totalsaldo = Number(totalsaldo+golpro[i]-golcontra[i])
        totaldesempate = Number(totaldesempate+vitorias[i]-derrotas[i])
        totalempate = Number(totalempate+empates[i])
    }
    if(totalsaldo!=0){
        window.alert("Saldo diferente de zero!")
    }
    if(totaldesempate!=0){
        window.alert("Número de vitórias diferente do número de derrotas!")
    }
    if(totalempate%2!=0){
        window.alert("Número de empates ímpar")
    }
}
classifica()
window.document.getElementById('saldototal').innerText = totalsaldo