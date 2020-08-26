$(function(){
    $(".box").each(function () {
     $(this).click(function () {
       var img_name = $(this).find("a");
       var img_src = $(img_name).attr("phref");
      //  var img_title = $(img_name).attr("title");
       var img_size = $(img_name).attr("data");
       $(".pop").show();
       $(".pop img").attr("src", img_src);
      //  $(".pop .txt").text( img_title);
       $(".pop img").width(img_size);
     });

     $('.close, .pop').click(function(){
       $(".pop").hide();
       $(".pop img").attr("src", '');
       })
   });

    /*   $('.graphic_box a').each(function(){
      $('.pop').hide();
      $(this).click(function(){
        var ahref = $(this).attr('href');
        $('.pop').hide();
        $(ahref).fadeIn();
        $('.graphic_box a').css({background:'none'});
        $(this).css({'background-color':'orange'});

        $('.close').click(function(){
          $(ahref).fadeOut(500);
            })


       
      })
  })*/
  $(window).scroll(function(){ //윈도우를 스크롤 했을 때
    //alert($(document).scrollTop());
      if($(document).scrollTop()>= 700){
       $('#section2 .none div').addClass('run')
      } //css 배경에 애니메이트으로 처리하고 싶으면 jquery-ui.min.js파일을 복사해서 링크 걸 것
    else {
      $('#section2 .none div').removeClass('run')}
    })

   });