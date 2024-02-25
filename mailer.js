import nodemailer from './node_modules/nodemailer';

  document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'tspraneeth987@gmail.com', // Your Gmail email address
            pass: 'gjfw gkbt ihjb yapk' // Your Gmail password or App Password
        }
    });

    // Email options
    const mailOptions = {
        from: email,
        to: 'tspraneeth987@gmail.com', // Your Gmail email address
        subject: 'Message from ' + name,
        text: message
    };

    // Send email using Nodemailer
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.error("Error occurred while sending email:", error);
            alert("Error occurred while sending email. Please try again later.");
        } else {
            console.log("Email sent:", info.response);
            alert("Email sent successfully!");
            document.getElementById('contactForm').reset(); // Clear form
        }
    });
  });