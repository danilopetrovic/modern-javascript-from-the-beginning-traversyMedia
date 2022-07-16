const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, response) {
//     if (error) {
//       console.log(error);
//     } else {
//         console.log(response);
//     }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
}

// Create Post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Update Post With PUT on post 3
// http.put('https://jsonplaceholder.typicode.com/posts/3', data, function (error, post) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log(post);
//     }
// });

// Delete Posts
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, post) {
    if (error) {
        console.log(error);
    } else {
        console.log(post);
    }
});