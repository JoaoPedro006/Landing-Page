function menuShow(){
    let menumobile = document.querySelector('.mobile-menu');
    if(menumobile.classList.contains('open')){
        menumobile.classList.remove('open');
        document.querySelector('.icon').src = 'imagens/icon1.png.png';
    } else{
        menumobile.classList.add('open');
        document.querySelector('.icon').src = 'imagens/menu_white_36dp.svg';
    }
    
}