function currentSlide(n) {
    var testimonials = document.getElementsByClassName("testimonial");
    var indicators = document.getElementsByClassName("testimonial-indicators")[0].getElementsByTagName("li");
  
    for (var i = 0; i < testimonials.length; i++) {
      testimonials[i].style.display = "none";
      indicators[i].className = indicators[i].className.replace(" active", "");
    } 
  
    testimonials[n - 1].style.display = "block";
    indicators[n - 1].className += " active";
  }
  
  // Add event listeners to the indicators
  document.addEventListener("DOMContentLoaded", function() {
    var indicators = document.getElementsByClassName("testimonial-indicators")[0].getElementsByTagName("li");
    for (var i = 0; i < indicators.length; i++) {
      (function(index) {
        indicators[index].addEventListener("click", function() {
          currentSlide(index + 1);
        });
      })(i);
    }
  });
  