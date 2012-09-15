function yn_switch(element,options)
{
	var y_text = "Yes";
	var n_text = "No";

	if(options!=undefined){
		this.options = options;
		if(this.options["y_text"]!=undefined){
    		var y_text = this.options["y_text"];
    	}
   	    if(this.options["n_text"]!=undefined){
    		var n_text = this.options["n_text"];
    	}
	}
    	
    this.element = element;
    var position = false;
    var sliding = false;
    var element = this.element;
        
    $(this.element).css("display","none");
    $(this.element).after("<div class='yn_switch_outer_div'><div class='yn_switch'><div class='y'>"+y_text+"</div><div class='switcher'></div><div class='n'>"+n_text+"</div></div></div>");
    if($(this.element).attr("checked")){
    	position = true;
    } else{
    	$(this.element).next().children().css("margin-left","-41px");
    }
    $(this.element).next().bind("click",function(){
    	if(position === true && sliding === false){
			sliding = true;
			$(this).children().animate({
			    marginLeft: -41
			}, 300, function() {
			    sliding = false;
			    position = false;
			    $(element).removeAttr("checked");
			});
		}else if(position === false && sliding === false){
			this.sliding = true;
			$(this).children().animate({
				marginLeft: 0
			}, 300, function() {
			    sliding = false;
			    position = true;	
        	    $(element).attr("checked","checked");
			});
		}	
    });
}