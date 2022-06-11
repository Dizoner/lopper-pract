let imgs = document.querySelectorAll('.followus__block img');

underClass = function () {
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].classList.remove('red-decoration');
        this.classList.add('red-decoration');
        switch(imgs[i].classList){
            case 'red-decoration':
                imgs[i].classList.remove('red-decoration');
                this.classList.add('blue-decoration');
    }   }
};

for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener('click', underClass);
}