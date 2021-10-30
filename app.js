$("#meme-btn").on('click', function(e){
    e.preventDefault();
    $("#meme-form").submit();
})

$("#meme-form").on('submit', function(e) {
    e.preventDefault();
    let form_data = $(this).serializeArray();
    let text = form_data[0]['value'];
    $("#page-title").css("display", "block");
    $("#meme-text").text(text);
})