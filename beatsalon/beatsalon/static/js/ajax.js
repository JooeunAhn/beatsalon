$('#sendcomment form').submit('click', function(e) {
$.ajax({
    url: $(this).attr('action'),
    type: $(this).attr('method'),
    data:{
        'author': $('#id_author').val(),
        'message' : $("#id_message").val(),
        'csrfmiddlewaretoken': $('input[name=csrfmiddlewaretoken]').val(),
        'formtype': 'comment-add',

    },
    success: function(data) {
        if (data){
            $('#id_author').val('');
            $('#id_message').val('');
            $('#for_comment').html(data);
        }
        else{
            console.error('No data');
        }
    },
    error: function(xhr,errmsg,err) {
        $('#results').html('<div class="alert alert-danger">에러가 발생했습니다 : '+errmsg+'('+xhr.status+')'+'<a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a></div>');
    }
});
});