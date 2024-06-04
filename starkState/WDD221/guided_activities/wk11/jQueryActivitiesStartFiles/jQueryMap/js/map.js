//this line of code will begin to run ONLY when the document has fully loaded in the browser

//create an alert which test to make sure your code functions

/*
$(document).ready(function()
{
    alert('I am ready to go!');
});
*/

$(document).ready(function()
    {
        $('#place').change(function()
        {
            let placeSelected = $('#place').val(); //keyword val

            if( placeSelected === "visitedOk")
            {
                $('.visitedOk').addClass('visible');  //jquery command addClass
                $('.visitedOk').removeClass('invisible'); //jquery command removeClass
                $('.visitedNOTOk').addClass('invisible');
                $('.noDesire').addClass('invisible');
                $('.selectAll').addClass('invisible');
            }

            if( placeSelected === "visitedNOTOk")
            {
                $('.visitedOk').addClass('invisible');  
                $('.visitedNOTOk').addClass('visible');
                $('.visitedNOTOk').removeClass('invisible');
                $('.noDesire').addClass('invisible');
                $('.selectAll').addClass('invisible');
            }

            if( placeSelected === "noDesire")
            {
                $('.visitedOk').addClass('invisible');  
                $('.visitedNOTOk').addClass('invisible');
                $('.noDesire').addClass('visible');
                $('.noDesire').removeClass('invisible');
                $('.selectAll').addClass('invisible');
            }

            if( placeSelected === "All")
            {
                $('.place').removeClass('invisible');  
                $('.place').addClass('visible');
            }
    });
});