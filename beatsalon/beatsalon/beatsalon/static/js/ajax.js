

$("#sendcomment form").submit(function(e){
    console.log("create post is working");
    $.ajax({
        url: "", //the end point
        type: "POST", //http method
        data: $(this).serialize(),
        success: function(data){
            $('#cmt_title').html($('#author').val());
            $('#cmt_content').html($('#message').val());
            $('#author').val('');
            $('#message').val('');

        }
    });
e.preventDefault();
});
