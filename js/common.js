
/*
if ($('#prob').style.display == 'none';) {
    var textShowing=true;
    $("section").click(function () {
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
    });

}else{


}

*/
if ($('#prob').css('display') == 'none')
{
    var textShowing=true;
    $("section").click(function () {
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
    });




    $(document).ready(function(){$(".header").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-80;
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
        $('body,html').animate({scrollTop:top},1000);});});




    $(document).ready(function(){$("section").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-80;
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
        $('body,html').animate({scrollTop:top},1000);});});




    $(document).ready(function(){$("footer").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-80;
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
        $('body,html').animate({scrollTop:top},1000);});});




    $(function(){$('a[data-target^="anchor"]').bind('click.smoothscroll',function(){var target=$(this).attr('href'),bl_top=$(target).offset().top-70;
        $(".nav").fadeOut(function () {
            textShowing = true;
        });
        $('body, html').animate({scrollTop:bl_top},700);return false;});});
}
else
{
    $(document).ready(function(){$(".header").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-100;

        $('body,html').animate({scrollTop:top},1000);});});




    $(document).ready(function(){$("section").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-100;

        $('body,html').animate({scrollTop:top},1000);});});




    $(document).ready(function(){$("footer").on("click","a",function(event){event.preventDefault();var id=$(this).attr('href'),top=$(id).offset().top-100;

        $('body,html').animate({scrollTop:top},1000);});});




    $(function(){$('a[data-target^="anchor"]').bind('click.smoothscroll',function(){var target=$(this).attr('href'),bl_top=$(target).offset().top-70;

        $('body, html').animate({scrollTop:bl_top},700);return false;});});
}


$(function(){if(!Modernizr.svg){$("img[src*='svg']").attr("src",function(){return $(this).attr("src").replace(".svg",".png");});};$("form").submit(function(){var th=$(this);$.ajax({type:"POST",url:"mail.php",data:th.serialize()}).done(function(){alert("Thank you!");setTimeout(function(){th.trigger("reset");},1000);});return false;});try{$.browserSelector();if($("html").hasClass("chrome")){$.smoothScroll();}}catch(err){};$("img, a").on("dragstart",function(event){event.preventDefault();});});$('.sl').slick({slidesToShow:1,slidesToScroll:1,autoplay:true,autoplaySpeed:3000,responsive:[{breakpoint:767,settings:{arrows:false,slidesToShow:1,}},]});var textShowing=true;$(".open-close-menu").click(function(){if(textShowing){$(".nav").fadeIn(function(){textShowing=false;});}else{$(".nav").fadeOut(function(){textShowing=true;});}});










