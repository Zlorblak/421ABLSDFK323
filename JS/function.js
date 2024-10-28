const header = document.querySelector('header');
const altura = header.clientHeight;

const Search_Options = document.querySelector('.Search-Option');

document.getElementById('Lupa').addEventListener('click',function(){
    if(altura === 52) {
        Search_Options.style.top='-8px';
    } else {
        Search_Options.style.top='10px';
    }
});

const Menu = document.querySelector('.Menu-Options');

document.getElementById('Close').addEventListener('click',function(){
    Search_Options.style.top='-100%';
    Menu.style.right='-100%'
});

document.getElementById('Menu').addEventListener('click',function(){
    Menu.style.right='0';

    if(altura === 70) {
        Menu.style.top='10px';  
    } else {
        Menu.style.top='28px';
    }
    
});