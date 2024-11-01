const Search_Options = document.querySelector('.Search-Option');


document.getElementById('Lupa').addEventListener('click',function(){    
    Search_Options.style.top='28px';    
});

const Menu = document.querySelector('.Menu-Options');

document.getElementById('Menu').addEventListener('click',function(){
    Menu.style.right='0';
    Menu.style.top='28px';
});

document.getElementById('Close').addEventListener('click',function(){
    Menu.style.right='-100%';
})

document.getElementById('Close-1').addEventListener('click',function(){
    Search_Options.style.top = '-100%';
});