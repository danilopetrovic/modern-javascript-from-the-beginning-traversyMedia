document.querySelector('.get-jokes').addEventListener('click', function (e) {
    e.preventDefault();

    const number = document.querySelector('input[type="number"]').value;
    // console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.response);
            // console.log(response.value);

            let output = '';
            if (response.type === 'success') {
                response.value.forEach(function (joke) {
                    // console.log(joke.joke)
                    output += `<li>${joke.joke}</li>`
                });
                document.querySelector('.jokes').innerHTML = output;
            } else {
                output += '<li>something went wrong...</li>'
            }
        }

    };

    xhr.send();
});