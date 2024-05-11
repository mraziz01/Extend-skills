
  window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      var scrollToTopButton = document.getElementById("scrollToTop");
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = "block"; // Show the button when user scrolls down
      } else {
        scrollToTopButton.style.display = "none"; // Hide the button when user is at the top
      }
    }

    function scrollToTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
    }
