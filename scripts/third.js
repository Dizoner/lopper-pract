let targetItem = document.querySelector('footer');

targetItem.addEventListener('click', function(event){
    if (event.target.className == 'footer'){
        console.log('footer');
    }else if(event.target.className == 'logo'){
        console.log('logo');
    }
});