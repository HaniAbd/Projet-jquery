$(document).ready(function () {
    $("#btn1").click(function () {
        $("#par1").hide(3000,alert("paragraph is hidden now"));
    });
    $("#btn2").click(function () {
        $("#par1").show("slow");
    });
    $("#btn3").click(function () {
        $("#par1").css("color","#F00");
    });
    $("#par1").mouseenter(function () {
        $(this).css("color","#00F");
    });
    $("#par1").mouseleave(function () {
        $(this).css("color","#000");
    });
    $("#btn4").click(function () {
        $("#par2").fadeIn(2000);

    });
    $("#btn5").click(function () {
        $("#par2").fadeOut(2000,alert("paragraph fade OUT"));
    });
    $("#btn6").click(function () {
        $("#box").slideUp(2000,function () {
            $("#box").css("color","#000")
        });;
    });
    $("#btn7").click(function () {
        $("#box").slideDown(2000,function () {
            $("#box").css("color","#FFF")
        });
    });
    $("#btn8").click(function () {
        $(".login-wrap").animate({
            width:'350px',
            left:'100px'
        },2000);
        $("h2").animate({
            top:'10px'
        },2000);

        $("#un").animate({
            width:'80%',
            marginLeft:'10%',
            marginBottom:'25px',
            height:'40px'
        },2000);
        $("#pw").animate({
            width:'80%',
            marginLeft:'10%',
            marginBottom:'25px',
            height:'40px'
        },2000);

    });


});

