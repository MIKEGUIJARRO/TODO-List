//Check specific TODOS by clicking  

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });

    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.charCode === 13) {
        var newItem = $(this).val();

        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + newItem + "</li>");

        $(this).val("");
    }
});

$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});