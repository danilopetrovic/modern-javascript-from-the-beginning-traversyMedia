let re, str;

// Shorthand Character Classes
str = 'Gray Gray Gray ?!';
re = /\w/;     // Word character - alphanumeric or _
test(re, str, "Word character - alphanumeric or _");
re = /\w+/;     // + = one or more
test(re, str, "+ = one or more");

str = 'Here is a _nonword character ?!';
re = /\W/;     // Non-Word character
test(re, str, "Non-Word character");

str = 'Here is a 123 digit character ?!';
re = /\d/;     // Match any digit
test(re, str, "Match any digit");
re = /\d+/;    // Match any digit 0 or more times
test(re, str, "Match any digit 0 or more times");

str = 'Any non-digit character ?!';
re = /\D/;      // Match any Non-digit
test(re, str, "Match any Non-digit");

str = 'Any non-digit character ?!';
re = /\s/;      // Match whitespace char
test(re, str, "Match whitespace char");

str = 'Any non-digit character ?!';
re = /\S/;      //  Match non-whitespace char
test(re, str, "Match non-whitespace char");

str = 'Hello, wellcome to hell ?!';
re = /Hell\b/i; //  Word boundary
test(re, str, "Word boundary");

// Assertions
str = 'asdf xz asdfasf';
re = /x(?=y)/;  // Match x only if followed by y
test(re, str, "Match x only if followed by y");
str = 'asdf xy asdfasf';
re = /x(?=y)/;  // Match x only if followed by y
test(re, str, "Match x only if followed by y");

str = 'asdf xz asdfasf';
re = /x(?!y)/;  // Match x only if NOT followed by y
test(re, str, "Match x only if NOT followed by y");

str = 'asdf xy asdfasf';
re = /x(?!y)/;  // Match x only if NOT followed by y
test(re, str, "Match x only if NOT followed by y");

// Log Results
function test(re, str, msg) {
    console.warn(`| --------------"${re}", "${str}"-------------- | ${msg ? msg : ""}`)
    const result = re.exec(str);
    console.log(result);

    if (re.test(str)) {
        // console.log(re.test(str)); // returns true or false
        console.log(`${str} matches ${re.source}`);
        console.log('\n');
    } else {
        console.log(`${str} does NOT match ${re.source}`);
        console.log('\n');
    }
}