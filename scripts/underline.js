let array = document.querySelectorAll(".navbar a");

underClass = function () {
    for (let i = 0; i < array.length; i++) {
        array[i].classList.remove('active');
        this.classList.add('active');
    }
};

for (var i = 0; i < array.length; i++) {
    array[i].addEventListener('click', underClass);
}