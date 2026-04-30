$(function(){
    let chk = $("#chk")
    // console.log(chk);
    if($.cookie("popup") !== "none"){
        $(".notice-wrap").fadeIn("fast");
    }  
    $(".closeBtn").click(function(){
        if(chk.is(":checked")){
            $.cookie("popup" , "none" , {expires:3 , path:"/"});
        }
        $(".notice-wrap").fadeOut("fast");
    });
});