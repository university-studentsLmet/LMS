document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in successfully
            const user = userCredential.user;
            console.log('User signed in:', user);
            errorMessage.textContent = ''; // Clear errors
            // Redirect to dashboard or next page (e.g., window.location.href = 'dashboard.html';)
            alert('Sign-in successful! Redirecting to dashboard...');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            errorMessage.textContent = `Error: ${errorMsg}`;
            console.error('Sign-in error:', errorCode, errorMsg);
        });
});