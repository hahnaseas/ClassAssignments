// Hahna Seaman, Web Development with JavaScript, Wk11 Guided Activity, 4/1/24 

const box = document.querySelector('.box');

// box.style.display = 'none'; //
 
// $('.box').hide(); //

/* box.addEventListener('click', function() {
	alert('You clicked me!'); 
	}); */

$('.box').click(function(){
	alert('You clicked me with jQuery');
});