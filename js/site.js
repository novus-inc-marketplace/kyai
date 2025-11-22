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

	// --- Improved Form Handling ---

	// Generic Form Validator
	function validateForm(form) {
		let isValid = true;
		form.find('[required]').each(function() {
			if ($(this).val() === '') {
				isValid = false;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});
		return isValid;
	}

	// Volunteer Form Submission
	$('.rsvp-form').on('submit', function(e) {
		e.preventDefault();
		const form = $(this);

		if (validateForm(form)) {
			// Simulate API call
			setTimeout(() => {
				alert('Thank you for signing up to volunteer! We will be in touch shortly.');
				form[0].reset();
			}, 500);
		} else {
			alert('Please fill out all required fields.');
		}
	});

	// --- Adoption Flow ---
	let cart = [];

	// Add to Cart
	$('.add-to-cart').on('click', function() {
		const productCard = $(this).closest('.product-card');
		const itemName = productCard.find('h4').text();
		const itemPrice = parseFloat(productCard.find('.price').text().replace(/[^0-9.-]+/g,"")); // Robust parsing for price

		cart.push({ name: itemName, price: itemPrice });
		updateCartDisplay();

		// Scroll to cart summary
		$('html, body').animate({
			scrollTop: $(".cart-summary").offset().top - 100 // Adjust offset for header
		}, 500);
	});

	// Update Cart Display
	function updateCartDisplay() {
		const cartItemsContainer = $('#cart-items');
		const cartTotalContainer = $('#cart-total');
		const cartSummary = $('.cart-summary');

		cartItemsContainer.empty();
		let total = 0;

		if (cart.length > 0) {
			cart.forEach(item => {
				cartItemsContainer.append(`<li>${item.name} - ${item.price}</li>`);
				total += item.price;
			});
			cartTotalContainer.text(`${total.toFixed(2)}`);
			cartSummary.slideDown();
		} else {
			cartSummary.slideUp();
		}
	}

	// Proceed to Checkout
	$('.checkout-stub .button').on('click', function() {
		if (cart.length > 0) {
			alert('Thank you for your adoption! Your contribution makes a real difference. (This is a demonstration - no payment was processed).');
			cart = [];
			updateCartDisplay();
		} else {
			alert('Your cart is empty. Please choose a seedling to adopt first.');
		}
	});

});


/* Preloader and animations */
// Ensure body overflow is hidden immediately to prevent scrolling before content is ready
$('body').css({'overflow-y': 'hidden'});

$(window).on('load', function () { // makes sure the whole site is loaded
	// Fade out the preloader after a delay
	$('#preloader').delay(1500).fadeOut('slow', function() {
        // After preloader fades out, make body overflow visible
        $('body').css({'overflow-y': 'visible'});
    });

    // Fallback in case load event doesn't fire for some reason
    setTimeout(function(){
        $('#preloader').fadeOut('slow', function() {
            $('body').css({'overflow-y': 'visible'});
        });
    }, 5000); // Hide preloader after 5 seconds regardless

	/* WOW Elements */
	if (typeof WOW == 'function') {
		new WOW().init();
	}

	/* Parallax Effects */
	if (!!$.prototype.enllax) {
		$(window).enllax();
	}
});