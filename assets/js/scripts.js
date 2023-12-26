
$(document).ready(function(){
    
        const clickx= document.getElementById('pencet');
        clickx.addEventListener('click', function(){
        clickx.classList.toggle('Diam');
        });

        $('#menus').click(function(){
            $('.menu').toggleClass('tanvir');
        })

        $('.minus i').click(function(){
            $('').toggleClass('tanvir');
        })

        // accordion
        const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
   accordionItemHeader.addEventListener("click", event => {
    
     // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
//     const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
//     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
//        currentlyActiveAccordionItemHeader.classList.toggle("active");
//        currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
//      }

     accordionItemHeader.classList.toggle("active");
     const accordionItemBody = accordionItemHeader.nextElementSibling;
     if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
     }
     else {
       accordionItemBody.style.maxHeight = 0;
     }
    
   });
});

      // owl-carousel     
    $('.carousel1').owlCarousel({
 
      items:4,
      loop:true,
      autoplay:true,
      slideTransition: 'linear',
      autoplayTimeout: 5000,
      autoplaySpeed: 5000,
      autoplayHoverPause: false,
      responsiveClass:true,
      nav:false,
      dots:false,
       responsive:{
          0:{
              items:2,
               
          },
           768:{
              items:3,
               
          },
          990:{
              items:3,
               
          },
          1100:{
              items:4,
               
          },
      }
  
  });
    // owl-carousel2     
    $('.carousel2').owlCarousel({
 
        items:1,
        loop:true,
        autoplay:true,
        slideTransition: 'linear',
        autoplayTimeout: 2000,
        autoplaySpeed: 1000,
        autoplayHoverPause: false,
        responsiveClass:true,
        nav:true,
        navText:['','<span class="btn-1">next</span>'],
        dots:false,
         responsive:{
            0:{
                items:1,
                 
            },
             768:{
                items:1,
                 
            },
            990:{
                items:1,
                 
            },
            1100:{
                items:1,
                 
            },
        }
    
    });
    // slide toggle
    $(".filter-search ").click(function () {
        $(this).next(".shop-drop").slideToggle("fast");
         $(this).find(".arrow").toggleClass('rotate');
          $(this).find(".arrow").toggleClass('rotate-reset');
        
      });

    //   slide range
    var $slider = $("#slider-range");
    //Get min and max values
    var priceMin = $slider.attr("data-price-min"),
       priceMax = $slider.attr("data-price-max");
 
    //Set min and max values where relevant
    $("#price-filter-min, #price-filter-max").map(function(){
         $(this).attr({
             "min": priceMin,
             "max": priceMax
         });
     });
     $("#price-filter-min").attr({
         "placeholder": "min " + priceMin,
         "value": priceMin
     });
     $("#price-filter-max").attr({
         "placeholder": "max " + priceMax,
         "value": priceMax
     });
 
    $slider.slider({
       range: true,
       min: Math.max(priceMin, 0),
       max: priceMax,
       values: [priceMin, priceMax],
       slide: function(event, ui) {
          // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
          $("#price-filter-min").val(ui.values[0]);
          $("#price-filter-max").val(ui.values[1]);
       }
    });
 
   
     $("#price-filter-min, #price-filter-max").map(function(){
         $(this).on("input", function() {
             // let pmin = $("#price-filter-min").val(),
             // 	 pmax = $("#price-filter-max").val();
             // if( 
             // 	pmin >= priceMin //bigger than min
             // 	&& pmin <= pmax && pmax <= priceMax //smaller than max
             // ) {
             // 	updateSlider();
             // }
             updateSlider();
         });
     });
     function updateSlider(){
         $slider.slider("values", [$("#price-filter-min").val(), $("#price-filter-max").val()]);
     }
     
     
     //Only once on load, add classes to checklists
     $( ".checklist" ).map(function(){
         let $list = $(this);
         if($list.children().length > 3){
             $list.addClass('collapsed');
         }
         //function to remove class (once) when more is clicked
         function handleMore(e){
             if($(e.target).is('ul')){
                 $(this).removeClass('collapsed');
                 $(this).addClass('revealed');
                 
                 //make it two columns if items are not long and there's many
                 if($(this).hasClass("short") && $(this).children().length >= 5){
                     $(this).addClass('columns');
                 }
                 //remove event handler 		
                 $(this).off('click.moreButton');
             }
         }
         //and attached event handler to ul
         $list.on('click.moreButton', handleMore);
     });

    //  shop-details-top-mobile
      
            $( '.shop-details-top-mobile' ).click(function(){
                $('.shop-details-left').toggleClass('expand')
                })
    // count btn
   
		$('.count span').on('click', function () {
			
			var personIndex = $(this).index(),
			personThis = $(this).parent().find('input'),
			personCount = personThis.val(),
			personMax = personThis.attr('data-max'),
			personMin = personThis.attr('data-min');
			if (personIndex == 0) {
				personCount = Number(1) + Number(personCount);
				if (personCount <= personMax) {
					$(this).parent().find('input').val(personCount)
				}
			} else {
				personCount = Number(personCount) - Number(1);
				if (personCount >= personMin) {
					$(this).parent().find('input').val(personCount)
				}
			}
		})


  });










