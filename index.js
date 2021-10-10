window.addEventListener('scroll',function(e){
    var navbar = document.querySelector('.navbar');
    if(window.pageYOffset<=1)
        navbar.style.borderBottom="";
    else
        navbar.style.borderBottom="solid";
    
    var p = document.querySelector('.moto p');
    p.style.transition="fontSize 1s";
    console.log(p.style);
    if(window.pageYOffset>=550)
    {
        p.style.margin="auto";
        p.style.padding="0px";
        p.style.fontSize="60px";
    }
    else{
        p.style.margin="";
        p.style.paddingTop="30px";
        p.style.fontSize="80px";
    }

});