let re, str;
// Literal Characters
str = 'Hello World!';
re = /hello/;
test(re, str);

re = /hello/i;
test(re, str);

// Metacharacter Symbols
str = 'Brad Hello World!';
re = /^h/i;           // Must start with
test(re, str, "Must start with");

str = 'Hello World!';
re = /^h/i;           // Must start with
test(re, str, "Must start with");

re = / world$/i;     // Must ends with. Works with 1 or more characters!
test(re, str, "Must ends with. Works with 1 or more characters!");

re = /^hello$/i;     // Must begin and end with
test(re, str, "Must begin and end with");

str = "H_llo World!"
re = /h.llo/i;      // Matches any ONE character
test(re, str, "Matches any ONE character");

str = 'hllo!';
re = /h*llo/i;      // Matches any character 0 or more times
test(re, str, "Matches any character 0 or more times");

str = 'hhhhhhhhllo!';
re = /h*llo/i;      // Matches any character 0 or more times
test(re, str, "Matches any character 0 or more times");

str = 'Gray?';
re = /gre?a?y/i;    // Optional character
test(re, str, "Optional character");

str = 'Grey?';
re = /gre?a?y/i;    // Optional character
test(re, str, "Optional character");

str = 'Gry?';
re = /gre?a?y/i;    // Optional character
test(re, str, "Optional character");

re = /gre?a?y\?/i;    // Escape character. Litteral question mark so it works like string instead of optional regEx character...
test(re, str, "Escape character. Litteral question mark so it works like string instead of optional regEx character...");

// Log Results
function test(re, str, msg) {
    console.warn(`| --------------"${re}", "${str}"-------------- | ${msg ? msg : ""}`)
    const result = re.exec(str);
    console.log(result);

    if (re.test(str)) {
        // console.log(re.test(str)); // returns true or false
        console.log(`${str} matches ${re.source}`);
        console.log('\n')
    } else {
        console.log(`${str} does NOT match ${re.source}`);
        console.log('\n')
    }
}