
$(document).ready(function() {

	function showMessage1() {
		$(".message1").fadeIn(1500);
		$(".message1").delay(200);
		//$(".message1").fadeOut(800, showMessage2());
    showMessage2();
	}

	function showMessage2() {
		$(".message2").delay(1000)
		$(".message2").fadeIn(1500);
	}

	showMessage1();

	$(".message2").hover(
		function() {
			var $this = $(this);
			$this
				.data("prehovercolor", $this.css('color'))
    			.css('color', '#fff141');
  		},
  		function() {
  			var $this = $(this);
  			$this
  				.css('color',$this.data('prehovercolor'));
  		}
  	);

	$(".message2").click(function(e) {
    	slideScreen($("#welcome"), $("#main"));
  	});

  	function slideScreen(curr, next) {
  		curr.hide();
  		next.css("visibility", "visible");
  		next.fadeIn();
	}

  $(".endmessage").click(function(e) {
    location.reload();
  });

	
/*input list-->input and input-enter*/

function addtext(){   
   var inp = document.getElementById('input').value;   
     $(inp).appendTo('#list_of_struggles');
    }


});




