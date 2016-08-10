$("#sendcomment form").submit(function(e){
    console.log("create post is working");
    $.ajax({
        url: "", //the end point
        type: "POST", //http method
        data: $(this).serialize(),
        success: function(data){
            $('.caption').append('<p id="cmt_title"></p>');
            $('#cmt_title').html($('#author').val());

            $('.caption').append('<p class="element" id="cmt_content"</p>');
            $('#cmt_content').html($('#message').val());


            $('#author').val('');
            $('#message').val('');

        }
    });
e.preventDefault();
});
