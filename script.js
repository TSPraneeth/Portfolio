const wrapper = document.getElementById('hamburger-wrapper')
const primaryNav = document.querySelector('.primary_navigation');
const navLink = document.querySelectorAll('.primary_navigation li a');
const experienceButton = document.querySelectorAll(".experience_buttons .buttons");
var professional_section = document.querySelector(".professional");
var additional_section = document.querySelector(".additional");

document.addEventListener('DOMContentLoaded', function() {
    AOS.init({
      duration: 400,
      offset: 100,
      easing: "linear"
    });
  });

// Check if page is reloaded

// if (sessionStorage.getItem('reloaded') != null) {
//   location.href = "https://tspraneeth.github.io/Portfolio/#header";
// } else {
//   console.log('page was not reloaded');
// }

// sessionStorage.setItem('reloaded', 'yes');

// Check if page is reloaded ends

// To display loading screen before page load

window.addEventListener("scroll",function() {
  const header = document.querySelector(".header_navigation");
  header.classList.toggle("sticky",window.scrollY > 0);
})

window.addEventListener("load", function () {
  // Get the preloader element
  const preloader = document.querySelector(".preloader");

  // Set a timeout to hide the preloader after 2 seconds (2000 milliseconds)
  setTimeout(function () {
    // Hide the preloader
    preloader.style.display = "none";
  }, 500);
});

//To display loading screen before page load ends

//hamburger-menu

wrapper.addEventListener("click", () => {
  wrapper.classList.toggle("open");
  const visibility = primaryNav.getAttribute('data-visible');

  if (visibility === "false") {
    primaryNav.setAttribute('data-visible', true);
    wrapper.setAttribute('aria-expanded', true);
  } else if (visibility === "true") {
    primaryNav.setAttribute('data-visible', false);
    wrapper.setAttribute('aria-expanded', false);
  }
});

//hamburger-menu ends

//wrapping each letter in a span 
span_letters('banner_name');
span_letters('banner_role');

function span_letters(banner) {
  var banner_namee = document.querySelector('.'+banner).textContent;
  var text_wrapped = banner_namee.replace(/\w/g, '<span>$&</span>');

  document.querySelector('.'+banner).innerHTML = text_wrapped;
}

//wrapping each letter in a span ends

//Go-to specific page based on mobile navigation click

navLink.forEach(function (link) {
  link.addEventListener("click", () => {
    wrapper.classList.remove("open");
    primaryNav.setAttribute("data-visible", "false");
    this.setAttribute("aria-expanded", "false");
  });
});

//Go-to specific page based on mobile navigation click ends

//span each letter 


//span each letter ends

//Change URL based on scroll

window.addEventListener("scroll", function () {
  var scrollPosition = window.scrollY;
  // Check the scroll position and update the URL accordingly 
  if (scrollPosition <= 100) {
    history.pushState({}, "", "#landing_page");
  } else if (scrollPosition > 100 && scrollPosition <= 720) {
    history.pushState({}, "", "#about_page");
  } else if (scrollPosition > 720  && scrollPosition <=1800) {
    history.pushState({}, "", "#experience_page");
  }
  else if (scrollPosition > 1800 && scrollPosition <=2400) {
    history.pushState({}, "", "#projects_page");
  }
  else
  {
    history.pushState({}, "", "#contact_me_page");
  }
});

//Change URL based on scroll ends

//Experience buttons change

experienceButton.forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior

    // Remove 'active' class from all buttons
    experienceButton.forEach(function (btn) {
      btn.classList.remove("active");
    });

    // Add 'active' class to the clicked button
    this.classList.add("active");

    if (this.getAttribute('id') === "professional") {
      professional_section.style.display = "grid";
      additional_section.style.display = "none";
    } else if (this.getAttribute('id') === "additional") {
      professional_section.style.display = "none";
      additional_section.style.display = "grid";
    }

  });
});

//Experience buttons change ends

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting via the browser
        // Your EmailJS code to send the email
        emailjs.sendForm('service_k1tshyv', 'template_k2lnggi', this)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                // Optionally, display a success message to the user
            }, function(error) {
                console.error('Error sending email:', error);
                // Optionally, display an error message to the user
            });
    });