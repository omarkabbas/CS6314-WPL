$(document).ready(function () {
    var r;
    $.ajax({
        url: '../js/data.json',
        dataType: "json",
        success: function (result) {
            r = result;
            r.forEach(element => {
                appendImages(element);
            });
        },
        error: function (e) {
            console.log(e);
        }
    });

    $(document).on('mouseenter', 'img', function (e) {
        $(this).addClass('gray');
        var img = r.find(e => {
            return e.title === $(this).attr('alt')
        });
        
        $(document.body).append(
            '<div id="preview">' +  
            '<img src="' + $(this).attr('src').replace('square', 'medium') + '"' +
            ' alt = "' + $(this).attr('alt') + '"' + '> ' + 
            '<p>' + $(this).attr('alt') 
            + '<br />'
            + '<i>' + img.city + ', ' + img.country + ' [' + img.taken + '] '+ '</i> </p>' + 
            '</div>'
        );
        $('#preview').css({
            "left": e.pageX,
            "top": e.pageY
        });
        $('#preview').fadeIn(1000); //fading over 1 sec period
    });
    $(document).on('mouseleave', 'img', function () {
        $(this).removeClass('gray');
        $('#preview').remove();
    });
    $(document).on('mousemove', 'img', function (e) {
        $('#preview').css({
            left: e.pageX,
            top: e.pageY + 15
        });
    });
});

function appendImages(image) {
    $('#imgContainer').append(
        '<img src="images/square/' 
        + image['path'] + '"' 
        + ' alt = "' + image['title'] + '"' + '> ' //setting alt attribute to title of each image object
    );
}