$(document).ready(function(){
    $("h2").css({
        backgroundColor: "green"
    });

    $(".buttons").parent().css({
        backgroundColor: "red"
    });

    $(".module").children().css({
        backgroundColor: "blue"
    });

    $(".module li:eq(1)").css({
        backgroundColor: "green"
    });

    $("#myList li").first().css({
        backgroundColor: "yellow"
    });

    $("#slideshow li").last().css({
        backgroundColor: "black"
    });
    
    if ($("#search label").is("form")){
        alert(" “O elemento form é filho de Search")
    }
    else 
        alert("O elemento form não é filho de Search.");

    $("ul").not("#slideshow").css({
        backgroundColor: "blue"
    });

    $("ul p").css({
        backgroundColor: "pink"
    });

    $("#myListItem").text("Este é um novo item de lista");

    $(".selected").next().css({
        backgroundColor: "grey"
    });

    $(".input_text").prev().css({
        backgroundColor: "grey"
    });

    $("#listItem_2").siblings().css({
        backgroundColor: "green"
    });

    $("[src]").css({
        backgroundColor: "yellow"
    });

    $("#header, #nav[class^='selected']");

    $("input[type='text']");

    $("[value]");

    $("input[type!='submit']").css({
        backgroundColor: "red"
    });

    $("a[href^='blog']").css({
        backgroundColor: "green"
    });

    $("[value$='a']").css({
        backgroundColor: "red"
    });

    $("[href$='html']").css({
        backgroundColor: "grey"
    });
    
})

