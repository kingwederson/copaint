function rodapi(){
    var rodape = window.document.getElementById('rodape')
    var htmlrodape = `
    <nav class="main" id="rodapeinfo">
        <p class="lista"><b>Disclamer</b>: Este site é apenas um modelo para competições esportivas.</p>
        <p class="lista">Se você ficou interessado entre em contato através de contato@wederson.net.br, ou prontamente pelo número +55 32 999-185-541.</p>
    </nav>
    `;
   rodape.innerHTML = htmlrodape
}
rodapi()