jQuery(function($) {
    $('#yasemin').mouseover(function() {
        //var dWidth = $(document).width() - 100, // 100 = image width
            //dHeight = $(document).height() - 100, // 100 = image height
         var nextX = Math.floor(Math.random() * ($(this).parent().width() - $(this).width() - 1) + 1),
            nextY = Math.floor(Math.random() * ($(this).parent().height() - $(this).height() - 1) + 1);
        $(this).animate({ left: nextX + 'px', top: nextY + 'px' });
    });
});

function playclip() {
if (navigator.appName == "Microsoft Internet Explorer" && (navigator.appVersion.indexOf("MSIE 7")!=-1) || (navigator.appVersion.indexOf("MSIE 8")!=-1)) {
if (document.all)
 {
  document.all.sound.src = "click.mp3";
 }
}

else {
{
var audio = document.getElementsByTagName("audio")[0];
audio.play();
}
}
}
