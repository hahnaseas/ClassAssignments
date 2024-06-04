// Hahna Seaman, Web Development with JavaScript, Wk11 Guided Activity, 4/1/24


$('#flashMessage').hide();

$('#previewButton').click(function() {
	const title = $('#blogTitleInput').val();
	const content = $('#blogContentInput').val();
	
	$('#blogTitlePreview').text(title);
	$('#blogContentPreview').html(content);

	$('#flashMessage')
		.slideDown(1000)
		.delay(3000)
		.slideUp();
	});

// store text in variables to test the code

const title = "My First Blog Post";
const content = "Hello World, <strong>jQuery</strong> is FUN!";

$('#blogTitlePreview').text(title);
$('#blogContentPreview').html(content);
	