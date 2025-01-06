var number_value = 6689099684

$(document).ready(function(){
    setInterval(function() {
        $('.odometer').html(number_value += 10)
    }, 3000);
    $(".casino-banner, .slot-banner").click(function() {
        var dataAttr = $(this).attr("data-modal");
        $(`#${dataAttr}`).addClass('d-flex')
    }); 
    $(".close-modal").click(function(){
        $('.modal-container').removeClass('d-flex')
        $('.modal-container').addClass('d-none')
    })
    $('#mobileNav').click(function(e){
        e.stopPropagation()
        $('.mobile-user').removeClass('d-flex')
        $('.mobile-menu').toggleClass('d-flex')
    })
    $('#mobileUser').click(function(e){
        e.stopPropagation()
        $('.mobile-menu').removeClass('d-flex')
        $('.mobile-user').toggleClass('d-flex')
    })
    $('.mobile-user,.mobile-menu').click(function(e){
        e.stopPropagation()
    })
    $('body, html').click(function(){
        $('.mobile-menu,.mobile-user').removeClass('d-flex')
    })
    $(window).resize(function(){
        if($(window).width() > 1280){
            $('.mobile-menu,.mobile-user').removeClass('d-flex')
            $('.modal-container').addClass('d-none')
        }  
    })
    $(window).scroll(function () {
        100 < $(this).scrollTop() ? $(".scroll-top").fadeIn() : $(".scroll-top").fadeOut();
      
        if ($(window).width() < 1280) {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '145px');
            } else {
                $('.new-logo').css('width', '160px');
            }
        } else {
            if ($(this).scrollTop() > 100) {
                $('.new-logo').css('width', '210px');
            } else {
                $('.new-logo').css('width', '240');
            }
        }
    }),
    $(".scroll-top").on("click", function () {
        return (
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                600
            ),
            !1
        );
    }),
    $(".scroll-top").on("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
})



