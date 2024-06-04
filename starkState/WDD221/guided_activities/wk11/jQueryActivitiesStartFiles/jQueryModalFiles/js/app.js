// Hahna Seaman, Web Development with JavaScript, Wk11 Guided Activity, 4/1/24 

// jQuery code for a modal

$(".open").on("click", function()
{
	$(".overlay, .modal").addClass("active");
});

$(".close, .overlay").on("click", function() 
{
	$(".overlay, .modal").removeClass("active");
});

$(document).keyup(function(e)
{
	if (e.keyCode === 27)
	{
		$(".overlay, .modal").removeClass("active");
	}
});