$(function () {
  // console.log("시작");

  // 1. classList
  //   $(".menu > li").hover(
  //     function () {
  //       // console.log(this);
  //       $(this).find(".submenu").addClass("active");
  //     },
  //     function () {
  //       $(this).find(".submenu").removeClass("active");
  //     },
  //   );
  // [참고]
  // $(".menu > li").hover(()=>{
  //     console.log(this);
  // })
  // ()=>{} 화살표 함수 사용하면 this가 document 전체를 가리킨다.

  // 2. toggleClass 를 사용하면 위의 classList를 한 번에 작업 가능
  //   $(".menu > li").hover(function () {
  //     $(this).find(".submenu").toggleClass("active");
  //   });

  // 3. 전체 submenu를 slideDown / slideUp
  //   $(".menu").hover(
  //     function () {
  //       // console.log(this);
  //       $(".submenu").stop().slideDown(400);
  //     },
  //     function () {
  //       $(".submenu").stop().slideUp(400);
  //     },
  //   );

  // 4. 전체 submenu를 slideToggle (= slideDown + slideUp)
  //   $(".menu").hover(function () {
  //     $(".submenu").stop().slideToggle(400);
  //   });

  // 5. 전체 메뉴 fadeToggle
  //   $(".menu").hover(function () {
  //     $(".submenu").stop().slideToggle(400);
  //   });

  // 6. 각 메뉴의 서브메뉴를 각각 slideToggle
  //   $(".menu > li").hover(function () {
  //     $(this).find(".submenu").stop().slideToggle(400);
  //   });

  // 7. 전체 메뉴 + 헤더 변경
  //   $(".menu").hover(function () {
  //     $(".submenu , .header-bg").stop().slideToggle(400);
  //   });

  // 8. li서브메뉴 + 헤더배경
  $(".menu>li").hover(
    function () {
      $(this).find(".submenu").stop().slideDown(400);
      $(".header-bg").stop().slideDown(400);
    },
    function () {
      $(this).find(".submenu").stop().slideUp(400);
      $(".header-bg").stop().slideUp(400);
    },
  );
});
