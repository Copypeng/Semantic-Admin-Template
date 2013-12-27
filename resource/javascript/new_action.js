$(document).ready(function() {
 	var validInput = true;

    $('.ui.dropdown')
	.dropdown();

    $("#actType").change(function(){
		switch($(this).val())
		{
			case "2":	//email
				$(".weibo").hide();
				$(".email").show();
				$(".url").hide();
				$(".mobile_push").hide();
				break;
			case "3":
				$(".weibo").hide();
				$(".email").hide();
				$(".url.field").show();
				$(".mobile_push").hide();
				break;
			case "4":	//weibo
				$(".email").hide();
				$(".weibo").show();
				$(".url").hide();
				$(".mobile_push").hide();
				break;
			case "6":	//Mobile Push
				$(".email").hide();
				$(".weibo").hide();
				$(".url").hide();
				$(".mobile_push").show();
				break;
			default:
				break;
		}
	});
});
