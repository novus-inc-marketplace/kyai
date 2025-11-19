"use strict";

$(document).ready(function () {
	/* Video Lightbox */
	if (!!$.prototype.simpleLightboxVideo) {
		$('.video').simpleLightboxVideo();
	}

	/*ScrollUp*/
	if (!!$.prototype.scrollUp) {
		if (prefersReducedMotion()) {
			$.scrollUp({
				scrollSpeed: 0 // Disable animation
			});
		} else {
			$.scrollUp(); // Use default animation
		}
	}

	/*Responsive Navigation*/
	// Helper function to check for prefers-reduced-motion
	function prefersReducedMotion() {
		return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	}

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			if (prefersReducedMotion()) {
				$("nav#nav-mobile ul.expanded").removeClass("expanded").hide();
			} else {
				$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			}
			$(this).removeClass("open");
		} else {
			if (prefersReducedMotion()) {
				$("nav#nav-mobile ul").addClass("expanded").show();
			} else {
				$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			}
			$(this).addClass("open");
		}
	});

	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-mobile ul a").on("click",function() {
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			if (prefersReducedMotion()) {
				$("nav#nav-mobile ul.expanded").removeClass("expanded").hide();
			} else {
				$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			}
			$("#nav-trigger span").removeClass("open");
		}
	});

	/* Sticky Navigation */
	if (!!$.prototype.stickyNavbar) {
		$('#header').stickyNavbar();
	}

	$('#content').waypoint(function (direction) {
		if (direction === 'down') {
			$('#header').addClass('nav-solid fadeInDown');
		}
		else {
			$('#header').removeClass('nav-solid fadeInDown');
		}
	});

	// Impact Counters Animation
	$('.impact-counters').waypoint(function(direction) {
		if (direction === 'down') {
			if (prefersReducedMotion()) {
				$('.counter').each(function () {
					var $this = $(this);
					$this.text(parseInt($this.attr('data-target')).toLocaleString('en-US'));
				});
			} else {
				$('.counter').each(function () {
					var $this = $(this);
					jQuery({ Counter: 0 }).animate({ Counter: $this.attr('data-target') }, {
						duration: 2000,
						easing: 'swing',
						step: function () {
							$this.text(Math.ceil(this.Counter).toLocaleString('en-US'));
						}
					});
				});
			}
			this.destroy(); // Destroy waypoint after animation to prevent re-triggering
		}
	}, {
		offset: '80%' // Trigger when 80% of the element is visible
	});

	// Form Submission Stub for Volunteer Form
	$('.rsvp-form').on('submit', function(e) {
		e.preventDefault(); // Prevent default form submission

		const form = $(this);
		const formData = {
			name: form.find('#volunteerName').val(),
			email: form.find('#volunteerEmail').val(),
			skills: form.find('#volunteerSkills').val()
		};

		console.log('Volunteer Form Data:', formData);

		// Simulate API call
		setTimeout(() => {
			const success = Math.random() > 0.2; // 80% chance of success

			if (success) {
				console.log('Form submission successful!');
				alert('Thank you for signing up to volunteer! We will be in touch shortly.');
				form[0].reset(); // Clear the form
			} else {
				console.error('Form submission failed. Please try again.');
				alert('There was an error submitting your form. Please try again.');
			}
		}, 1000); // Simulate 1 second network delay
	});

});


/* Preloader and animations */
$(window).load(function () { // makes sure the whole site is loaded
	$('#preloader').delay(1500).fadeOut('slow'); // will fade out the preloader after 1.5 seconds
	$('body').delay(1500).css({'overflow-y': 'visible'}); // Delay body overflow change as well

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}
});