/*
* Author : Mrugesh Mistry
*/

(function($){
    $.fn.extend({ 
        //plugin name - animateThumbnail
        animateThumbnail: function(options) {
 
            var defaults = {
                height: '370px',
                width: '250px',
                shadowColor: '#000000',
				shadowX:'0px',
				shadowY:'0px',
				shadowBlur:'5px',
				ieShadowStrength:15,
				ieShadowDirection:45,
				border:'none',
				hoverDuration: 200,
				outDuration:200,
				easeIn: 'easeInQuad',
				easeOut: 'easeOutQuad',
				extendBoxBy:50,
				display:'block',
				float:'left', 
				marginRight:'50px',
				defaultBackgroundPositionTop:'-25',
				defaultBackgroundPositionLeft:'0',
				hoverBackgroundPositionTop:'0',
				hoverBackgroundPositionLeft:'0',
				overlayBackground:'#000',
				overlayOpacity:'0.3'

            };
             
            var options = $.extend(defaults, options);
         	
            return this.each(function() {
                  var o =options;
				  var shadow = o.shadowX+' '+o.shadowY+' '+o.shadowBlur+' '+o.shadowColor;
                  var obj = $(this);               
                  var items = $("li", obj);
                  var overlay = '<div style="position:relative; width:100%; height:100%; background:'+o.overlayBackground+'; opacity:'+o.overlayOpacity+'; -moz-opacity:'+o.overlayOpacity+'; filter:alpha(opacity='+(o.overlayOpacity*100)+'); -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity='+(o.overlayOpacity*100)+')""  class="overlay"></div>';
				   
                  $("li", obj).css({
						height:o.height,
						width: o.width,
						'box-shadow': shadow,
						'-moz-box-shadow': shadow,
						'-webkit-box-shadow': shadow,
						'*background':'#000000',
						
						'-ms-filter': "progid:DXImageTransform.Microsoft.Shadow(Strength="+o.ieShadowStrength+", Direction="+o.ieShadowDirection+", Color='"+o.shadowColor+"')",
						'filter': "progid:DXImageTransform.Microsoft.Shadow(Strength="+o.ieShadowStrength+", Direction="+o.ieShadowDirection+", Color='"+o.shadowColor+"')",
						border: o.border ,
						float: o.float,
						'margin-top': o.extendBoxBy,
						'margin-right': o.marginRight,
						'display':o.display,
						'cursor':'pointer',
						'background-position':o.deafultBackgroundPositionLeft+'px '+o.defaultBackgroundPositionTop+'px',
						'display':'block'
					});               
                  
                   
                  items.hover(function() {
                      $(this).append(overlay);
					  $(this).stop().animate({
						  	backgroundPosition:o.hoverBackgroundPositionLeft+'px '+o.hoverBackgroundPositionTop+'px',
						  	height: parseInt(o.height) + o.extendBoxBy +'px',
							'margin-top': (o.extendBoxBy/2)+'px'
							
					  }, {
							duration: o.hoverDuration, // how fast we are animating
							easing: o.easeIn, // the type of easing
							complete: function() { // the callback
								
							}} );
                  },function() {
	                 $(this).find('.overlay').remove();
		  			 $(this).stop().animate({
						 
							backgroundPosition:o.defaultBackgroundPositionLeft+'px '+o.defaultBackgroundPositionTop+'px',
							height: parseInt(o.height) +'px',
							'margin-top': o.extendBoxBy+'px'
					 } ,{
							duration: o.outDuration, // how fast we are animating
							easing: o.easeOut, // the type of easing
							complete: function() { // the callback
								
					 		}
						});	
                  });
            });
        }
    });
})(jQuery);