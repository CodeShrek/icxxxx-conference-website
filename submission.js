// Handles switching between the "Submit Paper" and "Track Application" tabs
function switchTab(event, tabId) {
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Remove active class from all tab content areas
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Add active class to the clicked button and the corresponding content area
    event.currentTarget.classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Simulates checking the tracking status
function showTrackingResult() {
    const inputField = document.getElementById('trackId').value;
    
    if (inputField.trim() === "") {
        alert("Please enter a Submission ID or Email Address.");
        return;
    }
    
    // Display the mock result box
    document.getElementById('trackingResult').style.display = 'block';
}

// Simulates hitting the submit button
function handleMockSubmit() {
    alert("This is a frontend demo. To make this work, it needs to be linked to a backend database or a service like EasyChair.");
}