
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://comdema.wederson.net.br/">
            <img src="logo.png" class="logo">
            <nav class="titulo"><span id="hie1">2021</span><br><span id="hie2">Patel's Cup</span></nav>
        </a>
        <nav id="menu">
            <ul class="menu">
                <a href="http://fut.wederson.net.br/r/"><li>Regulamento</li></a>
                <a href="http://fut.wederson.net.br/c/"><li>Classificação</li></a>
                <a href="http://fut.wederson.net.br/p/"><li>Partidas</li></a>
                <a href="http://fut.wederson.net.br/e/"><li>Equipes</li></a>
                <a href="http://fut.wederson.net.br/n/"><li>Notícias</li></a>
            </ul>
        </nav>
    </nav>
    `;
   cabecalho.innerHTML = htmlcab
}
cabi()