// Init Github class
const github = new Github();

// Search input
const searchUser = document.getElementById('searchUser');
let typingTimer;
const delay = 1000;

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    clearTimeout(typingTimer);

    const doneTyping = () => {
        // Get input text
        const userText = e.target.value

        if (userText !== '') {
            // Make http call
            github.getUser(userText)
                .then(data => {
                    if (data.profile.message === 'Not Found') {
                        // Show alert
                        console.log('not found....')

                    } else {
                        // Show profile
                        console.log(data);

                    }
                });
        } else {
            // Clear profile

        }

    }

    typingTimer = setTimeout(doneTyping, delay);
})
