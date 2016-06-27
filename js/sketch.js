function divPad(n){
	var s=500/n;
	for(var i=0;i<n*n;i++)
	{
		$('#container').append("<div class=\"grid\"> </div>");
		$('.grid').height(s);
		$('.grid').width(s);
	}
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function def(){
	var num = prompt("Enter number below 30");
	$('.grid').remove();
	divPad(num);
	$('.grid').hover(function(){
		$(this).css("background-color","#f0f0f0");
	});
}


function tra(){
	var num = prompt("Enter number below 30");
	$('.grid').remove();
	divPad(num);
	$('.grid').hover(function(){
		$(this).fadeOut('fast');
	},
	function(){
		$(this).fadeIn('fast');
	});
}

function bru(){
	var num = prompt("Enter number below 30");
	$('.grid').remove();
	divPad(num);
	$('.grid').hover(function(){
		$(this).animate({opacity:'-=.1'},100)
	});

}

function color(){
	var num = prompt("Enter number below 30");
	$('.grid').remove();
	divPad(num);
	$('.grid').hover(function(){
		$(this).css("background-color",getRandomColor());
	});
}





$(document).ready(function(){
	divPad(10);
	def();
});

