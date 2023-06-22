$(function() {
	$(".btn").click(function() {
		$(".form-signin").toggleClass("form-signin-left");
    // /*ELIMINAR DESDE*/$(".form-signup").toggleClass("form-signup-left");/*ELIMINAR HASTA*/
    $(".frame").toggleClass("frame-long");
    // /*ELIMINAR DESDE*/$(".signup-inactive").toggleClass("signup-active");/*ELIMINAR HASTA*/
    $(".signin-active").toggleClass("signin-inactive");
    $(".forgot").toggleClass("forgot-left");   
    $(this).removeClass("idle").addClass("active");
	});
});

/*ELIMINAR DESDE*/
// $(function() {
// 	$(".btn-signup").click(function() {
//   $(".nav").toggleClass("nav-up");
//   $(".form-signup-left").toggleClass("form-signup-down");
//   $(".success").toggleClass("success-left"); 
//   $(".frame").toggleClass("frame-short");
// 	});
// });
/*ELIMINAR HASTA*/

$(function() {
	$(".btn-signin").click(function() {
  $(".btn-animate").toggleClass("btn-animate-grow");
  // $(".welcome").toggleClass("welcome-left");
  // $(".cover-photo").toggleClass("cover-photo-down");
  $(".frame").toggleClass("frame-short");
  // $(".profile-photo").toggleClass("profile-photo-down");
  // $(".btn-goback").toggleClass("btn-goback-up");
  $(".forgot").toggleClass("forgot-fade");
	});
});