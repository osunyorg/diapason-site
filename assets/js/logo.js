var logos = document.querySelectorAll('.logo');

logos.forEach(function (logo) {
    var timeout;
    logo.addEventListener('mouseenter', function(e) {
        if (e.offsetX > logo.offsetWidth / 2) {
            logo.classList.add('reversed')
        } else {
            logo.classList.remove('reversed')
        }
        if (timeout) {
            return;
        }

        logo.classList.add('is-animated');
        clearTimeout(timeout);
        timeout = window.setTimeout(function() {
            logo.classList.remove('is-animated');
            timeout = null;
        }, 1350);
    });
})