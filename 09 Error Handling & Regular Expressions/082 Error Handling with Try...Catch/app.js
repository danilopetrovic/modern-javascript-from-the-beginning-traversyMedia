const user = {
    email: 'jdoe@gmail.com'
}

try {
    // Produce a ReferenceError
    // myFunction();

    // Produce a TypeError
    // null.myFunction();

    // Produce SyntaxError
    // console.log(eval(2 + 2)); // This work...
    // eval('"Hello World"'); // This are looked as string and dont cause an error
    // eval('Hello World'); // This are looked as variables

    // Produce a URIError
    // decodeURIComponent('%');

    if (!user.name) {
        // throw 'User has no name'; // Ispravnije je sa new Error zato sto je samo sa throw undefind za gresku!!!

        // mozes da biras tip greske:
        throw new Error('User has no name');
        // throw new ReferenceError('User has no name');
        // throw new TypeError('User has no name');
        // throw new SyntaxError('User has no name');
        // throw new URIError('User has no name');
    }
} catch (err) {
    console.log(err);
    console.log(err.name);
    console.log(err.message);
    // Format message however we want
    console.log(`This is a name of error: "${err.name}" and this is a message of error: "${err.message}", it is formated however i wanted...`);
    // Types of errors
    console.log(err instanceof ReferenceError);
    console.log(err instanceof TypeError);
    console.log(err instanceof SyntaxError);
    console.log(err instanceof URIError);
} finally {
    console.log('Finally runs regardless of result!!!')
}


console.log('Program continues because error is in try - catch...')