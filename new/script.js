document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    let dobInput = document.getElementById('dob').value;
    if (!dobInput) {
        document.getElementById('result').innerText = "Please enter a valid date of birth.";
        return;
    }
    
    // Parse the input date
    let dob = new Date(dobInput);
    
    // Get today's date
    let today = new Date();
    
    // Calculate the age
    let age = today.getFullYear() - dob.getFullYear();
    let monthDifference = today.getMonth() - dob.getMonth();
    
    // Adjust the age if the birthday has not occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    
    // Display the result
    document.getElementById('result').innerText = "Your age is: " + age;

    
    if (dob.getMonth() === 3 && dob.getDate() === 27) {
        // Play birthday song
        let birthdaySong = document.getElementById('birthdaySong');
        birthdaySong.play();

        // Change the page background and greeting to romantic theme
        document.getElementById('main-container').style.backgroundColor = "#ffd1dc";
        document.getElementById('greeting').innerText = "💖💫 Happy Birthday Pranali! 💫💖";

        // Trigger Fireworks
        triggerFireworks();

        // Show romantic pop-up message
        showPopup();

        // Add floating hearts and stars to the page
        generateHearts(10); // Generate 10 hearts
        generateStars(70);  // Generate 50 stars
    }
});

// Function to show the romantic popup
function showPopup() {
    const popup = document.getElementById('Popup');
    popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
    const popup = document.getElementById('Popup');
    popup.style.display = 'none';
    
    // Stop the birthday song when the popup is closed
    let birthdaySong = document.getElementById('birthdaySong');
    birthdaySong.pause();
    birthdaySong.currentTime = 0; // Reset the song to the beginning
	window.location.reload(); 
}

// Function to create fireworks
function triggerFireworks() {
    const fireworkContainer = document.querySelector('.firework-container');
    const colors = ["#ff69b4", "#ff80ff", "#ffbb00", "#ffcc00", "#ff3399"];
    
    // Generate multiple fireworks with random positions and colors
    for (let i = 0; i < 10; i++) {
        let firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = Math.random() * 100 + '%';
        firework.style.top = Math.random() * 80 + '%';
        firework.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        firework.style.animationDelay = Math.random() * 3 + 's'; // Stagger fireworks
        fireworkContainer.appendChild(firework);
        
        // Remove the firework after it explodes
        setTimeout(() => {
            firework.remove();
        }, 1500); // Remove firework after 1.5s to clear screen
    }
}

// Function to generate hearts
function generateHearts(numHearts) {
    const container = document.body;
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(heart);
    }
}

// Function to generate stars
function generateStars(numStars) {
    const container = document.body;
    for (let i = 0; i < numStars; i++) {
        const star = document.createElement('div');
        star.classList.add('star');
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        container.appendChild(star);
    }
}
