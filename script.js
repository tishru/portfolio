// Smooth Scrolling Effect for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const sectionId = this.getAttribute('href'); 
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting Message
window.onload = function() {
    const header = document.querySelector("header h1");
    const greetings = ["Hello!", "Hi there!", "Welcome!", "Nice to see you!", "Greetings!"];
    let index = 0;

    function changeGreeting() {
        header.innerText = greetings[index] + " I'm Shruti Wakchoure";
        index = (index + 1) % greetings.length;
    }

    setInterval(changeGreeting, 3000); // Change greeting every 3 seconds
};
