//     Facebook

window.fbAsyncInit = function() {
    FB.init({
      appId      : '217071421678331', // App ID
      channelUrl : 'channel.html', // Channel File
      status     : true, // check login status
      cookie     : true, // enable cookies to allow the server to access the session
      xfbml      : true  // parse XFBML
    });

    // Código Adicional de Facebook
  };

  // Lanzar el SDK Asincrónicamente
  (function(d){
     var js, id = 'facebook-jssdk'; if (d.getElementById(id)) {return;}
     js = d.createElement('script'); js.id = id; js.async = true;
     js.src = "//connect.facebook.net/en_US/all.js";
     d.getElementsByTagName('head')[0].appendChild(js);
   }(document));
   
/********************** Quoting Change */

$(document).ready(function(){

$("blockquote").hover(

  )
}
)
