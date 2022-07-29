(()=>{

    var btn = document.querySelector('.burguer');
    const mostrarMenu = ()=>{
        var menuNav = document.querySelector('.menu-nav');
        if(menuNav.classList.contains('visible')){
            menuNav.classList.remove('visible');
            document.body.querySelector('.burguer img').src = 'img/menu-hamburgue.svg';
        }
        else{
            menuNav.classList.add('visible');
            document.body.querySelector('.burguer img').src = 'img/close.svg';
        }
    }
    btn.addEventListener('click',mostrarMenu);



    var btn2 = document.querySelector('.alterar-cor');
    const trocarCor = ()=>{
        var header = document.querySelector('.principal');
        if(header.classList.contains('mudarCor')){
            header.classList.remove('mudarCor');
        }
        else{
            header.classList.add('mudarCor');
        }
    }
    btn2.addEventListener('click',trocarCor);
})();