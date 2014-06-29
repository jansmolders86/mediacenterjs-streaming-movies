$(function(){
    
    $('#search').focus();
    $('#search').on('click',function(e){
        e.preventDefault();

    });
    
    $('#search').on('change', function(){

        var magnetLink = $(this).val();

        $.ajax({
            type: "POST",
            data : {"magnet": magnetLink},
            url: "/streaming-movies/file/",
            success: function (data) {
                console.log(data);
            }
        });
        
    });
});