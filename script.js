
function burguer() {
    /* Para fazer ativar a rotação e o X */
    let menuBtn = document.getElementById('burguer');
    menuBtn.classList.toggle('active');
    const btnMobile = document.getElementById('btn-mobile');
    const active = nav.classList.contains('active');
    nav.classList.toggle('active');
 
    
}
document.addEventListener('scroll', ocultar)
function ocultar() {
    let btnTop = document.getElementById('btnTop')

    if(window.scrollY > 10){
        btnTop.style.display = "flex"
    } else {
        btnTop.style.display = "none"
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);