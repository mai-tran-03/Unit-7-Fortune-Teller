/* These are events */
$("button").click(function() {
    $(".prediction").show();
    $(".information").hide();
    let answer1 = $(".name").val();
    let answer2 = $(".often").val();
    let answer3 = $(".long").val();
    let product = (answer2 * answer3) * 52;
    $(".prediction").append(answer1 + ", you will walk " + product + " miles by 2023.");
    console.log(product);
});

/* This is the logic */
$(".prediction").hide();