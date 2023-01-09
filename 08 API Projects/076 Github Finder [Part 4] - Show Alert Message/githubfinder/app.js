// Init Github class
const github = new Github();
const ui = new Ui();

// Search input
const searchUser = document.getElementById('searchUser');
let typingTimer;
const delay = 1000;

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    clearTimeout(typingTimer);

    const doneTyping = () => {
        // Get input text
        const userText = e.target.value;

        if (userText !== '') {
            // Make http call
            github.getUser(userText)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        // Show alert
                        ui.showAlert('User not found', 'alert alert-danger');
                    } else {
                        // Show profile
                        ui.showProfile(data.profile);

                    }
                });
        } else {
            // Clear profile
            ui.clearProfile();
        }

    }

    typingTimer = setTimeout(doneTyping, delay);
})
