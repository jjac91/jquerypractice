$(function() {
    console.log("Let’s get ready to party with jQuery!")
})
$("article img").addClass("image-center")
$("article p:last-child").remove()
$("#title").css("font-size",Math.random()*100)
$("ol").append($("<li>",{text:"I like to eat pies"}))
$("aside").empty().append($("<p>", {text: "That was a silly list"}));
$(".form-control").on("keyup change",function(){
    let r =$(".form-control").eq(0).val()
    let g =$(".form-control").eq(1).val()
    let b =$(".form-control").eq(2).val()
    $("body").css("background-color", 
    "rgb(" + r + "," + g + "," + b + ")")
})
$("img").on("click",function(e){
    $(e.target).remove()
})


