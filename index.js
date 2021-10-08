window.addEventListener('scroll',function(e){
    var scrolled = document.querySelector('.navbar');
    console.log(window.pageYOffset);
    if(window.pageYOffset<=1)
        scrolled.style.borderBottom="";
    else
        scrolled.style.borderBottom="solid";
});