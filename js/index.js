$(document).scroll (()=>{
    if ($(document).width() < 1024)
    return false
    
    if ($(document).scrollTop() > $(".full-page").height() / 2)
    $('header').addClass('fixed')
    else 
    $('header').removeClass('fixed')

})

$('.up-btn').on('click', (()=>{
    $('html, body').animate({
        scrollTop:0
    }, 'slow')
}))


$('#show-menu').on ('click', (()=>{
    $('#hidden-menu').animate({
        'right':0 
    },500)
}))

$('#hidden-menu .close').on ('click', (()=>{
    $('#hidden-menu').animate({
        'right':"-300px"
    },200)
}))

$(document).ready(function(){
    $('#slider').slick({
        dots: 'false',
        prevArrow: '<div class="arrow-p"><i class="fa-sharp fa-solid fa-arrow-right"></i></div>',
        nextArrow: '<div class="arrow-n"><i class="fa-sharp fa-solid fa-arrow-left"></i></div>',
        infinite:true,
        slidesToShow: 3,
        slidesToScroll:2
    })
})