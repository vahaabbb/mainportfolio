function sendMail() {
    const params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const serviceID = "service_64mvk1i";
    const templateID = "template_khqprk8";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message has been sent successfully!");
        })
        .catch(err => {
            console.error("Error:", err);
            alert("Failed to send your message. Please try again later.");
        });
}