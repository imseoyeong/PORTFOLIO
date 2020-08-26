$(function(){
  //그래픽부분 팝업창 작동
    $(".box").each(function () {
     $(this).click(function () {
       var img_name = $(this).find("a");
       var img_src = $(img_name).attr("phref");
      //  var img_title = $(img_name).attr("title");
       var img_size = $(img_name).attr("data");
       var img_padding = $(img_name).attr("padding");
       $(".pop").show();
       $(".pop img").attr("src", img_src);
      //  $(".pop .txt").text( img_title);
       $(".pop img").width(img_size);
       $(".pop img").css({'margin-top':img_padding});
     });

     $('.close, .pop').click(function(){
       $(".pop").hide();
       $(".pop img").attr("src", '');
       })
   });

    

   //스킬 스크롤 내렸을 때 작동하는 거
  $(window).scroll(function(){ //윈도우를 스크롤 했을 때
    //alert($(document).scrollTop());
      if($(document).scrollTop()>= 700){
       $('#section2 .none div').addClass('run')
      } //css 배경에 애니메이트으로 처리하고 싶으면 jquery-ui.min.js파일을 복사해서 링크 걸 것
    else {
      $('#section2 .none div').removeClass('run')}
    })

   });