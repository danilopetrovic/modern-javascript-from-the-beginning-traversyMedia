document.querySelector('.get-jokes').addEventListener('click', function (e) {
    e.preventDefault();

    const number = document.querySelector('input[type="number"]').value;
    var apiKey = 'K1Z/8bkCfxYbv4kEN3PcxA==LTETBGjnFT6CiTkW';
    var url = 'https://api.api-ninjas.com/v1/jokes?limit=' + number;
    // console.log(number);

    const xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Api-Key', apiKey);

    xhr.onload = function () {
        if (this.status === 200) {
            const response = JSON.parse(this.response);
            // console.log(response);

            let output = '';

            response.forEach(function (joke) {
                // console.log(joke.joke)
                output += `<li>${joke.joke}</li>`
            });
            document.querySelector('.jokes').innerHTML = output;
        }
    };

    xhr.onerror = function () {
        console.error('Network error occurred');
    };

    xhr.send();
});