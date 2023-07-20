const burger = document.querySelector (".burger");
const nav = document.querySelector('.navigation');


burger.addEventListener('click', e => {
    burger.classList.toggle('open');
    if (burger.classList.contains('open')){
        nav.classList.add('open')
        
    } else {
        nav.classList.remove('open')
    }
});
