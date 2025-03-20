// ✅ Function to highlight all bold (<strong>) elements
function highlight() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and change color to green
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 128, 0)'; // ✅ Green color
    });
}

// ✅ Function to reset color to normal
function return_normal() {
    // Select all <strong> elements
    const boldWords = document.querySelectorAll('strong');
    
    // Loop through each <strong> element and reset color to black
    boldWords.forEach(word => {
        word.style.color = 'rgb(0, 0, 0)'; // ✅ Black color
    });
}

