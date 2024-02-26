function currentSlide(n) {
    var testimonials = document.getElementsByClassName("testimonial");
    var indicators = document.getElementsByClassName("testimonial-indicators")[0].getElementsByTagName("li");

    for (var i = 0; i < testimonials.length; i++) {
        testimonials[i].classList.remove("active");
        indicators[i].classList.remove("active");
    }

    testimonials[n - 1].classList.add("active");
    indicators[n - 1].classList.add("active");
}

// Attach event listeners to the indicators
window.onload = function() {
    var indicators = document.getElementsByClassName("testimonial-indicators")[0].getElementsByTagName("li");
    for (var i = 0; i < indicators.length; i++) {
        (function(index) {
            indicators[index].addEventListener("click", function() {
                currentSlide(index + 1);
            });
        })(i);
    }
};
