
function cabi(){
    var cabecalho = window.document.getElementById('cabecalho')
    var htmlcab = `
    <nav class="main" id="cabecalhoinfo">
        <a href="http://fut.wederson.net.br/">
            <img src="https://pngimg.com/uploads/tesla_logo/small/tesla_logo_PNG18.png" class="logo">
            <nav class="titulo"><span id="hie1">Tesla</span><br><span id="hie2">Soccer Cup</span></nav>
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