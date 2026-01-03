document.getElementById('signInForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    firebase.auth().signInWithEmailAndPassword(email, password)
        // Inside the .then() after successful sign-in
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('User signed in:', user);
            errorMessage.textContent = '';
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            errorMessage.textContent = `Error: ${errorMsg}`;
            console.error('Sign-in error:', errorCode, errorMsg);
        });
});