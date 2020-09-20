$(document).ready(function() {
    $('#mycarousel').carousel({interval:2000 });
    $('#carouselbtn').click(function() {
        if($('#carouselbtn').children('span').hasClass('fa-pause')){
           $('#mycarousel').carousel('pause');
           $('#carouselbtn').children('span').removeClass('fa-pause');
           $('#carouselbtn').children('span').addClass('fa-play');
        }
        else if($('#carouselbtn').children('span').hasClass('fa-play')){
           $('#mycarousel').carousel('cycle');
           $('#carouselbtn').children('span').removeClass('fa-play');
           $('#carouselbtn').children('span').addClass('fa-pause');
       }
    });
    $('#logindismiss').click(function(){
           $('#loginmodal').modal('hide');
    });
    $('#formdismiss').click(function(){
           $('#modalreserve').modal('hide');
    });
    $('#JSloginmodal').click(function(){
           $('#loginmodal').modal('toggle');
    });
    $('#JSReservetable').click(function(){
           $('#modalreserve').modal('toggle');
    });
});