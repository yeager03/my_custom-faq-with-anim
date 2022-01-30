window.addEventListener('load', function () {

	let faq = document.querySelector('.faq');

	faq.addEventListener('click', function (e) {
		if (e.target.classList.contains('ask')) {
			// console.log(e.target);
			toogleItem(e.target);
		}
	});

	function toogleItem(ask) {
		let answer = ask.parentNode.querySelector('.answer');

		simpleAnimToggle(answer, [
			{ opacity: 1, transform: "translateX(0px)" },
			{ opacity: 0, transform: "translateX(100px)" }
		], [
			{ opacity: 0, transform: "translateX(-100px)" },
			{ opacity: 1, transform: "translateX(0px)" }
		], 500);
	}
});

// function simpleAnimToggle(el, hideKeyframes, duration = 500) {
// 	if (el.appAnimated) {
// 		return;
// 	}

// 	el.appAnimated = true;

// 	if (el.classList.contains('open')) {
// 		// console.dir(answer)
// 		let animate = el.animate(hideKeyframes, { duration: duration });

// 		animate.addEventListener('finish', function () {
// 			el.classList.remove('open');
// 			el.appAnimated = false;
// 		});
// 	} else {
// 		el.classList.add('open');

// 		let animate = el.animate(hideKeyframes, { duration: duration, direction: "reverse" });

// 		animate.addEventListener('finish', function () {
// 			el.appAnimated = false;
// 		});
// 	}
// }


function simpleAnimToggle(el, hideKeyframes, showKeyframes, duration = 500) {
	if (!("animate" in el)) {
		el.classList.toggle("open");
		return;
	}

	if (el.appAnimated) {
		return;
	}

	el.appAnimated = true;

	if (el.classList.contains('open')) {
		let animate = el.animate(hideKeyframes, { duration: duration });

		animate.addEventListener('finish', function () {
			el.classList.remove('open');
			el.appAnimated = false;
		});
	} else {
		el.classList.add('open');

		let animate = el.animate(showKeyframes, { duration: duration });

		animate.addEventListener('finish', function () {
			el.appAnimated = false;
		});
	}
}

