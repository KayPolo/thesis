 window.addEventListener('DOMContentLoaded', function(e){
 	e.preventDefault();
 	// attachEvents();

	// var navOffset = $('nav').offset().top;

		// console.log(navOffset);

	//window.addEventListener("scroll",function(){
		// var scrollPos = (window.pageYOffset!=undefined)?window.pageYOffset:
		// (document.documentElement || document.body.parentNode||document.body).scrollPos;
		//});


		$(window).scroll(function(){
			var scrollPos = $(window).scrollTop();

			console.log(scrollPos);


			// var stickNav = $("nav");
			// stickyMenu(stickNav);

				// var stickMenu = $(".menubar");
				// stickyMenu(stickMenu);


			// function stickyMenu(banana){
			// 	if(scrollPos>= navOffset){
			// 			banana.addClass("fixed");
			// 		}
				
			// 	else{
			// 		banana.removeClass("fixed");
			// 	}

			// }	




		//THis is for change the color of the links in my navigation.
		var links = [$(".link1"),$(".link2"),$(".link3"),$(".link4"),$(".link5")];

		var teamOff = $("#team").offset().top-30;
		var servOff = $("#services").offset().top-30;
		var testOff = $("#testimonials").offset().top-30;
		var appOff = $("#appointment").offset().top-30;
		var contOff = $("#contact").offset().top-30;


		//Team Page
			if(scrollPos >= teamOff){
				links[0].addClass('purple');
				$(".t1").addClass('appear');
			}else{
				links[0].removeClass('purple');
				$(".t1").removeClass('appear');
			}

		//Services Page
			if(scrollPos >= servOff){
				links[0].removeClass('purple');
				links[1].addClass('purple');

				$(".t2").addClass('appear');
				
			}else{
				links[1].removeClass('purple');

				$(".t2").removeClass('appear');
			}

		//Testimonial Page
			if(scrollPos >= testOff){
				links[1].removeClass('purple');
				links[2].addClass('purple');

				$(".t3").addClass('appear');
				
			}else{
				links[2].removeClass('purple');

				$(".t3").removeClass('appear');
			}

		//Appointment Page
			if(scrollPos >= appOff){
				links[2].removeClass('purple');
				links[3].addClass('purple');

				$(".t4").addClass('appear');
				
			}else{
				links[3].removeClass('purple');

				$(".t4").removeClass('appear');
			}

		//Contact Page
			if(scrollPos >= contOff){
				links[3].removeClass('purple');
				links[4].addClass('purple');

				$(".t5").addClass('appear');
				
			}else{
				links[4].removeClass('purple');

				$(".t5").removeClass('appear');
			}


		});



 });


  	// function attachEvents(){

  	// 	$('nav li a').click(function(e) {
			// e.preventDefault();

	  //    	var myTarget = $(this.hash);
	  //    	myTarget = myTarget.length && myTarget
	      			
	  //       var targetOffset = myTarget.offset().top;
	  //      	$('html,body').animate({scrollTop: targetOffset}, 1000);
	
	  //    });

  	// }




	var mySideNav = document.getElementById("mySideNav");

function openNav(){
	mySideNav.style.width="30vw";


}

function closeNav(){
	mySideNav.style.width="0";
}

document.addEventListener('DOMContentLoaded', function(){ //since we don't have anything to triger the action of pushing all the links
														  //inside the HTML, we need to use this statement
														  //the meaning of this statement is when the you load the DOM, load as well the 
														  //function that contains all the information inside...

//There are two ways to do this. THis is the longer, but easier to understand

// 	var topNav = document.getElementById("myTopNav"); 
// 	topNav.innerHTML += "<a href = 'index.html'>HOME</a>"; 
// 	topNav.innerHTML += "<a href = 'about.html'>ABOUT</a>";
// 	topNav.innerHTML += "<a href = 'work.html'>WORK</a>";
// 	topNav.innerHTML += "<a href = 'more.html'>MORE</a>"; 
// 	topNav.innerHTML += "<a href = 'contact.html'>CONTACT</a>";

// 	var sideNav = document.getElementById("mySideNav");
// 	sideNav.innerHTML += "<a href = 'index.html'>HOME</a>"; 
// 	sideNav.innerHTML += "<a href = 'about.html'>ABOUT</a>";
// 	sideNav.innerHTML += "<a href = 'work.html'>WORK</a>";
// 	sideNav.innerHTML += "<a href = 'more.html'>MORE</a>"; 
// 	sideNav.innerHTML += "<a href = 'contact.html'>CONTACT</a>";   

// });


//This is and optimized version 
function addLinks(parent){ //here I'm using an argument for my function
							// so I can astore all the information without repeating it
	parent.innerHTML += "<a href = ''>HOME</a>"; 
	parent.innerHTML += "<a href = ''>ABOUT</a>";
	parent.innerHTML += "<a href = ''>WORK</a>";
	parent.innerHTML += "<a href = ''>MORE</a>"; 
	parent.innerHTML += "<a href = ''>CONTACT</a>";
}

	

	var sideNav = document.getElementById("mySideNav");
	addLinks(sideNav);  // here I'm saying, take all the information inside the
						// function addLink and substitute the argument (in this case the 
						//argument name is parent) with the variable sideNav 
});









