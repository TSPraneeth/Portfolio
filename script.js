const wrapper = document.getElementById('hamburger-wrapper')
const primaryNav = document.querySelector('.primary_navigation');
const navLink = document.querySelectorAll('.primary_navigation li a');
const experienceButton = document.querySelectorAll(".experience_buttons .buttons");
var professional_section = document.querySelector(".professional");
var additional_section = document.querySelector(".additional");

    AOS.init({
      once: true
    });

// Check if page is reloaded

if (sessionStorage.getItem('reloaded') != null) {
  location.href = "https://tspraneeth.github.io/Portfolio/#header";
} else {
  console.log('page was not reloaded');
}

sessionStorage.setItem('reloaded', 'yes');

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
  console.log(scrollPosition);
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

  //Contact form starts

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    sendEmail();
  });
  
  // function sendEmail() {
  //   Email.send({
  //       Host: "smtp.gmail.com",
  //       Username: "tspraneeth987@gmail.com",
  //       Password: "DD1DE07E83F280F18E6AFD42312E472D66D2",
  //       To: 'tspraneeth987@gmail.com',
  //       From: document.getElementById('email').value,
  //       Subject: "Contact Form Submission",
  //       Body: "Name: " + document.getElementById('name').value + "<br>Email: " + document.getElementById('email').value + "<br>Message: " + document.getElementById('message').value
  //   }).then(
  //       message => alert("Email sent successfully")
  //   );
  // }
  
  //Contact form ends

  function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    Email.send({
        Host: "smtp.gmail.com", // Enter your SMTP server hostname
        Username: "tspraneeth987@gmail.com", // Enter your SMTP username
        Password: "DD1DE07E83F280F18E6AFD42312E472D66D2", // Enter your SMTP password
        To: 'tspraneeth987@gmail.com', // Enter recipient email address
        From: email,
        Subject: 'Message from ' + name,
        Body: message
    }).then(
        function(response) {
          alert(response);
            if (response === 'OK') {
                alert('Email sent successfully!');
                document.getElementById('contactForm').reset(); // Clear form
            } else {
                alert('Failed to send email. Please try again later.');
            }
        },
        function(error) {
            console.error('Error:', error);
            alert('Error occurred while sending email. Please try again later.');
        }
    );
}