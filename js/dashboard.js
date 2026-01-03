// Check authentication state
firebase.auth().onAuthStateChanged((user) => {
    const welcomeMessage = document.getElementById('welcomeMessage');
    const errorMessage = document.getElementById('errorMessage');

    if (user) {
        // User is signed in
        welcomeMessage.textContent = `Welcome, ${user.email}!`;
        errorMessage.textContent = '';
    } else {
        // No user is signed in → redirect to sign-in page
        welcomeMessage.textContent = '';
        errorMessage.textContent = 'Access denied. Redirecting to sign-in...';
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    }
});

// Sign Out functionality
document.getElementById('signOutBtn').addEventListener('click', () => {
    firebase.auth().signOut()
        .then(() => {
            alert('Signed out successfully');
            window.location.href = 'index.html';
        })
        .catch((error) => {
            document.getElementById('errorMessage').textContent = `Sign out error: ${error.message}`;
        });
});