const favicons = document.querySelectorAll('.followus__block img');
let clicks = 0;

favicons.forEach((el) => {
    el.onclick = () =>{
        clicks++
        if(clicks === 1) {
            el.classList.add("red-decoration");
        }else if (clicks === 2) {
            el.classList.replace("red-decoration","blue-decoration");
        }else if (clicks === 3) {
            el.classList.remove("red-decoration");
            el.classList.remove("blue-decoration");
            clicks = 0;
        }
    }
});