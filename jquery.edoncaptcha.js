(function($){

	jQuery.fn.edoncaptcha = function(options){

		var element = this; // referencen per forme
		var submit = $(this).find('input[type=submit]');
		$('<label id="edoncaptchatext"></label>').insertBefore(submit);
		$('<input type="text" class="textbox" id="edoncaptchainput"/><br/><br/>').insertBefore(submit);
		var input = this.find('#edoncaptchainput'); 
		var label = this.find('#edoncaptchatext'); 
		
		$(element).find('input[type=submit]').attr('disabled','disabled'); 

		
		var randomNr1 = 0; 
		var randomNr2 = 0;
		var totalNr = 0;
		

		
		//var options = $.extend(defaults,options);

		randomNr1 = Math.floor(Math.random()*10);
		randomNr2 = Math.floor(Math.random()*10);
		totalNr = randomNr1 + randomNr2;
		var texti = "What is "+randomNr1+" + "+randomNr2;
		$(label).text(texti);
		
	
		$(input).keyup(function(){

			var nr = $(this).val();
			if(nr==totalNr)
			{
				$(element).find('input[type=submit]').removeAttr('disabled');				
			}
			else{
				$(element).find('input[type=submit]').attr('disabled','disabled');
			}
			
		});

		$(document).keypress(function(e)
		{
			if(e.which==13)
			{
				if((element).find('input[type=submit]').is(':disabled')==true)
				{
					e.preventDefault();
					return false;
				}
			}

		});

	};

})(jQuery);
