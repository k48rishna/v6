jQuery(document).ready(function() {

    // Image resize on viewport
	$(".header-img").height($(window).height());

	$(window).resize(function(){
			$(".header-img").height($(window).height());
	});

    //----------------------------------------------------------------    

    // Skills progress bar

    $(".progress .progress-bar").appear(function () {
        $('.progress .progress-bar').progressbar();
    });

    // Smooth Page Scrolling requires - Jquery Easing

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //----------------------------------------------------------------

    // Portfolio sorting

    jQuery('#portfolio-items').mixItUp();

    //----------------------------------------------------------------

    // Milestone counter

    jQuery('.counter').counterUp({
        delay: 10,
        time: 3000
    });
    
    // Animation reveal on scroll

    new WOW().init();

    //----------------------------------------------------------------

    // Smooth Page Scrolling requires - Jquery Easing

    jQuery('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
          $('html, body').stop().animate({
              scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    //----------------------------------------------------------------

    // Highlight top nav as scrolling occurs

    //     jQuery('body').scrollspy({
    //        target: '.navbar-static-top'
    // })

    //----------------------------------------------------------------

    // Closes Responsive Menu on Menu Item Click

        jQuery('.navbar-collapse ul li a').click(function() {
          $('.navbar-toggle:visible').click();
    });

    //----------------------------------------------------------------

    // Sticky Navigation

    jQuery(function() {
        $('#navigation').height($("#nav").height());
          $('#nav').affix({
            offset: { top: $('#nav').offset().top -15 }
        });


    //----------------------------------------------------------------

    // Scroll to top

    $(window).scroll(function() {
        if ($(this).scrollTop() > 400) {
            $('.scroll-top').fadeIn();
        } else {
            $('.scroll-top').fadeOut();
        }

    });



    // feedback button
    $('.feedback_button.btn').on("click", function() { 
        $.ajax({
            type: "POST",
            url: "https://api.acnapi.io/v1/feedback/",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify({
                "name" : document.getElementById('nameVal').value,
                "email" : document.getElementById('emailVal').value,
                "subject" : document.getElementById('subjectVal').value,
                "message" : document.getElementById('messageVal').value,
                "channel" : "beta.acnapi.io"
            }),
            success: function (response, textStatus, jqXHR) {
					swal("Success!", "Feedback sent!", "success");
               console.log('success');
            },
            error: function (jqXHR, textStatus, errorThrown) {
               swal("Oops...", "Something went wrong, Try again later!", "error");
               console.log(textStatums, JSON.stringify(errorThrown));
               console.log('fail');

            }

        })
    });

    // new tester for postcard sign up button
    $('.new_postcard_tester').on("click", function() {
		 var testerEmail = document.getElementById('postcardTesterEmail').value;
		 var testerName = document.getElementById('postcardTesterName').value;
		 var testerOrg = document.getElementById('postcardTesterOrg').value;
		// check for email format using regex
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var regexResult = re.test(testerEmail);
		console.log("result of email result: " + regexResult);
		
		if (regexResult && testerName && testerOrg) {
		 
		 console.log("postcard tester: " + testerEmail);
		 var params = {
			 email: testerEmail,
			 name: testerName,
			 organisation: testerOrg,
			 appName: 'AR postcard app'
		 }
		 var paramsToAppend = Object.keys(params).map(function(key) {
				if (typeof params[key] != "undefined") {
					return key + '=' + params[key];
				}
		 }).join('&');
        $.ajax({
			  // beforeSend: function (request) {
			  //                   request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
			  // 						request.setRequestHeader("Access-Control-Allow-Origin", '*');
			  // 						request.setRequestHeader("Access-Control-Allow-Methods", 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
			  // 						request.setRequestHeader("Access-Control-Allow-Headers", 'Content-Type, Content-Range, Content-Disposition, Content-Description');
			  // 						request.setRequestHeader("Access-Control-Max-Age", '1728000');
			  //               },
            type: "GET",
            url: "https://api.acnapi.io/v1/tester?" + paramsToAppend,
            dataType: "json",
            contentType: "application/json",
            success: function (response, textStatus, jqXHR) {
 					swal("Thanks for your interest. We'll be in touch soon.");
 					document.getElementById('postcardTesterEmail').value = "";
 					console.log(" new tester registered: " + testerEmail);
					console.log("textStatus: " + textStatus);
					console.log( response.errorMessage );
					console.log( response.message );
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Something went wrong!");
					 console.log(errorThrown);
            }
        		});
				
	 	  } else {
	 	  	  swal("You did not enter a valid email or details");
	 		  console.log("you did not enter a valid email");
		
	 	  }
				
				
});
    // new tester for menu sign up button
    $('.new_menu_tester').on("click", function() {
		 var testerEmail = document.getElementById('menuTesterEmail').value;
		 var testerName = document.getElementById('menuTesterName').value;
		 var testerOrg = document.getElementById('menuTesterOrg').value;

 		// check for email format using regex
 		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 		var regexResult = re.test(testerEmail);
 		console.log("result of email result: " + regexResult);
		
		if (regexResult && testerName && testerOrg) {
		 
		 console.log("menu tester: " + testerEmail);
		 var params = {
			 email: testerEmail,
			 name: testerName,
			 organisation: testerOrg,
			 appName: 'AR menu app'
		 }
		 var paramsToAppend = Object.keys(params).map(function(key) {
				if (typeof params[key] != "undefined")
				return key + '=' + params[key];
		 }).join('&');
        $.ajax({
			  // beforeSend: function (request) {
			  //                request.setRequestHeader("Content-Type", 'application/json;charset=UTF-8');
			  // 					request.setRequestHeader("Access-Control-Allow-Origin", '*');
			  // 					request.setRequestHeader("Access-Control-Allow-Methods", 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
			  // 					request.setRequestHeader("Access-Control-Allow-Headers", 'Content-Type, Content-Range, Content-Disposition, Content-Description');
			  // 					request.setRequestHeader("Access-Control-Max-Age", '1728000');
			  //            },
            type: "GET",
            url: "https://api.acnapi.io/v1/tester?" + paramsToAppend,
            dataType: "json",
            contentType: "application/json",
            success: function (response, textStatus, jqXHR) {
 					swal("Thanks for your interest. We'll be in touch soon.");
 					
					document.getElementById('menuTesterEmail').value = "";
					
					
					console.log(" new tester registered: " + testerEmail);
					console.log("textStatus: " + textStatus);
					
					console.log( response.errorMessage );
					console.log( response.message );
            },
            error: function (jqXHR, textStatus, errorThrown) {
                swal("Something went wrong!");
					 console.log(errorThrown);
            }
        })
		  
	  } else {
	  	  swal("You did not enter a valid email or details");
		  console.log("you did not enter a valid email");
		
	  }
		  
});

});
});
