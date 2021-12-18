$("#movie-form").on("submit",(function(e){
    e.preventDefault()
    let title = $("#title").val()
    let rating =$("#rating").val()
    var button= $('<input type="button" value="delete"/>')
    $("ul").append($("<li>",{text:`${title} : ${rating}  `}).append(button))
}))

$("ul").on("click","li", function(e){
    $(e.target).closest("li").remove()
})