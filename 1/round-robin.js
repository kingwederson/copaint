var time = ["Albaduz","Taurus Artarus","Astro Soccer","Aurania F.C.","Badenia United","Drax F.C.","Glader","Lanz F.C.","Phaguna Athletic","Pegasus","Talmikan","Tusler"]
function exibirjogos(){
    var rodada = Number(document.getElementById('selectrodada').selectedIndex+1)
    if(rodada%2==1){
        fita0.innerText = time[0]
        fita1.innerText = time[(rodada+0)%11+1]
        fita2.innerText = time[(rodada+1)%11+1]
        fita3.innerText = time[(rodada+2)%11+1]
        fita4.innerText = time[(rodada+3)%11+1]
        fita5.innerText = time[(rodada+4)%11+1]
        fita6.innerText = time[(rodada+5)%11+1]
        fita7.innerText = time[(rodada+6)%11+1]
        fita8.innerText = time[(rodada+7)%11+1]
        fita9.innerText = time[(rodada+8)%11+1]
        fita10.innerText = time[(rodada+9)%11+1]
        fita11.innerText = time[(rodada+10)%11+1]
    }else{
        fita11.innerText = time[0]
        fita10.innerText = time[(rodada+0)%11+1]
        fita9.innerText = time[(rodada+1)%11+1]
        fita8.innerText = time[(rodada+2)%11+1]
        fita7.innerText = time[(rodada+3)%11+1]
        fita6.innerText = time[(rodada+4)%11+1]
        fita5.innerText = time[(rodada+5)%11+1]
        fita4.innerText = time[(rodada+6)%11+1]
        fita3.innerText = time[(rodada+7)%11+1]
        fita2.innerText = time[(rodada+8)%11+1]
        fita1.innerText = time[(rodada+9)%11+1]
        fita0.innerText = time[(rodada+10)%11+1]
    }
    switch(rodada){
        case 1:
            jogo1.innerText = "0-3"
            jogo2.innerText = "4-1"
            jogo3.innerText = "2-3"
            jogo4.innerText = "2-0"
            jogo5.innerText = "3-2"
            jogo6.innerText = "2-1"
            break
        case 2:
            jogo1.innerText = "0-0"
            jogo2.innerText = "1-2"
            jogo3.innerText = "0-0"
            jogo4.innerText = "0-1"
            jogo5.innerText = "1-0"
            jogo6.innerText = "0-1"
            break
        case 3:
            jogo1.innerText = "1-0"
            jogo2.innerText = "2-1"
            jogo3.innerText = "3-1"
            jogo4.innerText = "1-1"
            jogo5.innerText = "2-1"
            jogo6.innerText = "1-0"
            break
        case 4:
            jogo1.innerText = "2-0"
            jogo2.innerText = "2-0"
            jogo3.innerText = "0-1"
            jogo4.innerText = "1-0"
            jogo5.innerText = "0-2"
            jogo6.innerText = "0-2"
            break
        case 5:
            jogo1.innerText = "0-1"
            jogo2.innerText = "1-2"
            jogo3.innerText = "1-1"
            jogo4.innerText = "1-2"
            jogo5.innerText = "2-0"
            jogo6.innerText = "2-0"
            break
        case 6:
            jogo1.innerText = "4-1"
            jogo2.innerText = "1-1"
            jogo3.innerText = "1-3"
            jogo4.innerText = "2-5"
            jogo5.innerText = "2-1"
            jogo6.innerText = "1-4"
            break
        case 7:
            jogo1.innerText = "1-1"
            jogo2.innerText = "1-0"
            jogo3.innerText = "0-1"
            jogo4.innerText = "0-1"
            jogo5.innerText = "1-0"
            jogo6.innerText = "2-1"
            break
        case 8:
            jogo1.innerText = "2-0"
            jogo2.innerText = "1-0"
            jogo3.innerText = "1-0"
            jogo4.innerText = "0-2"
            jogo5.innerText = "1-1"
            jogo6.innerText = "0-1"
            break
        case 9:
            jogo1.innerText = "2-0"
            jogo2.innerText = "1-0"
            jogo3.innerText = "0-1"
            jogo4.innerText = "3-1"
            jogo5.innerText = "1-3"
            jogo6.innerText = "2-3"
            break
        case 10:
            jogo1.innerText = "1-4"
            jogo2.innerText = "4-1"
            jogo3.innerText = "1-2"
            jogo4.innerText = "1-2"
            jogo5.innerText = "1-1"
            jogo6.innerText = "0-1"
            break
        case 11:
            jogo1.innerText = "1-1"
            jogo2.innerText = "2-1"
            jogo3.innerText = "1-2"
            jogo4.innerText = "1-2"
            jogo5.innerText = "0-2"
            jogo6.innerText = "3-2"
            break
        case 12:
            jogo1.innerText = "2-0"
            jogo2.innerText = "0-2"
            jogo3.innerText = "0-2"
            jogo4.innerText = "2-2"
            jogo5.innerText = "5-0"
            jogo6.innerText = "0-1"
            break
        case 13:
            jogo1.innerText = "2-2"
            jogo2.innerText = "0-0"
            jogo3.innerText = "4-0"
            jogo4.innerText = "1-1"
            jogo5.innerText = "0-1"
            jogo6.innerText = "3-0"
            break
        case 14:
            jogo1.innerText = "1-0"
            jogo2.innerText = "1-0"
            jogo3.innerText = "2-3"
            jogo4.innerText = "1-1"
            jogo5.innerText = "0-0"
            jogo6.innerText = "3-0"
            break
        case 15:
            jogo1.innerText = "1-1"
            jogo2.innerText = "0-1"
            jogo3.innerText = "2-3"
            jogo4.innerText = "2-0"
            jogo5.innerText = "3-1"
            jogo6.innerText = "0-0"
            break
        case 16:
            jogo1.innerText = "0-0"
            jogo2.innerText = "0-3"
            jogo3.innerText = "0-1"
            jogo4.innerText = "0-1"
            jogo5.innerText = "2-1"
            jogo6.innerText = "3-3"
            break
        case 17:
            jogo1.innerText = "0-0"
            jogo2.innerText = "0-0"
            jogo3.innerText = "2-0"
            jogo4.innerText = "0-0"
            jogo5.innerText = "2-2"
            jogo6.innerText = "0-3"
            break
        case 18:
            jogo1.innerText = "2-4"
            jogo2.innerText = "2-0"
            jogo3.innerText = "1-2"
            jogo4.innerText = "1-1"
            jogo5.innerText = "3-1"
            jogo6.innerText = "1-1"
            break
        case 19:
            jogo1.innerText = "1-2"
            jogo2.innerText = "1-0"
            jogo3.innerText = "0-2"
            jogo4.innerText = "1-1"
            jogo5.innerText = "0-1"
            jogo6.innerText = "1-3"
            break
        case 20:
            jogo1.innerText = "1-1"
            jogo2.innerText = "3-1"
            jogo3.innerText = "0-2"
            jogo4.innerText = "0-1"
            jogo5.innerText = "0-0"
            jogo6.innerText = "2-0"
            break
        case 21:
            jogo1.innerText = "1-2"
            jogo2.innerText = "0-0"
            jogo3.innerText = "2-1"
            jogo4.innerText = "1-1"
            jogo5.innerText = "0-2"
            jogo6.innerText = "0-0"
            break
        case 22:
            jogo1.innerText = "1-0"
            jogo2.innerText = "2-0"
            jogo3.innerText = "2-1"
            jogo4.innerText = "0-2"
            jogo5.innerText = "3-1"
            jogo6.innerText = "0-0"
            break
    }
}
exibirjogos()