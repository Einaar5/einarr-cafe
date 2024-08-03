window.addEventListener('scroll', function() {
    const navback = document.querySelector('.navback');
    const yazilarJS = document.querySelector('.yazilar');
    if (window.scrollY > 30) {
        yazilarJS.style.paddingTop = "230px";
        navback.classList.add('scrolled');
    } else {
        yazilarJS.style.paddingTop = "0px";
        navback.classList.remove('scrolled');
    }
});

document.getElementById('menu-toggle').addEventListener('click', function(event) {
    event.preventDefault();
    var content = document.getElementById('menu-content');
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
});