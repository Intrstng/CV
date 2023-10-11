document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal'),
        span = document.getElementsByClassName('modal__close')[0],
        btns = document.querySelectorAll('.modal-open'),
        modalContainer = document.querySelector('.modal__wrapper'),
        modalContent = document.querySelector('.modal__img'),
        scrollbar = document.body.clientWidth - window.innerWidth + 'px';

    btns.forEach(item => {
        item.onclick = function (e) {
            modal.style.display = 'block';
            modalContent.src = e.target.dataset.src;
            document.body.style.overflow = 'hidden';
            document.body.style.marginLeft = scrollbar;
        }
    });

    span.onclick = function () {
        modal.style.display = 'none';
        modalContent.src = '';
        document.body.style.overflow = 'visible';
        document.body.style.marginLeft = '0px';
    }

    window.onclick = function (event) {
        if (event.target === modalContainer) {
            modal.style.display = 'none';
            modalContent.src = '';
            document.body.style.overflow = 'visible';
            document.body.style.marginLeft = '0px';
        }
    }
});