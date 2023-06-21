
//script de la barra de progreso de prolog.html
window.addEventListener('scroll', function() {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const windowHeight = document.documentElement.clientHeight || window.innerHeight;
    
    const scrolled = (scrollTop / (scrollHeight - windowHeight)) * 100;
    
    document.getElementById('progress-bar').style.width = scrolled + '%';
});